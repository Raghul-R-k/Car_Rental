from rest_framework import serializers
from .models import User, Car, Booking, Admin, Cancellation, Availability

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'



class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['booking_id', 'user', 'car', 'booking_date', 'pickup_date', 'return_date']

    def create(self, validated_data):
        booking = Booking.objects.create(**validated_data)
        return booking


class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = '__all__'

class CancellationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cancellation
        fields = ['cancellation_id', 'booking' , 'cancellation_date', 'reason']

    # Handle creation logic
    def create(self, validated_data):
        cancellation = Cancellation.objects.create(**validated_data)
        return cancellation

# class AvailabilitySerializer(serializers.ModelSerializer):
#     # car = CarSerializer(read_only=True)
    
#     class Meta:
#         model = Availability
#         fields = [ 'car', 'pickup_date','return_date','available_quantity' ]

class AvailabilitySerializer(serializers.ModelSerializer):
    car = serializers.PrimaryKeyRelatedField(queryset=Car.objects.all())

    class Meta:
        model = Availability
        fields = ['car', 'pickup_date', 'return_date']
