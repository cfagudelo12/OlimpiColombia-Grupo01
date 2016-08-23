from rest_framework import serializers
from .models import Deporte, Deportista, Evento

class DeporteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deporte
        fields = '__all__'

class DeportistaSerializer(serializers.ModelSerializer):
    edad = serializers.IntegerField(max_value=None,min_value=None)

    class Meta:
        model = Deportista
        fields = '__all__'

class EventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evento
        fields = '__all__'
