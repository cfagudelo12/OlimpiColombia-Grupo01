from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import DeporteSerializer, DeportistaSerializer
from .models import Deporte, Deportista

@api_view(['GET'])
def lista_deportes(request):
    deportes=Deporte.objects.all()
    serializer=DeporteSerializer(deportes, many=True)
    return Response(serializer.data)