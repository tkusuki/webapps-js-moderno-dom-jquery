// IIFE
;(function() {

	// Selecionando os elementos cartoes
	const cartoes = document.querySelectorAll(".cartao")

	for(let i = 0; i < cartoes.length ; i++) {
		
		const cartao = cartoes[i]
		
		// Adiciona evento de click no elemento para remover cartão
		cartao.addEventListener("focusin", function(event) {
			console.log(event.target)
			cartao.classList.add("cartao--focado")
		})
	}

})()