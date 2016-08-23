from django.db import models

# Create your models here.
class Deporte(models.Model):
    def __str__(self):
        return "Deporte: " + self.nombre

    nombre=models.CharField(max_length=80)
    url=models.CharField(max_length=1000)

class Deportista(models.Model):
    def __str__(self):
        return "Deportista: " + self.nombre
    
    deporte=models.ForeignKey(Deporte)
    nombre=models.CharField(max_length=120)
    lugarNacimiento=models.CharField(max_length=120)
    fechaNacimiento=models.DateField()
    edad=models.IntegerField
    peso=models.IntegerField
    estatura=models.IntegerField
    entrenador=models.CharField(max_length=120)
    urlImagen=models.CharField(max_length=1000)
    urlVideo = models.CharField(max_length=1000)

class Evento(models.Model):
    def __str__(self):
        return "Evento: " + self.deportista.nombre +", " + self.modalidad

    deportista = models.ForeignKey(Deportista)
    fecha_hora = models.DateTimeField()
    resultado = models.IntegerField()
    modalidad = models.CharField(max_length=100)
    unique_together = ("deportista", "fecha_hora")