# Generated by Django 3.2.19 on 2024-09-06 13:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('car_booking', '0004_alter_booking_car'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='car',
            name='is_available',
        ),
    ]
