from rest_framework import serializers
from .models import Deporte, Deportista, Calendario

class DeporteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deporte
        fields = ('nombre','url','id')

class DeportistaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deportista
        fields = ('nombre','lugarNacimiento','fechaNacimiento','edad','peso','estatura','entrenador','id')

class CalendrioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calendario
        fields = ('deportista', 'fecha_hora', 'resultado', 'modalidad')
