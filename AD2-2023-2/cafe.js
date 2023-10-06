var tabCafe = [
  ["Mini ME", "DolceGustoMiniME", "Dolce Gusto", 480],
  ["Genio S Plus", "DolceGustoGenioSPlus",  "Dolce Gusto", 530],
  ["Inissia", "NespressoInissia", "Nespresso", 500],
  ["LOV", "TresCoracoesLOV", "Três Corações", 400],
];

var tabCaps = [
 ["Espresso", "CapDolceGusto_10_Espresso", 10, 18],
 ["Intenso", "CapDolceGusto_10_Intenso", 10, 19],
 ["Forza / Vibrante", "CapTresCoracoes_30_ForzaVibrante", 30, 44],
 ["Três Cor. Intenso", "CapDolceGusto_10_Intenso", 10, 20],
 ["Lor Forza", "CapLorNespreso_10_Forza", 10, 21]
];

/*
* QUESTÃO 1
* Função chamada para abrir os pop-ups
* da página Cafeteiras
*/
function abreJanela(cod){
  var jan = window.open("","","width=250, height=350");
  
  jan.document.write("<html> <head> <meta charset='utf-8'>");
  jan.document.write("<link rel='stylesheet' type='text/css' href='Estilos/estilo.css'></head>");
  jan.document.write(`<body><div class="janInfo"><h3>${tabCafe[cod][0]}</h3>`);
  jan.document.write(`<img src="Imagens/${tabCafe[cod][1]}.jpg">`);
  jan.document.write(`<p>Cápsula: ${tabCafe[cod][2]}</p>`);
  jan.document.write(`<p>Preço: R$ ${tabCafe[cod][3]},00</p>`);
  jan.document.write("<button onclick='window.close();'>Fechar</button></div></body></html>");
}

/*
* QUESTÃO 2
* Função chamada para exibir as
* imagens e texto na tabela
*/

function mostra(cod){
  document.getElementById("titDes").innerHTML = `${tabCaps[cod][0]}`;
  document.getElementById("imgDes").src = `Imagens/${tabCaps[cod][1]}.jpg`;
  document.getElementById("qtdDes").innerHTML = `QTD: ${tabCaps[cod][2]}`;
  document.getElementById("prcDes").innerHTML = `Preço: R$ <span class="preco">${tabCaps[cod][3]},00</span>`;
}

/*
* QUESTÃO 3
* Função chamada para crítica do
* campo Telefone do formulário Cadastro
*/

function atualiza(cod){
  if(cod == 0){
    quant = parseInt(document.getElementById("qtMaq").value)
    valor = tabCafe[parseInt(document.getElementById("selMaquina").selectedIndex) - 1][3]
    document.getElementById("selCapsula").selectedIndex = 0
  }
  else{
    quant = parseInt(document.getElementById("qtCap").value)
    valor = tabCaps[parseInt(document.getElementById("selCapsula").selectedIndex) - 1][3]
    document.getElementById("selMaquina").selectedIndex = 0
  }
  document.getElementById("valxqt").value = quant*valor
}


/*
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
*/

/*
* QUESTÃO 4
* Adicionar na lista e somar total
* +
* Mensagem de erro em caso de lista de pedidos vazia
*/
/*
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
*/

function limpa(){
  document.getElementById("lisPedArea").innerHTML = ""
  document.getElementById("valorTotal").innerHTML = ""
  document.getElementById("parcelas").innerHTML = ""
}
