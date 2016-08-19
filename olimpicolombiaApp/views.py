from rest_framework import generics, permissions

from .serializers import DeporteSerializer, DeportistaSerializer
from .models import Deporte, Deportista

class DeporteList(generics.ListAPIView):
    model = Deporte
    queryset = Deporte.objects.all()
    serializer_class = DeporteSerializer
    permission_classes = [
        permissions.AllowAny
    ]
