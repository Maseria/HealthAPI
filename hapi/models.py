from django.db import models


class Health(models.Model):
    date = models.DateField(auto_now_add=True)
    calories = models.IntegerField()
    km_walked = models.IntegerField()
    hours_slept = models.FloatField()
