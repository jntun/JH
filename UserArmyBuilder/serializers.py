from rest_framework import serializers
from .models  import Army_Builder

class ArmySerializer(serializers.ModelSerializer):
  class Meta:
    model = Army_Builder
    field = ('owner', 'cards')