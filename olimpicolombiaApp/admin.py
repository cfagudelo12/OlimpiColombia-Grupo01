from django.contrib import admin
from .models import Deporte
from .models import Deportista
from .models import Calendario
from .models import Resultado
from .models import Modalidad

# Register your models here.
admin.site.register(Deporte)
admin.site.register(Deportista)
admin.site.register(Modalidad)
admin.site.register(Resultado)
admin.site.register(Calendario)
