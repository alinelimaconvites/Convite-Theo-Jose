const musica = document.getElementById('musica');
const btnMusica = document.getElementById('botao-musica');

// 1. Inicia o convite ao clicar no botão da tela inicial
function iniciarConvite() {
    // Liga a música de fundo
    musica.play().catch(e => console.log("Aviso: Áudio bloqueado pelo navegador"));
    
    // Mostra a Página 1 e dá play no vídeo
    mostrarPagina('pagina1');
    tocarVideo('vid1');
}

// 2. Alterna o som entre LIGADO e DESLIGADO
function alternarMusica() {
    if (musica.paused) {
        musica.play();
        btnMusica.textContent = '🔊';
    } else {
        musica.pause();
        btnMusica.textContent = '🔇';
    }
}

// 3. Exibe a página desejada e oculta todas as outras
function mostrarPagina(idPagina) {
    document.querySelectorAll('.pagina').forEach(p => p.classList.remove('ativa'));
    
    const paginaAlvo = document.getElementById(idPagina);
    if (paginaAlvo) {
        paginaAlvo.classList.add('ativa');
    }
}

// 4. Executa o vídeo e transiciona para o PNG assim que ele terminar
function tocarVideo(idVideo) {
    const video = document.getElementById(idVideo);
    if (!video) return;

    video.currentTime = 0;
    video.play();

    // Quando o vídeo chegar ao fim, pula DIRETO para a página 5 (PNG com botões)
    video.onended = () => {
        mostrarPagina('pagina5');
    };
}