// IIFE
;(function() {

	// Selecionando os elementos cartoes
	const cartoes = document.querySelectorAll(".cartao")

	for(let i = 0; i < cartoes.length ; i++) {
		
		const cartao = cartoes[i]
		
		// Adiciona evento de click no elemento para remover cartão
		cartao.addEventListener("click", function(event) {
			const isRemoveButton = event.target.classList.contains("opcoesDoCartao-remove")
			if(isRemoveButton) {
				cartao.remove()
			}
		})
	}

})()