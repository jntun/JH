from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Card
from api.serializers import CardSerializer

@api_view(['GET'])
def card_list(request):
  if request.method == 'GET':
    cards = Card.objects.all()
    serializer = CardSerializer(cards, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def card_query_list(request, searchName, format=None):
  try:
    cards = []
    searchName = searchName.lower()
    queryCards = Card.objects.all()
    for card in queryCards:
      fixedName = card.unit_name.lower()
      if(fixedName.__contains__(searchName)):
        cards.append(card)
    serializer = CardSerializer(cards, many=True)
    response = Response(serializer.data)
  except:
    response = Response(status=status.HTTP_404_NOT_FOUND)
  return response