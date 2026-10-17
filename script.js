const musica = document.getElementById('musica');
const btnMusica = document.getElementById('botao-musica');

// 1. Quando clica no botão "Abrir Convite"
function iniciarConvite() {
    // Tenta tocar a música de fundo
    musica.play().catch(e => console.log("Áudio aguardando interação:", e));
    
    // Mostra a Página 1 e dá play no vídeo 1
    mostrarPagina('pagina1');
    tocarVideo('vid1');
}

// 2. Alternar o som (LIGAR / DESLIGAR)
function alternarMusica() {
    if (musica.paused) {
        musica.play();
        btnMusica.textContent = '🔊';
    } else {
        musica.pause();
        btnMusica.textContent = '🔇';
    }
}

// 3. Função para trocar as telas
function mostrarPagina(idPagina) {
    document.querySelectorAll('.pagina').forEach(p => p.classList.remove('ativa'));
    
    const paginaAlvo = document.getElementById(idPagina);
    if (paginaAlvo) {
        paginaAlvo.classList.add('ativa');
    }
}

// 4. Toca o vídeo e, quando terminar, VAI DIRETO PARA A PAGINA 2 (PNG)
function tocarVideo(idVideo) {
    const video = document.getElementById(idVideo);
    if (!video) return;

    video.currentTime = 0;

    // Dispara a troca para a Página 2 assim que o vídeo CHEGAR AO FIM
    video.onended = () => {
        mostrarPagina('pagina2');
    };

    // Tenta dar play no vídeo
    const playPromise = video.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Erro ao reproduzir vídeo:", error);
            // Se o vídeo falhar em carregar/tocar por qualquer motivo, avança para a página 2 após 3 segundos
            setTimeout(() => {
                mostrarPagina('pagina2');
            }, 3000);
        });
    }
}
