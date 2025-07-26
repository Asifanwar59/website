from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to='products/', null=True, blank=True)

class Order(models.Model):
    products = models.ManyToManyField(Product)
    total = models.DecimalField(max_digits=8, decimal_places=2)
    pickup_time = models.DateTimeField()