var tabModelos = [
  ['SpringerSplit12000', 1680],
  ['SpringerParede12000', 1890],
  ['ConsulParede7500', 1300],
  ['ElginPortatil9000', 1900]
];

/*
* QUESTÃO 1
* Função chamada para abrir os pop-ups
* da página Tipos
*/
function abreJanTipo(){
  var jan = window.open("","","width=250, height=200");
  
  jan.document.write("<html> <head> <meta charset='utf-8'>");
  jan.document.write("<link rel='stylesheet' type='text/css' href='Estilos/refrig.css'>");
  jan.document.write("<link rel='stylesheet' type='text/css' href='Estilos/tipos.css'> </head>");
  jan.document.write(`<body><div class="janInfo"><h3>Tipos de<br/>Ar-condicionado`);
  jan.document.write(`</h3></div><ul><li>De parede</li><li>Splitter</li>`);
  jan.document.write(`<li>Portátil</li></ul><div class="janInfo">`);
  jan.document.write("<button onclick='window.close();'>Fechar</button></div></body></html>");
}

function abreJanCapac(){
  var jan = window.open("","","width=340, height=320");
  
  jan.document.write("<html> <head> <meta charset='utf-8'>");
  jan.document.write("<link rel='stylesheet' type='text/css' href='Estilos/refrig.css'>");
  jan.document.write("<link rel='stylesheet' type='text/css' href='Estilos/tipos.css'>");
  jan.document.write(`</head><body><div class="janInfo"><h3>Tamanho do Cômodo</h3>`);
  jan.document.write(`<table class="tabInfo"><thead><tr>`);
  jan.document.write(`<th rowspan="2" class="linTH">Área</th>`);
  jan.document.write(`<th colspan="2" class="linTH">Incidência do Sol</th></tr>`);
  jan.document.write(`<tr><th class="linTH">Manhã</th>`);
  jan.document.write(`<th class="linTH">Tarde</th></tr>`);
  jan.document.write(`</thead><tbody><tr><td>9 m2</td>`);
  jan.document.write(`<td>7500 BTUs</td><td>9000 BTUs</td>`);
  jan.document.write(`</tr><tr><td>12 m2</td><td>9000 BTUs</td>`);
  jan.document.write(`<td>10000 BTUs</td></tr><tr>`);
  jan.document.write(`<td>25 m2</td><td>12000 BTUs</td>`);
  jan.document.write(`<td>15000 BTUs</td></tr><tr>`);
  jan.document.write(`<td>50 m2</td><td>21000 BTUs</td>`);
  jan.document.write(`<td>30000 BTUs</td></tr></tbody></table>`);
  jan.document.write("<br/><button onclick='window.close();'>Fechar");
  jan.document.write("</button></div></body></html>");
}

/*
* QUESTÃO 2
* Função chamada para exibir as
* imagens e texto na tabela
*/

function mostra(cod){

  document.getElementById("imgDes").src = `Imagens/${tabModelos[cod][0]}.jpg`;
  document.getElementById("prcDes").innerHTML = `R$ <span class="preco">${tabModelos[cod][1]},00</span>`;
  
}

/*
* QUESTÃO 3
* Função chamada para crítica do
* campo Telefone do formulário Cadastro
*/
function criticaTel(campo,digito) {

	// String  com o telefone
	var tel = campo.value;
	var tipoTel;

	if(digito == 8){ tipoTel = "fixo"; }
	if(digito == 9){ tipoTel = "celular"; }
	
	//Verificando quantidade de digitos
    if (tel.length < digito) {
		alert(`Telefone ${tipoTel} tem de ter ${digito} digitos!`);
		campo.value = "";
        campo.focus();
        return false;
    }
	
	// Verificando se todos os caracteres são digitos
	if ( isNaN(tel) ) {
		var i, c;
		for (i = 0; i < digito; i++ ) {
			c = tel.charAt(i);
			if ( (c < '0') || (c > '9')) {
				alert(`Telefone só pode ter dígitos, caracter '${c}' inválido!`);
			}	
		}
		campo.value = "";
		campo.focus();
		return false;
	}
	
    return true;

}


/*
* QUESTÃO 4
* Adicionar na lista e somar total
* +
* Mensagem de erro em caso de lista de pedidos vazia
*/

function incluirProd(){
  lista = document.getElementById("selProduto");
  
  if(lista.value == '-----'){
      alert("Nenhum produto selecionado!");
  }
  else{
    
      op = lista.selectedIndex;
      if(op == 1){
        texto = "Split - " + lista.value;
      }
      else if(op == 4){
        texto = "Portátil - " + lista.value;
      }
      else{
        texto = "Parede - " + lista.value;
      }

      document.getElementById("lisPedArea").innerHTML += texto + "\n";

      parcial = parseInt(document.getElementById("valorTotal").value)
      valor = tabModelos[op-1][1] + parcial;
      
      document.getElementById("valorTotal").value = valor;
  }
}

function limpa(){
  document.getElementById("lisPedArea").innerHTML = ""
  document.getElementById("valorTotal").innerHTML = ""
  document.getElementById("parcelas").innerHTML = ""
}