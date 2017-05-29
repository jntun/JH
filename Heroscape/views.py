from rest_framework import generics
from .models import Card
from api.serializers import CardSerializer

class CardList(generics.ListCreateAPIView):
  queryset = Card.objects.all()
  serializer_class = CardSerializer