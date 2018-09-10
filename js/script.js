
function operacao(cboOperacoes){

	var label1 = document.getElementById('label1').value;
	var label2 = document.getElementById('label2').value;

	if (label1 == "" || label2 == "") {
		alert("Digite um valor para a operação!");
	}else if (cboOperacoes == "soma")  {
		var resultado = parseInt(label1) + parseInt(label2);
	}else if (cboOperacoes == "sub") {
		var resultado = parseInt(label1) - parseInt(label2);
	}else if (cboOperacoes == "mult") {
		var resultado = parseInt(label1) * parseInt(label2);
	}else if (cboOperacoes == "div") {
		var resultado = parseInt(label1) / (label2);
	}else{
		alert("Escolha um valor inválido!")
	}

	document.getElementById('label-result').value = resultado;

}

function limpar(){
		label1 = "";
		label2 = "";
	}



	