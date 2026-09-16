// ========================================
// ABRIR IMAGEM
// ========================================

function abrirImagem(imagem) {

    const modal = document.getElementById("modalImagem");

    const imagemAmpliada = document.getElementById("imagemAmpliada");


    imagemAmpliada.src = imagem.src;

    imagemAmpliada.alt = imagem.alt;


    modal.classList.add("ativo");

}


// ========================================
// FECHAR IMAGEM
// ========================================

function fecharImagem() {

    const modal = document.getElementById("modalImagem");

    modal.classList.remove("ativo");

}


// ========================================
// FECHAR CLICANDO FORA DA IMAGEM
// ========================================

document.getElementById("modalImagem").addEventListener("click", function(event) {

    if (event.target === this) {

        fecharImagem();

    }

});


// ========================================
// FECHAR COM ESC
// ========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        fecharImagem();

    }

});