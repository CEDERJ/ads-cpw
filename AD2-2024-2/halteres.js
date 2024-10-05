
var tabPlanos = [
    ["Academia", "Musculação", "Academia", 180, 220, 260],
    ["Natação", "3x na semana", "Natacao", 300, 340, 380],
    ["Combo", "Musculação + Natação", "Combo", 330, 390, 440]
  ];

  var tabEq = [
    ["CadeiraExtensora", "<h3>Cadeira Extensora</h3><p>O principal movimento articular realizado na cadeira extensora é a extensão de joelho, portanto o quadríceps (vasto lateral, vasto medial, vasto intermédio e retor femoral) são os principais músculos trabalhados durante o exercício. [<a href='https://treinomestre.com.br/cadeira-extensora-como-potencializar-os-resultados-4-dicas-importantes/' target='_blank'>fonte</a>]</p>"],
    ["SupinoVertical", "<h3>Supino Vertical</h3><p>O supino vertical é um exercício popular e eficaz para desenvolver força, tamanho e definição nos músculos da parte superior do corpo. Ao usar uma máquina de peso guiada, este exercício oferece uma maneira acessível e controlada de direcionar os músculos do peito, ombro e tríceps. [<a href='https://www.academiacentralfitness.com.br/post/supino-m%C3%A1quina-como-fazer-benef%C3%ADcios-e-varia%C3%A7%C3%B5e' target='_blank'>fonte</a>]</p>"],
    ["RemadaBaixa", "<h3>Remada Baixa</h3><p>A Remada Baixa é um exercício de máquina para costas feito sentado no banco usando a barra triângulo. A Remada trabalha inúmeros músculos, como o lombar, latíssimo do dorso, trapézio, deltóide, posterior e até mesmo o braquiorradial. [<a href='https://www.hipertrofia.org/blog/2018/03/24/remada-baixa/' target='_blank'>fonte</a>]</p>"]
  ];
    
  /*
  * QUESTÃO 1
  * Função chamada para abrir os pop-ups
  * da página Planos
  */
  
  function abreJanela(cod){
    var jan = window.open("","","width=300, height=420");
    
    jan.document.write("<html> <head> <meta charset='utf-8'>");
    jan.document.write("<link rel='stylesheet' type='text/css' href='Estilos/planos.css'>");
    jan.document.write("<link rel='stylesheet' type='text/css' href='Estilos/estilo.css'></head>");
    jan.document.write(`<body><div class="janInfo"><h3>${tabPlanos[cod][0]}</h3>`);
    jan.document.write(`<p class="preco">(${tabPlanos[cod][1]})</p>`);
    jan.document.write(`<img src="Imagens/${tabPlanos[cod][2]}.png">`);
    jan.document.write(`<ol><li>Anual: R$ <span class="preco">${tabPlanos[cod][3]},00</li>`);
    jan.document.write(`<li>Semestral: R$ <span class="preco">${tabPlanos[cod][4]},00</li>`);
    jan.document.write(`<li>Mensal: R$ <span class="preco">${tabPlanos[cod][5]},00</li></ol>`);
    jan.document.write("<button onclick='window.close();'>Fechar</button></div></body></html>");
  }
  
  /*
  * QUESTÃO 2
  * Função chamada para exibir as
  * imagens e texto na tabela
  */
  
  function mostra(cod){
    document.getElementById("imgDes").src = `Imagens/${tabEq[cod][0]}.png`;
    document.getElementById("DescExe").innerHTML = `${tabEq[cod][1]}`;
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
  * Calcular valor do plano
  */
  
  function calcula(){
    document.getElementById("valTot").value = ""
    
    codAt = document.getElementById("selAtiv").selectedIndex
    codPl = document.getElementById("selPlano").selectedIndex
    
    if (codAt == 0){
        alert("É necessário selecionar uma atividade")
    }
    if (codPl == 0){
        alert("É necessário selecionar um plano")
    }

    if (codPl == 1){
        var valor = tabPlanos[codAt-1][3] * 12
    }
    else{
        if (codPl == 2){
            var valor = tabPlanos[codAt-1][4] * 6
        }
        else{
            var valor = tabPlanos[codAt-1][5]
        }
    }


    
    var checkMat = document.getElementById("idMat")
    var matricula = document.getElementById("idNum").value
    
    if (!(checkMat.checked) || matricula == ""){
        valor += 80
    }
    document.getElementById("valTot").value = valor
  }