from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from Heroscape.models import User
from .serializers import UserSerializer

@api_view(['GET'])
def get_user_info(request):
    if request['userID']:
        user = User.objects.get(id=request['userID'])
        serializer = UserSerializer(user, many=True)
        response = Response(serializer.data)
    else:
        response = Response(status=status.HTTP_404_NOT_FOUND)
    return response