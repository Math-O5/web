from django.db import models

class Enderecos(models.Model):
    linha1 = models.CharField(max_length=150)
    linha2 = models.CharField(max_length=150,null=True, blank=True)
    cidade = models.CharField(max_length=150)
    estado = models.CharField(max_length=150)
    pais = models.CharField(max_length=150)
    latitude = models.IntegerField(null=True, blank=True)
    longitude = models.IntegerField(null=True, blank=True)


    def __str__(self):
        return self.linha1