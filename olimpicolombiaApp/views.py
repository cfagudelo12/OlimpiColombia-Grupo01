from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics

from .serializers import DeporteSerializer, DeportistaSerializer, CalendrioSerializer
from .models import Deporte, Deportista, Calendario

class CalendarioList(generics.ListAPIView):
    serializer_class = CalendrioSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases for
        the user as determined by the username portion of the URL.
        """
        idDeportista = self.kwargs['idDeportista']
        return Calendario.objects.filter(deportista=idDeportista)


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