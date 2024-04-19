
var tabCompl = [
  ["Espaçador", "Standers 2mm", "Esp_Standers_150", "300 peças", 50],
  ["Argamassa", "Axton Branca", "Arga_Axton_150", "20 kg", 40],
  ["Rejunte", "Axton Marfim", "Rej_Marfin_Axton_150", "1 kg", 17],
  ["Rodapé", "Moldufarma MDF Nogueira", "Rod_MDF_Moldufarma_150", "10cm X 2,40m", 35],
  ["Rodapé", "Santa Luzia Poliestireno", "Rod_Poliest_SantaLuzia_150", "10cm X 2,40m", 78],
  ["Cola para Moldura", "Santa Luzia", "Cola_Rod_SantaLuzia_150", "400g", 47]
];


var tabPorc = [
  ["Cimentício Bege", "87,7 x 87,7 cm", "Piso_Cime_Portinari_150", "1,54 m²", 200],
  ["Decorado", "60 x 60 cm", "Piso_Deco_Biancogres_150", "2,2 m²", 200],
  ["Marmorizado", "90 x 90 cm", "Piso_Marm_Biancogres_150", "2,4 m²", 280],
  ["Amadeirado Nogueira", "19,7 x 120 cm", "Piso_Amad_Eliane_150", "1,42 m²", 150]
];

var tabProd = [
  ["Área","Caixas",1.54,200],
  ["Área","Caixas",2.2,200],
  ["Área","Caixas",2.4,280],
  ["Área","Caixas",1.42,150],
  ["Metro","Peças",2.4,78],
  ["Metro","Peças",2.4,35]
];

/*
* QUESTÃO 1
* Função chamada para abrir os pop-ups
* da página Cafeteiras
*/

function abreJanela(cod){
  var jan = window.open("","","width=250, height=350");
  
  jan.document.write("<html> <head> <meta charset='utf-8'>");
  jan.document.write("<link rel='stylesheet' type='text/css' href='Estilos/janela.css'>");
  jan.document.write("<link rel='stylesheet' type='text/css' href='Estilos/estilo.css'></head>");
  jan.document.write(`<body><div class="janInfo"><h3>${tabCompl[cod][0]}</h3>`);
  jan.document.write(`<p>${tabCompl[cod][1]}</p>`);
  jan.document.write(`<img src="Imagens/${tabCompl[cod][2]}.png">`);
  jan.document.write(`<p>${tabCompl[cod][3]}</p>`);
  jan.document.write(`<p>Preço: R$ <span class="preco">${tabCompl[cod][4]},00</span></p>`);
  jan.document.write("<button onclick='window.close();'>Fechar</button></div></body></html>");
}

/*
* QUESTÃO 2
* Função chamada para exibir as
* imagens e texto na tabela
*/

function mostra(cod){
  document.getElementById("titDes").innerHTML = `${tabPorc[cod][0]}`;
  document.getElementById("tamDes").innerHTML = `Tamanho: ${tabPorc[cod][1]}`;
  document.getElementById("imgDes").src = `Imagens/${tabPorc[cod][2]}.png`;
  document.getElementById("caixaDes").innerHTML = `Caixa: ${tabPorc[cod][3]}`;
  document.getElementById("prcDes").innerHTML = `Preço: R$ <span class="preco">${tabPorc[cod][4]},00</span>`;
}

/*
* QUESTÃO 4
* Função chamada para atualizar rótulos do formulário
*/

function atualiza(){
  cod = document.getElementById("selPisos").selectedIndex-1
  document.getElementById("metrosP").value = ""
  document.getElementById("caixasP").value = ""
  document.getElementById("totParcPisos").value = ""
  if(cod >= 0 && cod <= 3){
    document.getElementById("qtdDesej").innerHTML = "Área:"
    document.getElementById("unidVenda").innerHTML = "Caixas"
  }
  else{
    document.getElementById("qtdDesej").innerHTML = "Metro:"
    document.getElementById("unidVenda").innerHTML = "Peças"
  }
}

/*
* QUESTÃO 5
* Calcular quantidade total do produto
*/

function calcula(){
  total = document.getElementById("metrosP").value
  cod = document.getElementById("selPisos").selectedIndex-1

  if(isNaN(total)){
    alert(`${tabProd[cod][0]} deve ser número`)
    document.getElementById("metrosP").value = ""
    document.getElementById("caixasP").value = ""
    document.getElementById("totParcPisos").value = ""
  }
  else{
    quant = Math.round(total / tabProd[cod][2] + 0.5)
    document.getElementById("caixasP").value = quant
    document.getElementById("metrosP").value = quant * tabProd[cod][2]
    document.getElementById("totParcPisos").value = quant * tabProd[cod][3]
  }  
}