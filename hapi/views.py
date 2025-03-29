from .serializers import HealthSerializer
from rest_framework.views import APIView 
from rest_framework import status
from rest_framework.response import Response

class HealthSubmitView(APIView):
    def post(self, request):

        try:
            data = request.data
            calories = float(data.get('calories', 0))
            hours_slept = float(data.get('hours_slept', 0))
            km_walked = float(data.get('km_walked', 0))

            score = (calories/2000 * 30) + (hours_slept / 8 * 30) + (km_walked / 5 * 40)
            return Response({"health_score": round(score, 2)}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
