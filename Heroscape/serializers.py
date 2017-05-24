from rest_framework import serializers

from .models import Card

class CardSerializer(serializers.ModelSerializer):

  class Meta:
    model = Card
    fields = ('id', 'count', 'unit_name', 'faction', 'race', 'classification', 'type', 'nature', 'size', 'life', 'move', 'range', 'attack', 'defense', 'points', 'unit_count')
