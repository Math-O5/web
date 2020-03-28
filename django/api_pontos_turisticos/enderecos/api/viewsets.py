from rest_framework.viewsets import ModelViewSet
from enderecos.models import Enderecos
from .serializers import EnderecosSerializer

class EnderecosViewSet(ModelViewSet):
    queryset = Enderecos.objects.all()
    serializer_class = EnderecosSerializer