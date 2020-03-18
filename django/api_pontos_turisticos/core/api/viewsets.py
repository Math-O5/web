from rest_framework.viewsets import ModelViewSet
from core.models import PontosTuristicos
from .serializers import PontosTuristicosSerializer

class PontosTuristicosViewSet(ModelViewSet):
    queryset = PontosTuristicos.objects.all()
    serializer_class = PontosTuristicosSerializer