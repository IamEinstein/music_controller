from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import Room
from .serializers import RoomSerializer
import requests
# Create your views here.
# * The generics.CreateAPIView  adds a form to create a new model
# * The generics.ListAPIView only shows the list of current models


class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


def get(request):

    info = requests.get('/api/room')
    return HttpResponse(info)
