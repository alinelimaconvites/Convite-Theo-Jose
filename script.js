const musica = document.getElementById("musica");
const botaoMusica = document.getElementById("botao-musica");


// CONTROLE DA MÚSICA

botaoMusica.addEventListener("click", function () {

    if (musica.paused) {

        musica.play();
        botaoMusica.textContent = "🔇";

    } else {

        musica.pause();
        botaoMusica.textContent = "🔊";

    }

});


// TROCAR DE PÁGINA

function mostrarPagina(numero) {

    const paginas = document.querySelectorAll(".pagina");

    paginas.forEach(function(pagina) {
        pagina.classList.remove("ativa");
    });

    const novaPagina = document.getElementById("pagina" + numero);

    novaPagina.classList.add("ativa");


    // Começa o vídeo da nova página

    const video = novaPagina.querySelector("video");

    if (video) {

        video.currentTime = 0;

        video.play();

    }

}