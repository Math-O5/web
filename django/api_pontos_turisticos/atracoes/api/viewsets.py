from rest_framework.viewsets import ModelViewSet
from atracoes.models import Atracoes
from .serializers import AtracoesSerializer

class AtracoesViewSet(ModelViewSet):
    queryset = Atracoes.objects.all()
    serializer_class = AtracoesSerializer