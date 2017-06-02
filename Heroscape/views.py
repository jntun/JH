from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Q
from .models import Card
from api.serializers import CardSerializer

@api_view(['GET'])
def card_list(request):
  if request.method == 'GET':
    cards = Card.objects.all()
    cards = cards.order_by('points')
    serializer = CardSerializer(cards, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def card_query_name(request, searchName, format=None):
  try:
    cards = []
    searchName = searchName.lower()
    cards = Card.objects.filter(unit_name__icontains=searchName)
    serializer = CardSerializer(cards, many=True)
    response = Response(serializer.data)
  except:
    response = Response(status=status.HTTP_404_NOT_FOUND)
  return response

@api_view(['GET'])
def card_query_ability(request, searchAbility, format=None):
  try:
    cards = []
    searchAbility = searchAbility.lower()
    cards.append(Card.objects.filter(ability_1_name__icontains=searchAbility))
    cards.append(Card.objects.filter(ability_2_name__icontains=searchAbility))
    cards.append(Card.objects.filter(ability_3_name__icontains=searchAbility))
    cards.append(Card.objects.filter(ability_4_name__icontains=searchAbility))
    serializer = CardSerializer(cards, many=True)
    response = Response(serializer.data)
  except:
    response = Response(status=status.HTTP_404_NOT_FOUND)

  return response