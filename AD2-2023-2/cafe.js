var tabCafe = [
  ["Mini ME", "DolceGustoMiniME", "Dolce Gusto", 480],
  ["Genio S Plus", "DolceGustoGenioSPlus",  "Dolce Gusto", 530],
  ["Inissia", "NespressoInissia", "Nespresso", 500],
  ["LOV", "TresCoracoesLOV", "Três Corações", 400],
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
/*
function mostra(cod){

  document.getElementById("imgDes").src = `Imagens/${tabModelos[cod][0]}.jpg`;
  document.getElementById("prcDes").innerHTML = `R$ <span class="preco">${tabModelos[cod][1]},00</span>`;
  
}
*/
/*
* QUESTÃO 3
* Função chamada para crítica do
* campo Telefone do formulário Cadastro
*/
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

function limpa(){
  document.getElementById("lisPedArea").innerHTML = ""
  document.getElementById("valorTotal").innerHTML = ""
  document.getElementById("parcelas").innerHTML = ""
}
*/