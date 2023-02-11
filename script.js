var mesAtual = 'janeiro';
var receita = 0;
var despesa = 0;
var saldo = 0;
var o_entrada = {};
var a_entradas = [];
var o_saida = {};
var a_saidas = [];



// var a_entradas = [{ description: `Salário`, value: `4000.00` }];
// var a_saidas = [{ description: `Alimentação`, value: `800.00` }];

// for (const indice in a_saidas) {
//  var soma = + Number(a_saidas[indice].value);
//  console.log(soma);
//}

// Atalho shift + alt + seta para baixo. Esse atalho duplica a linha do cursor
// variável recebendo valores do prompt
// var gasto1 = Number(window.prompt(`Digite o primeiro gasto:`));
// gasto1 =+ Number(window.prompt(`Digite o segundo gasto:`));
// gasto1 =+ Number(window.prompt(`Digite o terceiro gasto:`));

// Objeto recebendo valores do prompt e passando para o array


var controle = true;
while (controle) {
  a_entradas.push(
    (o_entrada = {
      description: window.prompt(`Informe o tipo de recurso:`),
      value: window.prompt(`Informe o valor:`),
    })
  );
  var controle = window.confirm(`Gostaria de inserir outra receita?`);
}


for (const indice in a_entradas) {
  receita = receita + Number((a_entradas[indice].value));
}


var controle = true;
while (controle) {
  a_saidas.push(
    (o_saida = {
      description: window.prompt(`Informe o tipo de despesa:`),
      value: window.prompt(`Informe o valor:`),
    })
  );
  var controle = window.confirm(`Gostaria de inserir outra Despesa?`);
}


for (const indice in a_saidas) {
  despesa = despesa + Number((a_saidas[indice].value));
}

saldo = receita - despesa;


// var totalG = gasto1 + gasto2 + gasto3;
// var media = gasto1/3;

//window.alert(totalG);
//window.alert(media);

/*var receitas = {
  description: 'Salário',
  value: 4000.00
};

var despesas = {
    description: 'Alimentação',
    value: 400.00
};*/

// Mês
document.getElementById('month').innerHTML = mesAtual;

// Entradas
document.getElementById('total-earnings').innerHTML = receita;

// Saídas
document.getElementById('total-expenses').innerHTML = despesa;

// Saldo
document.getElementById('final-balance').innerHTML = saldo;

// Minha receita: Salário
var lista_r = window.document.getElementById(`id_ul_receita`);
for (const i in a_entradas) {
  var item_e = window.document.createElement(`li`)
  item_e.innerHTML =  `${a_entradas[i].description} : R$ ${a_entradas[i].value}`
  lista_r.appendChild(item_e);
  // document.getElementById('salary').innerHTML += `${a_entradas[i].description} : R$ ${a_entradas[i].value}`;
}


// Meus gastos: Alimentação
var lista_d = window.document.querySelector(`#id_ul_despesa`);
for (const c in a_saidas) {
  var item_d = window.document.createElement(`li`);
  item_d.innerHTML = `${a_saidas[c].description} : R$ ${a_saidas[c].value}`
  lista_d.appendChild(item_d)
}
// document.getElementById('food').innerHTML = `${a_saidas[0].description} : R$ ${a_saidas[0].value}`;
