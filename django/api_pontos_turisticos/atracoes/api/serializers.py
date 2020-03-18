from rest_framework.serializers import ModelSerializer
from atracoes.models import Atracoes
 
class PontosTuristicosSerializer(ModelSerializer):
    class Meta:
        model = Atracoes
        fields = ('id', 'nome', 'descricao')