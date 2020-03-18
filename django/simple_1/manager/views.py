from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Pessoa, Veiculo
from .forms import PessoaForm

def home(request):
    context = {'mensagem': 'Ola mundo'}
    return render(request, 'manager/index.html', context)

def lista_pessoas(request):
    pessoas = Pessoa.objects.all()
    formPessoa = PessoaForm()
    return render(request, 'manager/lista_pessoas.html', {'pessoas': pessoas, 'formPessoa': formPessoa}) 

def pessoa_novo(request):
    form = PessoaForm(request.POST or None)
    if form.is_valid():
        form.save()
    return redirect('manager_lista_pessoas')

def lista_veiculos(request):
    veiculos = Veiculo.objects.all()
    return render(request, 'manager/lista_veiculos.html', {'veiculos': veiculos}) 