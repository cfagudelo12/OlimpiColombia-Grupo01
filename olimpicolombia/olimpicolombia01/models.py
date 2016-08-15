from django.db import models

# Create your models here.
class Deporte(models.Model):
    nombre=models.CharField(max_length=80)
    url=models.CharField(max_length=1000)

class Deportista(models.Model):
    nombre=models.CharField(max_length=120)
    lugarNacimiento=models.CharField(max_length=120)
    fechaNacimiento=models.DateField()
    edad=models.IntegerField
    peso=models.IntegerField
    estatura=models.IntegerField
    entrenador=models.CharField(max_length=120)