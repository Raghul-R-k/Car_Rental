from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.exceptions import APIException
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import User, Car, Booking, Admin, Cancellation, Availability
from .serializers import UserSerializer, CarSerializer, BookingSerializer, AdminSerializer, CancellationSerializer, AvailabilitySerializer

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        return UserSerializer

    def list(self, request):
        try:
            users = User.objects.all()
            serializer = self.get_serializer(users, many=True)
            return Response({
                'status': status.HTTP_200_OK,
                'data': serializer.data
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def create(self, request):
        try:
            serializer = self.get_serializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'status': status.HTTP_201_CREATED,
                    'data': serializer.data,
                    'message': 'User created successfully'
                })
            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'data': serializer.errors,
                'message': 'Invalid Data'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def update(self, request, pk=None):
        try:
            user = self.get_object()
            serializer = self.get_serializer(user, data=request.data, partial=False)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'status': status.HTTP_200_OK,
                    'data': serializer.data,
                    'message': 'User Updated Successfully'
                })
            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'data': serializer.errors,
                'message': 'Invalid Data'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def partial_update(self, request, pk=None):
        try:
            user = self.get_object()
            serializer = self.get_serializer(user, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'status': status.HTTP_200_OK,
                    'data': serializer.data,
                    'message': 'User Partial Updated Successfully'
                })
            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'data': serializer.errors,
                'message': 'Invalid Data'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def destroy(self, request, pk=None):
        try:
            user = self.get_object()
            user.delete()
            return Response({
                'status': status.HTTP_200_OK,
                'message': 'User deleted successfully'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

class CarViewSet(ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        return CarSerializer

    def list(self, request):
        try:
            cars = Car.objects.all()
            serializer = self.get_serializer(cars, many=True)
            return Response({
                'status': status.HTTP_200_OK,
                'data': serializer.data
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def create(self, request):
        try:
            serializer = self.get_serializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'status': status.HTTP_201_CREATED,
                    'data': serializer.data,
                    'message': 'Car created successfully'
                })
            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'data': serializer.errors,
                'message': 'Invalid Data'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def update(self, request, pk=None):
        try:
            car = self.get_object()
            serializer = self.get_serializer(car, data=request.data, partial=False)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'status': status.HTTP_200_OK,
                    'data': serializer.data,
                    'message': 'Car Updated Successfully'
                })
            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'data': serializer.errors,
                'message': 'Invalid Data'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def partial_update(self, request, pk=None):
        try:
            car = self.get_object()
            serializer = self.get_serializer(car, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'status': status.HTTP_200_OK,
                    'data': serializer.data,
                    'message': 'Car Partial Updated Successfully'
                })
            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'data': serializer.errors,
                'message': 'Invalid Data'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def destroy(self, request, pk=None):
        try:
            car = self.get_object()
            car.delete()
            return Response({
                'status': status.HTTP_200_OK,
                'message': 'Car deleted successfully'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

class AdminViewSet(ModelViewSet):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        return AdminSerializer

    def list(self, request):
        try:
            admins = Admin.objects.all()
            serializer = self.get_serializer(admins, many=True)
            return Response({
                'status': status.HTTP_200_OK,
                'data': serializer.data
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def create(self, request):
        try:
            serializer = self.get_serializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'status': status.HTTP_201_CREATED,
                    'data': serializer.data,
                    'message': 'Admin created successfully'
                })
            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'data': serializer.errors,
                'message': 'Invalid Data'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def update(self, request, pk=None):
        try:
            admin = self.get_object()
            serializer = self.get_serializer(admin, data=request.data, partial=False)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'status': status.HTTP_200_OK,
                    'data': serializer.data,
                    'message': 'Admin Updated Successfully'
                })
            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'data': serializer.errors,
                'message': 'Invalid Data'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def partial_update(self, request, pk=None):
        try:
            admin = self.get_object()
            serializer = self.get_serializer(admin, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'status': status.HTTP_200_OK,
                    'data': serializer.data,
                    'message': 'Admin Partial Updated Successfully'
                })
            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'data': serializer.errors,
                'message': 'Invalid Data'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def destroy(self, request, pk=None):
        try:
            admin = self.get_object()
            admin.delete()
            return Response({
                'status': status.HTTP_200_OK,
                'message': 'Admin deleted successfully'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })


