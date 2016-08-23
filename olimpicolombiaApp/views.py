from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import DeporteSerializer, DeportistaSerializer, EventoSerializer
from .models import Deporte, Deportista, Evento

@api_view(['GET'])
def lista_deportes(request):
    deportes=Deporte.objects.all()
    serializer=DeporteSerializer(deportes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def deporte (request, idDeporte):
    deporte = Deporte.objects.get(id=idDeporte)
    serializer = DeporteSerializer(deporte)
    return Response(serializer.data)

@api_view(['GET'])
def lista_deportistas(request, idDeporte):
    deportistas = Deportista.objects.filter(deporte=idDeporte)
    serializer = DeportistaSerializer(deportistas, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def lista_eventos(request, idDeportista):
    eventos=Evento.objects.filter(deportista=idDeportista)
    serializer = EventoSerializer(eventos, many=True)
    return Response(serializer.data)