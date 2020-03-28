from rest_framework.serializers import ModelSerializer
from comentarios.models import Comentarios
 
class comentariosSerializer(ModelSerializer):
    class Meta:
        model = Comentarios
        fields = ('id', 'usuario')