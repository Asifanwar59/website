# bakery_app/views.py
from django.shortcuts import render
from .models import Product

from rest_framework import viewsets
from .models import Product, Order
from .serializers import ProductSerializer, OrderSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


def index(request):
    products = Product.objects.all()
    return render(request, 'index.html', {'products': products})