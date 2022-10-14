function enviarMensagemWpp() {
	minhaString =
		"Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang \n- Bebida: Coquinha Gelada\n- Sobremesa: Pudim\nTotal: R$ 27.70";
	minhaString = encodeURIComponent(minhaString);
	window.open("https://wa.me/5571996559339?text=" + minhaString);
}
