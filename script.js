const musica = document.getElementById('musica');
const btnMusica = document.getElementById('botao-musica');

// 1. Inicia o convite, toca a música e dá play no 1º vídeo
function iniciarConvite() {
    musica.play().catch(e => console.log("Aviso: Áudio bloqueado pelo navegador"));
    mostrarPagina('pagina1');
    tocarVideo('vid1');
}

// 2. Alterna Som ON/OFF
function alternarMusica() {
    if (musica.paused) {
        musica.play();
        btnMusica.textContent = '🔊';
    } else {
        musica.pause();
        btnMusica.textContent = '🔇';
    }
}

// 3. Gerenciador de navegação entre seções
function mostrarPagina(idPagina) {
    document.querySelectorAll('.pagina').forEach(p => p.classList.remove('ativa'));
    
    const paginaAlvo = document.getElementById(idPagina);
    if (paginaAlvo) {
        paginaAlvo.classList.add('ativa');
    }
}

// 4. Toca um vídeo específico e agenda a transição ao finalizar
function tocarVideo(idVideo) {
    const video = document.getElementById(idVideo);
    if (!video) return;

    video.currentTime = 0;
    video.play();

    // Evento disparado no exato segundo em que o vídeo encerra
    video.onended = () => {
        <!--if (idVideo === 'vid1') {-->
            mostrarPagina('pagina2');
            <!--tocarVideo('vid2');
        } else if (idVideo === 'vid2') {
            mostrarPagina('pagina3');
            tocarVideo('vid3');
        } else if (idVideo === 'vid3') {
            mostrarPagina('pagina4');
            tocarVideo('vid4');
        } else if (idVideo === 'vid4') {
            // Ao terminar o último vídeo, avança para a página PNG com os botões
            mostrarPagina('pagina2');
        }-->
    };
}