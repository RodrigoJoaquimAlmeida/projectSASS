const botoes = document.querySelectorAll('.js-botao');

for (let botao = 0; botao < botoes.length; botao++) {
	botoes[botao].addEventListener('click', () => {
		document.body.classList.toggle('popup--aberto');
	});
}
