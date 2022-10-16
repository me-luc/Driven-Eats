//ENVIAR MENSAGEM P/ WHATSAPP
function enviarMensagemWpp() {
	let nome = prompt("Digite seu nome: ");
	let endereco = prompt("Digite seu endereço: ");
	let minhaString = encodeURIComponent(
		meuPedido() + `\n\nNome: ${nome}\nEndereço: ${endereco}`
	);

	window.open("https://wa.me/5571996559339?text=" + minhaString);
}

function atualizarPagConfimacao() {
	const descricaoPrato = document.querySelector(".prato .descricao");
	const descricaoBebida = document.querySelector(".bebida .descricao");
	const descricaoSobremesa = document.querySelector(".sobremesa .descricao");
	const precoPrato = document.querySelector(".prato .price");
	const precoBebida = document.querySelector(".bebida .price");
	const precoSobremesa = document.querySelector(".sobremesa .price");
	const precoTotal = document.querySelector(".total .price");

	//atualizando dados da pagina
	descricaoBebida.innerHTML = document.querySelector(
		".bloco-bebida .selecionado .titulo-opcao"
	).innerHTML;
	descricaoPrato.innerHTML = document.querySelector(
		".bloco-prato .selecionado .titulo-opcao"
	).innerHTML;
	descricaoSobremesa.innerHTML = document.querySelector(
		".bloco-sobremesa .selecionado .titulo-opcao"
	).innerHTML;

	precoPrato.innerHTML = document.querySelector(
		".bloco-prato .selecionado .preco"
	).innerHTML;
	precoBebida.innerHTML = document.querySelector(
		".bloco-bebida .selecionado .preco"
	).innerHTML;
	precoSobremesa.innerHTML = document.querySelector(
		".bloco-sobremesa .selecionado .preco"
	).innerHTML;
	precoTotal.innerHTML = calcularPreco();

	//após atualizar dados da pagina mostra a div
	const div = document.querySelector(".tela-confirmacao");
	div.classList.remove("hide");
}

function cancelarPedido() {
	const div = document.querySelector(".tela-confirmacao");
	div.classList.add("hide");
}

//FUNÇÃO QUE RETORNA OS DADOS DO PEDIDO
function meuPedido() {
	let prato = document.querySelector(
		".bloco-prato .selecionado .titulo-opcao"
	).innerHTML;
	let bebida = document.querySelector(
		".bloco-bebida .selecionado .titulo-opcao"
	).innerHTML;
	let sobremesa = document.querySelector(
		".bloco-sobremesa .selecionado .titulo-opcao"
	).innerHTML;
	let total = calcularPreco();
	let minhaString = `Olá, gostaria de fazer o pedido: \n- Prato: ${prato} \n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${total}`;
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
	return (prato + bebida + sobremesa).toFixed(2);
}
//FUNÇÕES DE SELEÇÃO DE ITENS
function selecionarPrato(botao) {
	const selecionadoAnteriormente = document.querySelector(
		".bloco-prato .selecionado"
	);
	const iconeAnterior = document.querySelector(
		".bloco-prato .selecionado .icone"
	);

	if (selecionadoAnteriormente !== null) {
		selecionadoAnteriormente.classList.remove("selecionado");
		iconeAnterior.classList.add("hide");
	}

	//dando o usuario a possibilidade de deselecionar
	if (selecionadoAnteriormente === botao) {
		botao.classList.remove("selecionado");
		iconeAnterior.classList.add("hide");
	} else {
		botao.classList.add("selecionado");
		const icone = document.querySelector(
			".bloco-prato .selecionado .icone"
		);
		icone.classList.remove("hide");
	}

	liberarBotao();
}
function selecionarBebida(botao) {
	const selecionadoAnteriormente = document.querySelector(
		".bloco-bebida .selecionado"
	);
	const iconeAnterior = document.querySelector(
		".bloco-bebida .selecionado .icone"
	);

	if (selecionadoAnteriormente !== null) {
		selecionadoAnteriormente.classList.remove("selecionado");
		iconeAnterior.classList.add("hide");
	}

	//dando o usuario a possibilidade de deselecionar
	if (selecionadoAnteriormente === botao) {
		botao.classList.remove("selecionado");
		iconeAnterior.classList.add("hide");
	} else {
		botao.classList.add("selecionado");
		const icone = document.querySelector(
			".bloco-bebida .selecionado .icone"
		);
		icone.classList.remove("hide");
	}

	liberarBotao();
}
function selecionarSobremesa(botao) {
	const selecionadoAnteriormente = document.querySelector(
		".bloco-sobremesa .selecionado"
	);
	const iconeAnterior = document.querySelector(
		".bloco-sobremesa .selecionado .icone"
	);

	if (selecionadoAnteriormente !== null) {
		selecionadoAnteriormente.classList.remove("selecionado");
		iconeAnterior.classList.add("hide");
	}

	//dando o usuario a possibilidade de deselecionar
	if (selecionadoAnteriormente === botao) {
		botao.classList.remove("selecionado");
		iconeAnterior.classList.add("hide");
	} else {
		botao.classList.add("selecionado");
		const icone = document.querySelector(
			".bloco-sobremesa .selecionado .icone"
		);
		icone.classList.remove("hide");
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
		botao.innerHTML = "Fechar pedido";
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
		botao.innerHTML = "Selecione os 3 itens para fechar o pedido";
		botao.classList.remove("habilitado");
		botao.setAttribute("disabled", "");
	}
}
