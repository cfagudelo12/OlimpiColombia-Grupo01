from rest_framework import status
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated

from .serializers import DeporteSerializer, DeportistaSerializer, EventoSerializer, UsuarioSerializer
from .models import Deporte, Deportista, Evento

@api_view(['GET'])
def lista_deportes(request):
    deportes=Deporte.objects.all()
    serializer=DeporteSerializer(deportes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@authentication_classes((SessionAuthentication, BasicAuthentication))
@permission_classes((IsAuthenticated,))
def deporte (request, idDeporte):
    deporte = Deporte.objects.get(id=idDeporte)
    serializer = DeporteSerializer(deporte)
    return Response(serializer.data)

@api_view(['GET'])
@authentication_classes((SessionAuthentication, BasicAuthentication))
@permission_classes((IsAuthenticated,))
def lista_deportistas(request, idDeporte):
    deportistas = Deportista.objects.filter(deporte=idDeporte)
    serializer = DeportistaSerializer(deportistas, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@authentication_classes((SessionAuthentication, BasicAuthentication))
@permission_classes((IsAuthenticated,))
def deportista(request, idDeportista):
    deportista = Deportista.objects.get(id=idDeportista)
    serializer = DeportistaSerializer(deportista)
    return Response(serializer.data)

@api_view(['GET'])
@authentication_classes((SessionAuthentication, BasicAuthentication))
@permission_classes((IsAuthenticated,))
def lista_eventos(request, idDeportista):
    eventos=Evento.objects.filter(deportista=idDeportista)
    serializer = EventoSerializer(eventos, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@authentication_classes(())
@permission_classes(())
def add_user_view(request):
    serializer = UsuarioSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@authentication_classes((SessionAuthentication, BasicAuthentication))
@permission_classes(())
def current_user(request):
    user = request.user
    print ("user: ", unicode(request.user))
    if user and (not user.is_anonymous()):

        return Response({
            'username': user.username,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'email': user.email,
        })
    else:
        return Response(None)