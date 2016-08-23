from rest_framework import serializers
from .models import Deporte, Deportista, Evento

class DeporteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deporte
        fields = ('id','nombre','url')

class DeportistaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deportista
        fields = ('id','deporte','nombre','lugarNacimiento','fechaNacimiento','entrenador','urlImagen','urlVideo')

class EventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evento
        fields = ('id','deportista', 'fecha_hora', 'resultado', 'modalidad')
