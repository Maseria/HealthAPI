from .serializers import HealthSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

class HealthSubmitView(APIView):
    def post(self, request):
        try:
            data = request.data

            #Extract the input values, and validate!
            try:
                calories = float(data.get('calories', 0))
                sleep_hours = float(data.get('hours_slept', 0))
                distance_walked = float(data.get('km_walked', 0))

                if calories < 0 or sleep_hours < 0 or distance_walked < 0:
                    return Response(
                        {"error": "Values cannot be negative. Please enter valid numbers."},
                        status=status.HTTP_400_BAD_REQUEST
                    )
            except ValueError:
                return Response(
                    {"error": "Invalid input. Please provide numeric values."},
                    status=status.HTTP_400_BAD_REQUEST
                )

            #Recommended health ranges globally
            healthy_ranges = {
                "calories": (2000, 2500),  # kcal/day
                "sleep": (7, 9),  # hours/night
                "walk": (5, 10)  # km/day
            }

            #Score weight distribution, for better perfo
            weightage = {"calories": 30, "sleep": 30, "walk": 40}

            #Calculating the total health scores
            scores = {
                "calories": min((calories / healthy_ranges["calories"][1]) * weightage["calories"], weightage["calories"]),
                "sleep": min((sleep_hours / healthy_ranges["sleep"][1]) * weightage["sleep"], weightage["sleep"]),
                "walk": min((distance_walked / healthy_ranges["walk"][1]) * weightage["walk"], weightage["walk"])
            }

            #Checking for improvement
            improvements = []
            if calories < 1500:
                improvements.append("You're eating too few calories. Try to consume at least 2000 kcal daily for energy.")
            elif calories > 3000:
                improvements.append("You're consuming a lot of calories. Consider balancing your intake for better health.")

            if sleep_hours < 6:
                improvements.append("You're not getting enough sleep. Aim for at least 7 hours per night.")
            elif sleep_hours > 10:
                improvements.append("Too much sleep can make you feel sluggish. Try sticking to 7-9 hours.")

            if distance_walked < 3:
                improvements.append("You're not walking enough. Try to walk at least 5 km a day for better fitness.")
            elif distance_walked > 15:
                improvements.append("You're walking a lot! If you feel exhausted, reducing it slightly may help recovery.")

            #Calculating the final health score
            total_score = round(sum(scores.values()), 2)

            #the response message
            if total_score >= 70:
                message = "You're maintaining a healthy lifestyle! Keep it up!"
            else:
               message = "You're doing well, but here are some improvements to consider."

            return Response(
                {
                    "health_score": total_score,
                    "message": message,
                    "suggested_improvements": improvements or ["No major improvements needed!"]
                },
                status=status.HTTP_200_OK
            )

        except Exception as e:
            return Response({"error": f"Something went wrong: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
