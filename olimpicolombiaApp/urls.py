from django.conf.urls import url, include

from .views import DeporteList

urlpatterns =  [
    url(r'deportes$',DeporteList.as_view()),
]