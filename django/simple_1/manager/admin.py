from django.contrib import admin

from .models import (Marca, Veiculo, Pessoa, Parametros, MovRotativos, Mensalistas, MovMensalista)

class MovRotativosAdmin(admin.ModelAdmin):
    list_display = ('veiculo', 'checkin', 'checkout', 'valor_hora', 'pago', 'total', 'horas_total')

    def veiculo(self, obj):
        return obj.veiculo
        
class MovMensalistaAdmin(admin.ModelAdmin):
    list_display = ('mensalista', 'dt_pgto', 'total')

    def mensalista(self, obj):
         return obj.veiculo

admin.site.register(Marca)
admin.site.register(Veiculo)
admin.site.register(Pessoa)
admin.site.register(Parametros)
admin.site.register(MovRotativos, MovRotativosAdmin)
admin.site.register(Mensalistas)
