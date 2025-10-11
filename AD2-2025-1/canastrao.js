
var tabHarm = [
    ["Canastra", "QueijoCanastra", "Harmoniza perfeitamente com tintos de corpo médio e taninos macios."],
    ["Minas", "QueijoMinas", "Quando combinado com goiabada ou mel, espumantes ou brancos de colheita tardia."],
    ["Gorgonzola", "QueijoGorgonzola", "Pede vinhos intensamente aromáticos e com tendência adocicada, como os do Porto, os Madeira ou Moscatéis."]
  ];

var tabQueijos = [
    ["Canastra", "QueijoCanastra", "500g", 70],
    ["Minas", "QueijoMinas", "400g", 23],
    ["Coalho", "QueijoCoalho", "500g", 40],
    ["Gorgonzola", "QueijoGorgonzola", "200g", 20],
    ["Brie", "QueijoBrie", "200g", 30]
  ];
  
  /*
  * QUESTÃO 1
  * Função chamada para abrir os pop-ups
  * da página Materiais
  */
  
  function abreJanela(cod){
    var jan = window.open("","","width=400, height=300");
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

    // Elemento <h3>
    var divJan = janDocument.createElement('div');
    divJan.classList.add("janQueijos");

    // Elemento <h3> nome
    var tituloJan = janDocument.createElement('h3');
    tituloJan.textContent = `${tabHarm[cod][0]}`;

    // Elemento <img>
    var imgElement = janDocument.createElement('img');
    imgElement.classList.add("imgDesc");
    imgElement.src = `Imagens/${tabHarm[cod][1]}.jpg`;

    // Elemento <p> descrição
    var descJan = janDocument.createElement('p');
    descJan.textContent = `${tabHarm[cod][2]}`;
    descJan.classList.add("janDesc")

    // Criar o elemento <button>
    var btnFechar = janDocument.createElement('button');

    // Definir o texto do botão
    btnFechar.textContent = 'Fechar'; 
    btnFechar.addEventListener('click', function() { jan.close(); });

    // Anexar a div
    divJan.appendChild(tituloJan);
    divJan.appendChild(imgElement);
    divJan.appendChild(descJan);
    divJan.appendChild(btnFechar);

    // Anexar ao body
    janBody.appendChild(divJan);

  }
  
  /*
  * QUESTÃO 2
  * Função chamada para exibir as
  * imagens e texto na tabela
  */
  function mostra(cod){
    document.getElementById("tipoQueijo").innerHTML = `${tabQueijos[cod][0]}`;
    document.getElementById("imgQueijo").src = `Imagens/${tabQueijos[cod][1]}.jpg`;
    document.getElementById("pesoQueijo").innerHTML = `Peso: ${tabQueijos[cod][2]}`;
    document.getElementById("precoQueijo").innerHTML = `Preço: R$ <span class="preco">${tabQueijos[cod][3]},00</span>`;

  }

  /*
* QUESTÃO 3
* Função chamada para crítica do
* campo CPF do formulário Compras
*/
function calculaDV(num){
    var resto = 0, soma = 0;
    for ( i = 2; i < 11; i++ ){
        soma = soma + ((num % 10) * i);
        num = parseInt(num / 10);
    }
    resto = (soma % 11);
    return (resto > 1) ? (11 - resto) : 0;
}

function verificaCPF( campo ){
    var i, c;
    var iniCPF;
    var strCPF = campo.value;
    if ( strCPF.length != 11 ){
        alert("CPF tem de ter 11 dígitos!");
        campo.value = "";
        campo.focus();
        return false;
    }
    for ( i = 0; i < 11; i++ ){
        c = strCPF.charAt(i);
        if ( (c < '0') || (c > '9')){
            alert('Insira apenas os dígitos, caracter "' + c + '" inválido!');
            campo.value = "";
            campo.focus();
            return false;
        }
    }
    iniCPF = strCPF.substring(0, 9);
    pd = calculaDV(iniCPF);
    sd = calculaDV(iniCPF * 10 + pd);
    if ( (pd != strCPF.charAt(9)) || (sd != strCPF.charAt(10)) ){
        alert("Dígitos verificadores inválidos!");
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
      elemSel = document.getElementById("selProduto")
      codProd = elemSel.selectedIndex

      if (codProd == 0){
          alert("Nenhum produto selecionado.")
          return
      }

      valor = parseInt(tabQueijos[codProd][3])
      valorAntigo = parseInt(document.getElementById("valTot").value)
      document.getElementById("valTot").value = valor + valorAntigo

      document.getElementById("listaCompras").innerHTML += elemSel.options[codProd].textContent + "\n"
  }