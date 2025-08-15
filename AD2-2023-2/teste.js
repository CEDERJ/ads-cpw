cafet = [
  ["Mini Me", "DolceGustoMiniME","Dolce Gusto",450],
  ["Genio S Plus", "DolceGustoGenioSPlus", "Dolce Gusto",300],
  ["Inissia", "NespressoInissia", "Nespresso",350],
  ["Lov","TresCoracoesLOV", "Três Corações",400]
]

caps = [
  ["Espresso","CapDolceGusto_10_Espresso",10,80],
  ["Intenso","CapDolceGusto_10_Intenso",20,80],
  ["Forza/Vibrante","CapLorNespreso_10_Forza",30,100],
  ["Tres Cor. Intenso","CapTresCoracoesNespreso_10_Intenso",40,90],
  ["Lor Forza","CapLorNespreso_10_Forza",50,60]
]

function criaJanela(codigo){
  jan = open("","","height=360, width=270")

  jan.document.write("<link rel='stylesheet' href='Estilos/estilo.css'>")
  jan.document.write("<link rel='stylesheet' href='Estilos/cafeteira.css'>")
  jan.document.write(`<h3 class='titulo'>${cafet[codigo][0]}</h3>`)
  jan.document.write("<div class='janInfo'>")
  jan.document.write(`<img src='Imagens/${cafet[codigo][1]}.jpg'>`)
  jan.document.write(`<p>Cápsula: ${cafet[codigo][2]}</p>`)
  jan.document.write(`<p>Preço: R$ ${cafet[codigo][3]},00</p>`)
  jan.document.write("<button onclick='window.close()'>Fechar</button>")
  jan.document.write("</div>")
}

function mostra(codigo){
  document.getElementById("titDes").innerHTML = `${caps[codigo][0]}`
  document.getElementById("imgDes").src = `Imagens/${caps[codigo][1]}.jpg`
  document.getElementById("qtdDes").innerHTML = `QTD: ${caps[codigo][2]}`
  document.getElementById("prcDes").innerHTML = `Preço: R$ <span class='preco'>${caps[codigo][3]},00</span>`
}

function analisaTel(elemento,digito){
  numero = elemento.value
  
  if(digito == 8){ tipoTel = "Telefone"}
  if(digito == 9){ tipoTel = "Celular"}

  if(numero.length != digito){
    alert(`${tipoTel} tem de ter ${digito} dígitos!`)
    elemento.value = ""
    elemento.focus()
  }

  if(isNaN(numero)){
    var i, c
    for(i = 0; i < digito; i++){
      c = numero.charAt(i)
      if((c < '0') || (c > '9')){
        alert(`${tipoTel} só pode ter dígitos, caracter ${c} inválido!`)
      }
    }
    elemento.value = ""
    elemento.focus()
  }

}

function atualiza(codigo){
  if(codigo == 0){
    quant = document.getElementById("qtMaq").value
    prod = document.getElementById("selMaquina").selectedIndex
    valorparcial = cafet[prod-1][3] * quant
  }
  else{
    quant = document.getElementById("qtCap").value
    prod = document.getElementById("selCapsula").selectedIndex
    valorparcial = caps[prod-1][3] * quant
  }

  if(prod == 0){
    document.getElementById("valxqt").value = ""
  }
  else{
    document.getElementById("valxqt").value = valorparcial
  }
}

function compra(codigo){
  valorparcial = parseInt(document.getElementById("valxqt").value)
  soma = parseInt(document.getElementById('valorTotal').value)
  document.getElementById('valorTotal').value = soma + valorparcial

  if(codigo == 0){
    qtd = document.getElementById('qtMaq').value
    prod = document.getElementById("selMaquina").selectedIndex-1
    nome = cafet[prod][0]
  }
  else{
    qtd = document.getElementById('qtCap').value
    prod = document.getElementById("selCapsula").selectedIndex-1
    nome = caps[prod][0]
  }

  texto = `${nome} (${qtd}) - R$ ${valorparcial},00`
  document.getElementById("lisPedArea").innerHTML += texto + "\n"
}