from rest_framework import serializers
from .models import Deporte, Deportista, Evento
from django.contrib.auth.models import User

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

class UsuarioSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'

class FacebookUser(serializers.Serializer):
    def __init__(self, name, email):
        self.name = name
        self.email = email
