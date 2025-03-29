from rest_framework import serializers
from .models import Health


class HealthSerializer(serializers.ModelSerializer):
    health_score = serializers.SerializerMethodField()
    class Meta:
        model = Health
        fields = ['date','calories','km_walked','hours_slept','health_score']
