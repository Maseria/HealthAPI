import requests

request_body = {"calories": 1000, "km_walked": 10, "hours_slept":12}
r = requests.post('http://127.0.0.1:8000/api/health/score', data=request_body)

print(r.json())