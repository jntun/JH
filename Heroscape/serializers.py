from rest_framework import serializers

from .models import Card

class CardSerializer(serializers.ModelSerializer):

  class Meta:
    model = Card
    fields = ('id',
              'count',
              'unit_name',
              'faction',
              'race',
              'classification',
              'type',
              'nature',
              'size',
              'life',
              'move',
              'range',
              'attack',
              'defense',
              'points',
              'unit_count',
              'ability_1_name',
              'ability_1',
              'ability_2_name',
              'ability_2',
              'ability_3_name',
              'ability_3',
              'ability_4_name',
              'ability_4',
              )
