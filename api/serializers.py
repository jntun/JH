from rest_framework import serializers

from Heroscape.models import Card, User
from UserArmyBuilder.models import Army_Builder


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

class ArmySerializer(serializers.ModelSerializer):
  class Meta:
    model = Army_Builder
    fields = (
      'id',
      'name',
      'description',
      'owner',
      'cards',
    )

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'first_name',
        )