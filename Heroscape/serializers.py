from rest_framework import serializers

from .models import Card, User

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = (
      'id',
      'username',
      'first_name',
    )
