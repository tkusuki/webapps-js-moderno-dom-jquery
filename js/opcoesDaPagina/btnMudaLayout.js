// IIFE
;(function() {

	// Selecionando o elemento botão #btnMudaLayout
	const btn = document.querySelector("#btnMudaLayout")
	const mural = document.querySelector(".mural")

	console.log(mural.classList)
	// Adiciona evento de click no botão #btnMudaLayout
	btn.addEventListener("click", function(){

		// Altera o texto do #btnMudaLayout para Linhas ou Blocos
		// .trim() é para remover os espaços em branco no texto
		if(btn.textContent.trim() == "Linhas") {
			btn.textContent = "Blocos"
			mural.classList.add("mural--linha")

		} else {
			btn.textContent = "Linhas"
			mural.classList.remove("mural--linha")
		}

	})

	btn.classList.remove("no-js")

})()