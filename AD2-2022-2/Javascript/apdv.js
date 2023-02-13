var tabLentes = [
  ['Softlens','Bauch & Lonb', 30, 100, 'BauchELomb_30D_200'],
  ['Bioninfinity','Coopervision', 30, 100, 'Bioinfinity_30D_200'],
  ['Acuvue Oasys','Johnson & Johnson', 15, 220, 'Acuvue_15D_200'],
  ['Acuvue 2','Johnson & Johnson', 15, 170, 'Acuvue2_15D_200']
];

var tabArmacoes = [
  ['Oakley Wingfold', 'M_Oakley_100', 'Masculino', 855],
  ['Persol', 'M_Persol_100', 'Masculino', 1377],
  ['Ray-ban Round', 'M_Ray-ban_100', 'Masculino', 666],
  ['Kipling', 'F_Kipling_100', 'Feminino', 423],
  ['Michael Kors', 'F_MichaelKors_100', 'Feminino', 684]
];

var valor = 0;

/*
* QUESTÃO 1
* Função chamada para abrir os pop-ups
* com os materiais
*/
function abreJanela(cod){
	
  var jan = window.open("","","width=300, height=350");
  
  jan.document.write("<html> <head> <meta charset='utf-8'>");
  jan.document.write("<link rel='stylesheet' type='text/css' href='Estilos/apdv.css'>");
  jan.document.write("<link rel='stylesheet' type='text/css' href='Estilos/lentes.css'> </head>");
  jan.document.write(`<body><div class='janInfo'><h3>${tabLentes[cod][0]}</h3>`);
  jan.document.write(`<img src='imagens/${tabLentes[cod][4]}.jpg'>`);
  jan.document.write(`<p class='janInfoDetalhe'>Fabricante: ${tabLentes[cod][1]}</p>`);
  jan.document.write(`<p class='janInfoDetalhe'>Período: ${tabLentes[cod][2]} dias</p>`);
  jan.document.write(`<p class='janInfoDetalhe'>Preço: R\$ ${tabLentes[cod][3]},00</p>`);
  jan.document.write("<button onclick='window.close();'>Fechar</button></div></body></html>");

}

/*
* QUESTÃO 2
* Função chamada para exibir as
* imagens e texto na tabela
*/

function mostra(cod){

  document.getElementById("titDes").innerHTML = tabArmacoes[cod][0];
  document.getElementById("imgDes").src = `Imagens/${tabArmacoes[cod][1]}.jpg`;
  document.getElementById("prcDes").innerHTML =
      `${tabArmacoes[cod][2]}<br/><br/>
      Preço: R$ <span class="preco">${tabArmacoes[cod][3]},00</span>`;
  
}

/*
* QUESTÃO 4
* Adicionar na lista e somar total
* +
* Mensagem de erro em caso de lista de pedidos vazia
*/

function incluirProd(){
  lista = document.getElementById("selProd")
  
  if(lista.value == '-----'){
      alert("Nenhum produto selecionado!")
  }
  else{
    
      document.getElementById("lisPedArea").innerHTML += lista.value + "\n"

      op = lista.selectedIndex

      if(op >= 1 && op <= 4){
          parcial = tabLentes[op-1][3]
      }
      else{
          parcial = tabArmacoes[op-5][3]
      }

      valor += parcial;
      
      document.getElementById("valorTotal").innerHTML = "Valor Total R$ " + valor + ",00\n"
      
      parcelarValor()
  }
}

function parcelarValor(){
  parc = document.getElementById("selParc")
  if(parc.value == "à vista"){
    parcela = 1
  }
  else{
    parcela = parseFloat(parc.value)
  }
  document.getElementById("parcelas").innerHTML =
            "Em " + parcela + "x de R$ " + Math.ceil(valor/parcela) + ",00\n"
}

function limpa(){
  document.getElementById("lisPedArea").innerHTML = ""
  document.getElementById("valorTotal").innerHTML = ""
  document.getElementById("parcelas").innerHTML = ""
}