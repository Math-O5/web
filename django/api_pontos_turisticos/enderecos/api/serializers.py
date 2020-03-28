from rest_framework.serializers import ModelSerializer
from enderecos.models import Enderecos
 
class EnderecosSerializer(ModelSerializer):
    class Meta:
        model = Enderecos
        fields = ('id', 'nome', 'descricao')