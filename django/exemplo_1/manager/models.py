from django.db import models
import math

class Pessoa(models.Model):
    nome = models.CharField(max_length=50)
    endereco = models.CharField(max_length=200)
    telefone = models.CharField(max_length=20)

    def __str__(self):
        return self.nome

class Marca(models.Model):
    nome = models.CharField(max_length=50)

    def __str__(self):
        return self.nome

class Veiculo(models.Model):
    proprietario = models.ForeignKey(Pessoa, on_delete=models.CASCADE)
    marca = models.ForeignKey(Marca, on_delete=models.DO_NOTHING)
    placa = models.CharField(max_length=7)
    cor = models.CharField(max_length=10)
    observacoes = models.TextField()

    def __str__(self):
        return self.marca.nome + ' - ' + self.placa

class Parametros(models.Model):
    valor_hora = models.DecimalField(max_digits=5, decimal_places=2)
    valor_mes = models.DecimalField(max_digits=6, decimal_places=2) 

    def __str__(self):
        return 'Parametros'

class MovRotativos(models.Model):
    checkin = models.DateTimeField(auto_now=False)
    checkout = models.DateTimeField(auto_now=False, null=True, blank=True)
    valor_hora =  models.DecimalField(max_digits=5, decimal_places=2)
    veiculo = models.ForeignKey(Veiculo, on_delete=models.CASCADE)
    pago = models.BooleanField(default=False)

    def __str__(self):
        return self.veiculo.placa

    def horas_total(self):
        return math.ceil((self.checkout - self.checkin).total_seconds()/3600)

    def total(self):
        return self.valor_hora * self.horas_total()


class  Mensalistas(models.Model):
    veiculo = models.ForeignKey(Veiculo, on_delete=models.CASCADE)
    inicio = models.DateTimeField()
    valor_mes =  models.DecimalField(max_digits=5, decimal_places=2)
    pago = models.BooleanField(default=False)

    def __str__(self):
        return self.veiculo.placa

class MovMensalista(models.Model):
    mensalista = models.ForeignKey(Mensalistas, on_delete=models.CASCADE)
    dt_pgto = models.DateTimeField()
    total = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return str(mensalista) + ' - ' + str(self.total)

    def horas_total(self):
        return math.ceil((self.checkout - self.checkin).total_seconds()/3600)

    def total(self):
        return self.valor_hora * self.horas_total()