class BookingViewSet(ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        return BookingSerializer

    def list(self, request):
        try:
            bookings = Booking.objects.all()
            serializer = self.get_serializer(bookings, many=True)
            return Response({
                'status': status.HTTP_200_OK,
                'data': serializer.data
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    # def create(self, request):
    #     try:
    #         car_id = request.data.get('car')
    #         car = Car.objects.get(id=car_id)

    #         # Check if the car is available for the requested dates
    #         pickup_date = request.data.get('pickup_date')
    #         return_date = request.data.get('return_date')

    #         conflicting_booking = Booking.objects.filter(
    #             car=car,
    #             pickup_date__lte=return_date,
    #             return_date__gte=pickup_date
    #         ).exists()

    #         if conflicting_booking:
    #             return Response({
    #                 'status': status.HTTP_400_BAD_REQUEST,
    #                 'message': 'Car is already booked for the selected period.'
    #             })

    #         serializer = self.get_serializer(data=request.data)
    #         if serializer.is_valid():
    #             # Save booking and mark car as unavailable
    #             booking = serializer.save()
    #             car.is_available = False
    #             car.save()

    #             return Response({
    #                 'status': status.HTTP_201_CREATED,
    #                 'data': serializer.data,
    #                 'message': 'Booking created successfully'
    #             })
    #         return Response({
    #             'status': status.HTTP_400_BAD_REQUEST,
    #             'data': serializer.errors,
    #             'message': 'Invalid Data'
    #         })
    #     except Car.DoesNotExist:
    #         return Response({
    #             'status': status.HTTP_400_BAD_REQUEST,
    #             'message': 'Car not found.'
    #         })
    #     except Exception as e:
    #         print(e)
    #         raise APIException({
    #             'message': APIException.default_detail,
    #             'status': APIException.status_code
    #         })
    # def create(self, request):
    #     try:
    #         serializer = self.get_serializer(data=request.data)
    #         if serializer.is_valid():
    #             serializer.save()
    #             return Response({
    #                 'status': status.HTTP_201_CREATED,
    #                 'data': serializer.data,
    #                 'message': 'Booking created successfully'
    #             })
    #         return Response({
    #             'status': status.HTTP_400_BAD_REQUEST,
    #             'data': serializer.errors,
    #             'message': 'Invalid Data'
    #         })
    #     except Exception as e:
    #         return Response({
    #             'message': str(e),
    #             'status': status.HTTP_500_INTERNAL_SERVER_ERROR
    #         })
    # def create(self, request):
    #     try:
    #         serializer = self.get_serializer(data=request.data)
    #         if serializer.is_valid():
    #             # Save the booking data first
    #             booking = serializer.save()

    #             # Retrieve the car related to the booking
    #             car = booking.car

    #             # Mark the car as unavailable after booking
    #             car.is_available = False
    #             car.save()

    #             return Response({
    #                 'status': status.HTTP_201_CREATED,
    #                 'data': serializer.data,
    #                 'message': 'Booking created successfully and car marked as unavailable.'
    #             })
    #         return Response({
    #             'status': status.HTTP_400_BAD_REQUEST,
    #             'data': serializer.errors,
    #             'message': 'Invalid Data'
    #         })
    #     except Exception as e:
    #         return Response({
    #             'message': str(e),
    #             'status': status.HTTP_500_INTERNAL_SERVER_ERROR
    #         })

    def create(self, request):
        try:
            # Retrieve the car ID from the request data
            car_id = request.data.get('car')
            
            # Fetch the car from the database using car_id
            car = Car.objects.get(car_id=car_id)
            
            # Check if the car is available
            if not car.is_available:
                return Response({
                    'status': status.HTTP_400_BAD_REQUEST,
                    'message': 'The car is not available for booking.'
                })
            
            # Proceed with booking if the car is available
            serializer = self.get_serializer(data=request.data)
            if serializer.is_valid():
                # Save the booking data
                booking = serializer.save()

                # Mark the car as unavailable after booking
                car.is_available = False
                car.save()

                return Response({
                    'status': status.HTTP_201_CREATED,
                    'data': serializer.data,
                    'message': 'Booking created successfully and car marked as unavailable.'
                })
            
            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'data': serializer.errors,
                'message': 'Invalid Data'
            })
        
        except Car.DoesNotExist:
            return Response({
                'status': status.HTTP_404_NOT_FOUND,
                'message': 'Car not found.'
            })
        
        except Exception as e:
            return Response({
                'message': str(e),
                'status': status.HTTP_500_INTERNAL_SERVER_ERROR
            })


    def update(self, request, pk=None):
        try:
            booking = self.get_object()
            serializer = self.get_serializer(booking, data=request.data, partial=False)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'status': status.HTTP_200_OK,
                    'data': serializer.data,
                    'message': 'Booking Updated Successfully'
                })
            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'data': serializer.errors,
                'message': 'Invalid Data'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def partial_update(self, request, pk=None):
        try:
            booking = self.get_object()
            serializer = self.get_serializer(booking, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'status': status.HTTP_200_OK,
                    'data': serializer.data,
                    'message': 'Booking Partial Updated Successfully'
                })
            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'data': serializer.errors,
                'message': 'Invalid Data'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def destroy(self, request, pk=None):
        try:
            booking = self.get_object()
            booking.delete()
            return Response({
                'status': status.HTTP_200_OK,
                'message': 'Booking deleted successfully'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

class CancellationViewSet(ModelViewSet):
    queryset = Cancellation.objects.all()
    serializer_class = CancellationSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        return CancellationSerializer

    def list(self, request):
        try:
            cancellations = Cancellation.objects.all()
            serializer = self.get_serializer(cancellations, many=True)
            return Response({
                'status': status.HTTP_200_OK,
                'data': serializer.data
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    # def create(self, request):
    #     try:
    #         serializer = self.get_serializer(data=request.data)
    #         if serializer.is_valid():
    #             # Save the cancellation
    #             cancellation = serializer.save()

    #             # Get the related booking and update its status
    #             booking = cancellation.booking
    #             booking.status = 'canceled'
    #             booking.save()

    #             return Response({
    #                 'status': status.HTTP_201_CREATED,
    #                 'data': serializer.data,
    #                 'message': 'Cancellation created successfully and booking status updated'
    #             })
    #         return Response({
    #             'status': status.HTTP_400_BAD_REQUEST,
    #             'data': serializer.errors,
    #             'message': 'Invalid Data'
    #         })
    #     except Exception as e:
    #         print(e)
    #         raise APIException({
    #             'message': APIException.default_detail,
    #             'status': APIException.status_code
    #         })


    def create(self, request):
        try:
            serializer = self.get_serializer(data=request.data)
            if serializer.is_valid():
                # Save the cancellation
                cancellation = serializer.save()

                # Retrieve the related booking
                booking = cancellation.booking

                # Update the booking status to 'canceled'
                booking.status = 'canceled'
                booking.save()

                # Retrieve the associated car and mark it as available
                car = booking.car
                car.is_available = True
                car.save()

                return Response({
                    'status': status.HTTP_201_CREATED,
                    'data': serializer.data,
                    'message': 'Cancellation created successfully, booking status updated, and car marked as available.'
                })

            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'data': serializer.errors,
                'message': 'Invalid Data'
            })

        except Exception as e:
            print(e)
            raise APIException({
                'message': str(e),
                'status': status.HTTP_500_INTERNAL_SERVER_ERROR
            })
  

    def update(self, request, pk=None):
        try:
            cancellation = self.get_object()
            serializer = self.get_serializer(cancellation, data=request.data, partial=False)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'status': status.HTTP_200_OK,
                    'data': serializer.data,
                    'message': 'Cancellation Updated Successfully'
                })
            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'data': serializer.errors,
                'message': 'Invalid Data'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def partial_update(self, request, pk=None):
        try:
            cancellation = self.get_object()
            serializer = self.get_serializer(cancellation, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'status': status.HTTP_200_OK,
                    'data': serializer.data,
                    'message': 'Cancellation Partial Updated Successfully'
                })
            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'data': serializer.errors,
                'message': 'Invalid Data'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def destroy(self, request, pk=None):
        try:
            cancellation = self.get_object()
            cancellation.delete()
            return Response({
                'status': status.HTTP_200_OK,
                'message': 'Cancellation deleted successfully'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })
