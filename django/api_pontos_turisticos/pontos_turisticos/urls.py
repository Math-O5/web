from django.contrib import admin
from django.conf.urls import include
from django.urls import path
from rest_framework import routers
from core.api.viewsets import PontosTuristicosViewSet
from atracoes.api.viewsets import AtracoesViewSet
from enderecos.api.viewsets import EnderecosViewSet
from avaliacoes.api.viewsets import AvaliacoesViewSet

router = routers.DefaultRouter()
router.register(r'pontoturistico', PontosTuristicosViewSet, basename='PontosTuristicos')
router.register(r'atracoes', AtracoesViewSet)
router.register(r'enderecos', EnderecosViewSet)
router.register(r'avaliacoes', AvaliacoesViewSet)
router.register(r'comentarios', AvaliacoesViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]
