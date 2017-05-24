from rest_framework import generics
from .models import Army_Builder
from .serializers import ArmySerializer


class ArmyList(generics.ListCreateAPIView):
  queryset = Army_Builder.objects.all()
  serializer_class = ArmySerializer

