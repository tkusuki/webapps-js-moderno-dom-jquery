// IIFE
;(function() {

	// Selecionando os elementos cartoes
	const cartoes = document.querySelectorAll(".cartao")

	for(let i = 0; i < cartoes.length ; i++) {
		
		const cartao = cartoes[i]
		
		// Adiciona evento de click no elemento para remover cartão
		cartao.addEventListener("mouseover", function() {

				cartao.classList.add("cartao--focado")

				
			}
		})
	}

})()