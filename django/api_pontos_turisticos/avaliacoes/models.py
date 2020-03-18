from django.contrib.auth.models import User
from django.db import models

class Avaliacoes(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    comentario = models.TextField(null=True, blank=True)
    data = models.DateTimeField(auto_now_add=True)
    nota = models.DecimalField(max_digits=3, decimal_places=2)

    def __str__(self):
        return self.usuario.username
