Respostas as perguntas de CSS.

1. Qual a diferença entre margin e padding?

PADDING
Pela definição do W3S, padding gera um espaçamento interno ao redor de um container do elemento bem definido.
O padding é controlavel nos eixos x,y (top, down, left and right)

Exemplo da declaração de uma div com espaçamentos internos:

div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}

Da mesma forma:

div {
  padding: 25px 50px 75px 100px;
}

ou definindo de uma só vez as quatro direções:

div {
  padding: 25px;
}

Ainda é possivel adicionar a propriedade width, que define o espaço máximo horizontal de um container.

div {
  width: 25px;
  padding: 25px;
}

MARGIN
Pela definição do W3S, margin são margens que define o espaçamento externo.
Similar ao padding.

Declaração: 

p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}


3. Assuma que múltiplos elementos têm class=”btn green”. 
Qual o seletor correto para estilizar somente os elementos que têm as duas classes? 

SELECTORS
Pela definição do W3S, seletores são usados para selecionar elementos HTML que você queira
estilizar. 

<style> 
    .btn.green {
	   font-size: 300%;
    }
</style>

<div class="green"></div>
<div class="btn green"></div>
<div class="green"></div>