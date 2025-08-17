from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    return render(request, 'website/index.html')
    #return HttpResponse("Django:views.py: You are at Home page served by Django")

def about(request):
    return HttpResponse("Django:views.py: You are at about page served by Django")

def contact(request):
    return HttpResponse("Django:views.py: You are at contact page served by Django")    