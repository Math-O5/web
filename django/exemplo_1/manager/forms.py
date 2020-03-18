from django.form import ModelForm
from .models import Pessoa

class PessoaForm(ModelForm):
    class Meta:
        model = Pessoafields = '__all__'
