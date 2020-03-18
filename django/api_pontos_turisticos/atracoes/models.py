from django.db import models

class Atracoes(models.Model):
    nome = models.CharField(max_length=150)
    descricao = models.TextField()
    horario_in = models.TextField()
    horario_out = models.TextField()

    def __str__(self):
        return self.nome