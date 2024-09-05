from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import DriverRegistrationSerializer

@api_view(['POST'])
def driver_registration(request):
    serializer = DriverRegistrationSerializer(data=request.data)
    if request.method == 'POST':
        serializer = DriverRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Driver registration successful!'}, status=200)
    return Response(serializer.errors, status=400)
