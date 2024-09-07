from django.db import models

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    address = models.TextField()
    phone_number = models.CharField(max_length=15)

    def __str__(self):
        return self.username

class Car(models.Model):
    car_id = models.AutoField(primary_key=True)
    description = models.TextField()
    seat_type = models.CharField(max_length=50)
    automatic = models.BooleanField(default=False)
    gps = models.BooleanField(default=False)
    speed = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    img_url = models.URLField()
    car_name = models.CharField(max_length=100)
    rating = models.FloatField()
    brand = models.CharField(max_length=50)
    is_available = models.BooleanField(default=True)  # New field to track availability

    def __str__(self):
        return self.car_name

# class Booking(models.Model):
#     booking_id = models.AutoField(primary_key=True)
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     car = models.ForeignKey(Car, on_delete=models.CASCADE)
#     booking_date = models.DateField()
#     pickup_date = models.DateField()
#     return_date = models.DateField()
#     total_price = models.DecimalField(max_digits=10, decimal_places=2)

#     def __str__(self):
#         return f"Booking {self.booking_id} by {self.user.username}"

class Booking(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('canceled', 'Canceled'),
    ]
    booking_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    car = models.ForeignKey(Car, on_delete=models.CASCADE,null=True)
    booking_date = models.DateField()
    pickup_date = models.DateField()
    return_date = models.DateField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')

    def __str__(self):
        return f"Booking {self.booking_id} - {self.status}"


class Admin(models.Model):
    admin_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.username


class Cancellation(models.Model):
    cancellation_id = models.AutoField(primary_key=True)
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE)
    cancellation_date = models.DateField()
    reason = models.TextField()

    def __str__(self):
        return f"Cancellation {self.cancellation_id} for Booking {self.booking.booking_id}"

class Availability(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE, primary_key=True)
    pickup_date = models.DateField()
    return_date = models.DateField()
    available_quantity = models.IntegerField()

    def __str__(self):
        return f"Availability for {self.car.car_name}"
