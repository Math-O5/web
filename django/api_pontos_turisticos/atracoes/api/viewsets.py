from rest_framework.viewsets import ModelViewSet
from core.models import Atracoes
from .serializers import AtracoesSerializer

class PontosTuristicosViewSet(ModelViewSet):
    queryset = Atracoes.objects.all()
    serializer_class = AtracoesSerializer