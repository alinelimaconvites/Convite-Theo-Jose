const musica = document.getElementById('musica');
const btnMusica = document.getElementById('botao-musica');

// Variável para guardar e cancelar o temporizador do vídeo se o utilizador mudar de página rápido
let temporizadorVideo = null; 

// 1. Quando clica no botão "Abrir Convite" na tela inicial
function iniciarConvite() {
    // Toca a música de fundo
    musica.play().catch(e => console.log("Áudio aguardando interação:", e));
    
    // Vai para a Página 1 e toca o vídeo
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

// 3. Função para trocar as telas sem conflitos
function mostrarPagina(idPagina) {
    // Se houver um temporizador de vídeo pendente, cancela-o
    if (temporizadorVideo) {
        clearTimeout(temporizadorVideo);
        temporizadorVideo = null;
    }

    // Esconde todas as páginas
    document.querySelectorAll('.pagina').forEach(p => p.classList.remove('ativa'));
    
    // Mostra apenas a página desejada
    const paginaAlvo = document.getElementById(idPagina);
    if (paginaAlvo) {
        paginaAlvo.classList.add('ativa');
    }

    // Se mudou para qualquer página que NÃO seja a pagina1, pausa o vídeo 1
    if (idPagina !== 'pagina1') {
        const video1 = document.getElementById('vid1');
        if (video1) {
            video1.pause();
        }
    }
}

// 4. Toca o vídeo 1 e avança para a Página 2 assim que terminar
function tocarVideo(idVideo) {
    const video = document.getElementById(idVideo);
    if (!video) return;

    video.currentTime = 0;

    // Quando o vídeo chegar ao fim, vai para a Página 2 (nuvens)
    video.onended = () => {
        mostrarPagina('pagina2');
    };

    const playPromise = video.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Erro ao reproduzir vídeo:", error);
            // Se o vídeo falhar em reproduzir no telemóvel, avança após 3 segundos
            temporizadorVideo = setTimeout(() => {
                mostrarPagina('pagina2');
            }, 3000);
        });
    }
}