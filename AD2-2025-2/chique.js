
var tabMateriais = [
    ["Cabo Flexível", "Sil Preto 2,5 mm", "SilPreto2p5_150", "100 m", 200],
    ["Cabo Flexível", "Cobrecom Azul 2,5 mm", "CobrecomAzul2p5_150", "100 m", 190],
    ["Cabo Flexível", "Sil Verde 2,5 mm", "SilVerde2p5_150", "50 m", 150],
    ["Terminais Ilhós", "2,5 mm", "TermIlhos2p5_150", "200 peças", 30],
    ["Terminais Ilhós", "2,5 mm", "TermIlhos4_150", "100 peças", 200],
    ["Conduíte", '1/2"', "Plastlit1b2_150", "25 m", 200],
    ["Conduíte", '3/4"', "Plastlit3b4_150", "50 m", 200]
  ];

  var tabAcabamentos = [
    ["Ilumi/Stylus","Placa 4x4","Stylus2tomadas_150",4],
    ["Ilumi/Stylus","Tomada","StylusTomada_150",6],
    ["Ilumi/Stylus","Interruptor","StylusInterruptor_150",6],
    ["Ilumi/Slim","Placa 4x2","SlimPlaca4x2_150",4],
    ["Ilumi/Slim","Módulo Tomada","SlimModuloTomada_150",5],
    ["Ilumi/Slim","Módulo Interruptor","SlimModuloInterruptor_150",4]
  ];
  /*
  * QUESTÃO 1
  * Função chamada para abrir os pop-ups
  * da página Materiais
  */
  
  function abreJanela(cod){
    var jan = window.open("","","width=300, height=370");
    var janDocument = jan.document; // Pega a referência ao documento da nova janela

    // --- 1. INCLUIR O ARQUIVO CSS NA NOVA JANELA ---
    // 1.1. Criar o elemento <link>
    var cssLink = janDocument.createElement('link');

    // 1.2. Definir os atributos
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    cssLink.href = 'Estilos/estilo.css'; // Caminho do CSS

    // 1.3. Anexar o elemento <link> ao <head> da nova janela
    janDocument.head.appendChild(cssLink);

    // --- 2. INCLUIR O CONTEÚDO NO <body> (O CÓDIGO ORIGINAL) ---
    var janBody = janDocument.body;
    janBody.style.textAlign = 'center'; // Centralizar o conteúdo

    // Elemento <h3>
    var categJan = janDocument.createElement('h3');
    categJan.textContent = `${tabMateriais[cod][0]}`;

    // Elemento <p> nome
    var tituloJan = janDocument.createElement('p');
    tituloJan.textContent = `${tabMateriais[cod][1]}`;

    // Elemento <img>
    var imgElement = janDocument.createElement('img');
    imgElement.src = `Imagens/${tabMateriais[cod][2]}.jpg`;

    // Elemento <p> metragem
    var metragemJan = janDocument.createElement('p');
    metragemJan.textContent = `${tabMateriais[cod][3]}`

    // Elemento <p> preço
    var precoJan = janDocument.createElement('p');
    precoJan.textContent = `Preço: R$ ${tabMateriais[cod][4]},00`

    // 3.1. Criar o elemento <button>
    var btnFechar = janDocument.createElement('button');

    // 3.2. Definir o texto do botão
    btnFechar.textContent = 'Fechar'; 
    btnFechar.addEventListener('click', function() { jan.close(); });

    // Anexar ao body
    janBody.appendChild(categJan);
    janBody.appendChild(tituloJan);
    janBody.appendChild(imgElement);
    janBody.appendChild(metragemJan);
    janBody.appendChild(precoJan);
    janBody.appendChild(btnFechar);

  }
  
  /*
  * QUESTÃO 2
  * Função chamada para exibir as
  * imagens e texto na tabela
  */
  function mostra(cod){
    document.getElementById("marcaDes").innerHTML = `${tabAcabamentos[cod][0]}`;
    document.getElementById("nomeDes").innerHTML = `${tabAcabamentos[cod][1]}`;
    document.getElementById("imgDes").src = `Imagens/${tabAcabamentos[cod][2]}.png`;
    document.getElementById("prcDes").innerHTML = `Preço: R$ <span class="preco">${tabAcabamentos[cod][3]},00</span>`;

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
  * Adicionar produtos na lista de compras
  */
  
  function addProduto(){
    elemSel = document.getElementById("selProdutos")
    codProd = elemSel.selectedIndex

    if (codProd == 0){
        alert("Nenhum produto selecionado.")
        return
    }

    if(codProd < 7){
      valor = parseInt(tabAcabamentos[codProd - 1][3])
    }
    else{
      valor = parseInt(tabMateriais[codProd - 7][4])
    }

    valorAntigo = parseInt(document.getElementById("valTot").value)
    document.getElementById("valTot").value = valor + valorAntigo

    document.getElementById("listaCompras").innerHTML += elemSel.options[codProd].textContent + "\n"
  }