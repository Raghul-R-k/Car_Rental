from rest_framework import serializers
from .models import Driver

class DriverRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = ['name', 'email', 'phone', 'license', 'vehicle_model', 'vehicle_year']
