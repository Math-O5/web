from django.contrib import admin
from django.conf.urls import url, include
from .views import home, lista_pessoas, lista_veiculos, pessoa_novo

urlpatterns = [
    url(r'^$', home, name='manager_home'),
    url(r'^pessoas/$', lista_pessoas, name='manager_lista_pessoas'),
     url(r'^pessoas-novo/$', pessoa_novo, name='manager_nova_pessoa'),
    url(r'^veiculos/$', lista_veiculos, name='manager_lista_veiculos')

]
