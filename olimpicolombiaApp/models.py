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
    urlImagen=models.CharField(max_length=1000)
    urlVideo = models.CharField(max_length=1000)

class Resultado(models.Model):
    resultado = models.CharField(max_length=50)

class Modalidad(models.Model):
    modalidad = models.CharField(max_length=50)

class Calendario(models.Model):
    deportista = models.ForeignKey(Deportista)
    fecha_hora = models.DateTimeField()
    resultado = models.ForeignKey(Resultado)
    modalidad = models.ForeignKey(Modalidad)
    unique_together = ("deportista", "fecha_hora")