
function operacao(cboOperacoes){

	var valor1 = document.getElementById('valor1').value;
	var valor2 = document.getElementById('valor2').value;
	var resultado;

	if (valor1 == "" || valor2 == "") {
		alert("Digite um valor para a operação!");
	}else if (cboOperacoes == "soma")  {
		 resultado = parseInt(valor1) + parseInt(valor2);
	}else if (cboOperacoes == "sub") {
		 resultado = parseInt(valor1) - parseInt(valor2);
	}else if (cboOperacoes == "mult") {
		 resultado = parseInt(valor1) * parseInt(valor2);
	}else if (cboOperacoes == "div") {
		 resultado = parseInt(valor1) / parseInt(valor2);
	}else{
		alert("Escolha um valor inválido!")
	}
	
	document.getElementById('resultado').value = resultado;

}

function limpa(){
	document.getElementById('valor1').value = "";
	document.getElementById('valor2').value = "";
	document.getElementById('resultado').value = "";

}



	