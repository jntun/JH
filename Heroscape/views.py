from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Q
from .models import Card
from api.serializers import CardSerializer

@api_view(['GET'])
def card_list(request):
    cards = Card.objects.all()
    cards = cards.order_by('points')
    serializer = CardSerializer(cards, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def card_query_name(request, searchName, format=None):
  try:
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
    cards = appendCards(cards, Card.objects.filter(ability_1_name__icontains=searchAbility))
    cards = appendCards(cards, Card.objects.filter(ability_2_name__icontains=searchAbility))
    cards = appendCards(cards, Card.objects.filter(ability_3_name__icontains=searchAbility))
    cards = appendCards(cards, Card.objects.filter(ability_4_name__icontains=searchAbility))
    serializer = CardSerializer(cards, many=True)
    response = Response(serializer.data)
  except:
    response = Response(status=status.HTTP_404_NOT_FOUND)
  return response

def appendCards(list, cards):
  for card in cards:
    list.append(card)
  return list

@api_view(['GET'])
def card_query_classification(request, searchClass, format=None):
  try:
    searchClass = searchClass.lower()
    cards = Card.objects.filter(classification__icontains=searchClass)
    serializer = CardSerializer(cards, many=True)
    response = Response(serializer.data)
  except:
    response = Response(status=status.HTTP_404_NOT_FOUND)
  return response

@api_view(['GET'])
def card_query_type(request, searchType, format=None):
  try:
    searchType = searchType.lower()
    cards = Card.objects.filter(type__icontains=searchType)
    serializer = CardSerializer(cards, many=True)
    response = Response(serializer.data)
  except:
    response = Response(status=status.HTTP_404_NOT_FOUND)
  return response