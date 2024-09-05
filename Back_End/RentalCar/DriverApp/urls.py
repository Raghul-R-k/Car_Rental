from django.urls import path
from .views import driver_registration

urlpatterns = [
    path('register-driver/', driver_registration, name='register-driver'),
]
