* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #000;
    font-family: Arial, sans-serif;
}

/* CONTAINER DAS PÁGINAS (PROPORÇÃO DE CELULAR 9:16) */
.pagina {
    position: fixed;
    width: min(100vw, calc(100vh * 9 / 16));
    height: min(100vh, calc(100vw * 16 / 9));
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    overflow: hidden;
}

.pagina.ativa {
    display: block;
}

/* VÍDEOS E IMAGENS DO CONVITE */
.video-convite,
.imagem-convite {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* BOTÃO DE MÚSICA FIXO */
.botao-musica {
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.85);
    font-size: 22px;
    z-index: 99999;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

/* TELA DE INÍCIO */
#inicio {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #111;
    color: white;
    text-align: center;
}

.conteudo-inicio h2 {
    margin-bottom: 20px;
}

.btn-abrir {
    padding: 12px 24px;
    font-size: 18px;
    background: #ff4b5c;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

/* ===================================
   CONTAINER DO CARD (PÁGINA 2)
   =================================== */
.card-convite {
    position: relative;
    width: 100%;
    height: 100%;
}

/* ===================================
   POSICIONAMENTO DOS BOTÕES COM FLEXBOX
   =================================== */

.container-botoes-nuvens {
    position: absolute;
    width: 65%;
    height: 52%;          /* Aumentamos um pouquinho a altura geral da caixa */
    bottom: 12%;          /* Mantém o de baixo (contagem) certinho onde já está */
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 9999;
}

/* ESTILO COMPARTILHADO */
.btn-nuvem {
    width: 100%;
    height: 19%;
    border-radius: 30px;
    border: 3px solid yellow;
    cursor: pointer;
}

/* ===================================
   AJUSTE INDIVIDUAL PARA SUBIR OS DE CIMA
   =================================== */

/* 1. CONFIRMAR PRESENÇA (Sobe bastante) */
.btn-confirmacao { 
    background: rgba(0, 255, 0, 0.5); 
    transform: translateY(-20px); /* Puxa ele para cima */
} 

/* 2. PRESENTES (Sobe um pouco) */
.btn-presentes { 
    background: rgba(0, 0, 255, 0.5); 
    transform: translateY(-10px); /* Puxa ele para cima */
} 

/* 3. LOCAL (Sobe um pouquinho) */
.btn-local { 
    background: rgba(255, 0, 0, 0.5); 
    transform: translateY(-5px);  /* Puxa ele para cima */
} 

/* 4. CONTAGEM (Fica exatamente onde já está certinho) */
.btn-contagem { 
    background: rgba(255, 255, 0, 0.5); 
}
