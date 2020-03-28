from rest_framework.viewsets import ModelViewSet
from core.models import PontosTuristicos
from .serializers import PontosTuristicosSerializer

class PontosTuristicosViewSet(ModelViewSet):
    serializer_class = PontosTuristicosSerializer
    def get_queryset(self):
        return PontosTuristicos.objects.filter(aprovado=True)
