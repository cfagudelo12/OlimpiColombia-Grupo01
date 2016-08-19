from django.shortcuts import render
from django.http import HttpResponse
from .models import Deporte


# Create your views here.
def index(request):
    lista_deportes = Deporte.objects.all()
    context = {'lista_deportes':lista_deportes}
    return render(request,'olimpicolombia/index.html',context)
