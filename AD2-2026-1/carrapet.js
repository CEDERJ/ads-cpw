var tabCuidados = [
    ["Banho", "Cão Pequeno", "Pequeno150", 60],
    ["Banho", "Cão Médio", "Medio150", 80],
    ["Banho", "Cão Grande", "Grande150", 120],
    ["Tosa", "Cão Pequeno", "Pequeno150", 85],
    ["Tosa", "Cão Médio", "Medio150", 100],
    ["Tosa", "Cão Grande", "Grande150", 160],
    ["Desinfestação", "Nível 1", "Nivel1_150", 10],
    ["Desinfestação", "Nível 2", "Nivel2_150", 15],
    ["Desinfestação", "Nível 3", "Nivel3_150", 20]
  ];


  var tabProdutos = [
    ["Pedigree", "RaçãoPedigree90", "Carne", 100],
    ["Purina Alpo", "RaçãoAlpo90", "Carne e Frango", 130],
    ["GranPlus Choice", "RaçãoGranPlus90", "Carne e Frango", 130],
    ["Jambo Pet", "BrinquedoJambo90", "Frango", 25]
  ];

  /*
  * QUESTÃO 1
  * Função chamada para abrir os pop-ups
  * da página Materiais
  */
  
  function abreJanela(cod){
    var jan = window.open("","","width=300, height=345");
    var janDocument = jan.document; // Pega a referência ao documento da nova janela

    // --- 1. INCLUIR O ARQUIVO CSS NA NOVA JANELA ---
    // 1.1. Criar o elemento <link>
    var cssLink1 = janDocument.createElement('link');
    var cssLink2 = janDocument.createElement('link');

    // 1.2. Definir os atributos
    cssLink1.rel = 'stylesheet';
    cssLink1.type = 'text/css';
    cssLink2.rel = 'stylesheet';
    cssLink2.type = 'text/css';
    cssLink1.href = 'Estilos/estilo.css'; // Caminho do CSS
    cssLink2.href = 'Estilos/cuidados.css'; // Caminho do CSS

    // 1.3. Anexar o elemento <link> ao <head> da nova janela
    janDocument.head.appendChild(cssLink1);
    janDocument.head.appendChild(cssLink2);

    // --- 2. INCLUIR O CONTEÚDO NO <body> (O CÓDIGO ORIGINAL) ---
    var janBody = janDocument.createElement('div')
    janDocument.body.appendChild(janBody);
    janBody.classList.add('janCuida');

    // Elemento <h3>
    var categJan = janDocument.createElement('h3');
    categJan.textContent = `${tabCuidados[cod][0]}`;

    // Elemento <p> nome
    var tituloJan = janDocument.createElement('p');
    tituloJan.textContent = `${tabCuidados[cod][1]}`;

    // Elemento <img>
    var imgElement = janDocument.createElement('img');
    imgElement.src = `Imagens/${tabCuidados[cod][2]}.png`;

    // Elemento <p> preço
    var precoJan = janDocument.createElement('p');
    precoJan.textContent = `R$ ${tabCuidados[cod][3]},00`
    precoJan.classList.add('preco'); // Adicionar a classe "preco" para estilização

    // 3.1. Criar o elemento <button>
    var btnFechar = janDocument.createElement('button');

    // 3.2. Definir o texto do botão
    btnFechar.textContent = 'Fechar'; 
    btnFechar.addEventListener('click', function() { jan.close(); });

    // Anexar ao body
    janBody.appendChild(categJan);
    janBody.appendChild(tituloJan);
    janBody.appendChild(imgElement);
    janBody.appendChild(precoJan);
    janBody.appendChild(btnFechar);

  }
  
  /*
  * QUESTÃO 2
  * Função chamada para exibir as
  * imagens e texto na tabela
  */
  function mostra(cod){
    document.getElementById("NomeDes").innerHTML = `${tabProdutos[cod][0]}`;
    document.getElementById("ImgDes").src = `Imagens/${tabProdutos[cod][1]}.jpg`;
    if (cod < 3) {
      document.getElementById("PesPrcDes").innerHTML = `<p>Sabor: ${tabProdutos[cod][2]}</p><p>10 kg</p><p>Preço: R$ <span class="preco">${tabProdutos[cod][3]},00</span></p>`;
    }
    else{
      document.getElementById("PesPrcDes").innerHTML = `<p>Sabor: ${tabProdutos[cod][2]}</p><p>Preço: R$ <span class="preco">${tabProdutos[cod][3]},00</span></p>`;
    }
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

function verificaCPF(campo){
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
    elemSel = document.getElementById("selProdutos")
    codProd = elemSel.selectedIndex

    if (codProd == 0){
        alert("Nenhum produto selecionado.")
        return
    }

    valor = parseInt(tabProdutos[codProd - 1][3])
    valorAntigo = parseInt(document.getElementById("valTot").value)
    document.getElementById("valTot").value = valor + valorAntigo

    document.getElementById("listaCompras").innerHTML += elemSel.options[codProd].textContent + "\n"
  }