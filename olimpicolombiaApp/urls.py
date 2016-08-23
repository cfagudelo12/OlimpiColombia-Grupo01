from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns =  [
    url(r'deportes$',views.lista_deportes),
    url(r'deportes/(?P<idDeporte>[0-9]*)/$',views.deporte),
    url(r'deportistas/(?P<idDeportista>[0-9]+)/calendario/$', views.CalendarioList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)