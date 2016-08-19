from rest_framework import serializers
from .models import Deporte, Deportista

class DeporteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deporte
        fields = ('nombre','url')

class DeportistaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deportista
        fields = ('nombre','lugarNacimiento','fechaNacimiento','edad','peso','estatura','entrenador')