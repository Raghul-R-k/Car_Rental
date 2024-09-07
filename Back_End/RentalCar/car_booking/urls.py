from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CarViewSet,
    UserViewSet,
    BookingViewSet,
    AdminViewSet,
    # ReservationViewSet,
    CancellationViewSet,
    AvailabilityViewSet
)

router = DefaultRouter()
router.register('cars', CarViewSet, basename='car')
router.register('users', UserViewSet, basename='user')
router.register('bookings', BookingViewSet, basename='booking')
router.register('admins', AdminViewSet, basename='admin')
# router.register('reservations', ReservationViewSet, basename='reservation')
router.register('cancellations', CancellationViewSet, basename='cancellation')
router.register('availability', AvailabilityViewSet, basename='availability')

app_name = 'car_booking'

urlpatterns = [
    path('', include(router.urls)),
]
