from django.contrib import admin
from django.conf.urls import include
from django.urls import path
from rest_framework import routers
from core.api.viewsets import PontosTuristicosViewSet
from atracoes.api.viewsets import AtracoesViewSet

router = routers.DefaultRouter()
router.register(r'pontoturistico', PontosTuristicosViewSet)
router.register(r'atracoes', AtracoesViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]
