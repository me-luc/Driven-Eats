//ENVIAR MENSAGEM P/ WHATSAPP
function enviarMensagemWpp() {
	let minhaString = encodeURIComponent(meuPedido());
	window.open("https://wa.me/5571996559339?text=" + minhaString);
}

//FUNÇÃO QUE RETORNA OS DADOS DO PEDIDO
function meuPedido() {
	let prato = document.querySelector(".bloco-prato .selected .titulo-prato");
	let bebida = document.querySelector(
		".bloco-bebida .selected .titulo-prato"
	);
	let sobremesa = document.querySelector(
		".bloco-sobremesa .selected .titulo-prato"
	);
	let total = calcularPreco();
	let minhaString = `Olá, gostaria de fazer o pedido:
					\n- Prato: ${prato} 
					\n- Bebida: ${bebida}
					\n- Sobremesa: ${sobremesa}
					\nTotal: R$ ${total}`;
	return minhaString;
}

//FUNÇÃO QUE CALCULA RETORNA O PREÇO DO PEDIDO
function calcularPreco() {
	let prato = Number(
		document.querySelector(".bloco-prato .selecionado .preco").innerHTML
	);
	let bebida = Number(
		document.querySelector(".bloco-bebida .selecionado .preco").innerHTML
	);
	let sobremesa = Number(
		document.querySelector(".bloco-sobremesa .selecionado .preco").innerHTML
	);
	return prato + bebida + sobremesa;
}
//FUNÇÕES DE SELEÇÃO DE ITENS
function selecionarPrato(botao) {
	const selecionado = document.querySelector(".bloco-prato .selecionado");

	if (selecionado !== null) {
		selecionado.classList.remove("selecionado");
	}

	//dando o usuario a possibilidade de deselecionar
	if (selecionado === botao) {
		botao.classList.remove("selecionado");
	} else {
		botao.classList.add("selecionado");
	}

	liberarBotao();
}
function selecionarBebida(botao) {
	const selecionado = document.querySelector(".bloco-bebida .selecionado");

	if (selecionado !== null) {
		selecionado.classList.remove("selecionado");
	}

	//dando o usuario a possibilidade de deselecionar
	if (selecionado === botao) {
		botao.classList.remove("selecionado");
	} else {
		botao.classList.add("selecionado");
	}

	liberarBotao();
}
function selecionarSobremesa(botao) {
	const selecionado = document.querySelector(".bloco-sobremesa .selecionado");

	if (selecionado !== null) {
		selecionado.classList.remove("selecionado");
	}

	//dando o usuario a possibilidade de deselecionar
	if (selecionado === botao) {
		botao.classList.remove("selecionado");
	} else {
		botao.classList.add("selecionado");
	}

	liberarBotao();
}

//FUNÇÃO QUE VERIFICA REQUISITOS PRA BOTAO SER LIBERADO
function liberarBotao() {
	const selecionadoPrato = document.querySelector(
		".bloco-prato .selecionado"
	);
	const selecionadoBebida = document.querySelector(
		".bloco-bebida .selecionado"
	);
	const selecionadoSobremesa = document.querySelector(
		".bloco-sobremesa .selecionado"
	);

	if (
		selecionadoPrato !== null &&
		selecionadoBebida !== null &&
		selecionadoSobremesa !== null
	) {
		const botao = document.querySelector(".barra-inferior button");
		botao.removeAttribute("disabled");
		botao.classList.add("habilitado");
	}

	//verificando se usuario não deselecionou
	if (
		selecionadoPrato === null ||
		selecionadoBebida === null ||
		selecionadoSobremesa === null
	) {
		const botao = document.querySelector(".botao");
		botao.classList.remove("habilitado");
		botao.setAttribute("disabled", "");
	}
}