class AvailabilityViewSet(ModelViewSet):
    queryset = Availability.objects.all()
    serializer_class = AvailabilitySerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        return AvailabilitySerializer

    def list(self, request):
        try:
            availabilities = Availability.objects.all()
            serializer = self.get_serializer(availabilities, many=True)
            return Response({
                'status': status.HTTP_200_OK,
                'data': serializer.data
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def create(self, request):
        try:
            serializer = self.get_serializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'status': status.HTTP_201_CREATED,
                    'data': serializer.data,
                    'message': 'Availability created successfully'
                })
            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'data': serializer.errors,
                'message': 'Invalid Data'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def update(self, request, pk=None):
        try:
            availability = self.get_object()
            serializer = self.get_serializer(availability, data=request.data, partial=False)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'status': status.HTTP_200_OK,
                    'data': serializer.data,
                    'message': 'Availability Updated Successfully'
                })
            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'data': serializer.errors,
                'message': 'Invalid Data'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def partial_update(self, request, pk=None):
        try:
            availability = self.get_object()
            serializer = self.get_serializer(availability, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({
                    'status': status.HTTP_200_OK,
                    'data': serializer.data,
                    'message': 'Availability Partial Updated Successfully'
                })
            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'data': serializer.errors,
                'message': 'Invalid Data'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

    def destroy(self, request, pk=None):
        try:
            availability = self.get_object()
            availability.delete()
            return Response({
                'status': status.HTTP_200_OK,
                'message': 'Availability deleted successfully'
            })
        except Exception as e:
            print(e)
            raise APIException({
                'message': APIException.default_detail,
                'status': APIException.status_code
            })

