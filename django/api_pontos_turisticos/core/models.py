from django.db import models
from atracoes.models import Atracoes
from comentarios.models import Comentarios
from avaliacoes.models import Avaliacoes
from enderecos.models import Enderecos

class PontosTuristicos(models.Model):
    nome = models.CharField(max_length=150)
    descricao = models.TextField()
    aprovado = models.BooleanField(default=False)
    atracoes = models.ManyToManyField(Atracoes)
    comentarios = models.ManyToManyField(Comentarios)
    enderecos = models.ForeignKey(Enderecos, default=0, null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return  self.nome

