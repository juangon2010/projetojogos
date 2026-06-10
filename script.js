const jogos = [
    {
        titulo: "ASTRO BOT",
        plataforma: "playstation",
        descricao: "Embarque em uma missão galáctica e explore mais de 50 planetas nesta aventura de plataforma exclusiva do PlayStation 5.",
        nota: "9.6/10",
        imagem: "https://unsplash.com" 
    },
    {
        titulo: "Marvel's Spider-Man 2",
        plataforma: "playstation",
        descricao: "Balance, pule e utilize as novas Asas de Teia por toda a Nova York da Marvel, alternando entre Peter Parker e Miles Morales.",
        nota: "9.5/10",
        imagem: "./assets/homemaranha.jfif" 
    },
    {
        titulo: "Forza Horizon 6",
        plataforma: "computador",
        descricao: "O simulador de corrida em mundo aberto definitivo, com gráficos estonteantes e centenas de carros para colecionar e pilotar.",
        nota: "9.3/10",
        imagem: "https://unsplash.com"
    },
    {
        titulo: "Counter-Strike 2",
        plataforma: "computador",
        descricao: "O famoso jogo de tiro tático por equipes. Grátis para jogar, com gráficos atualizados e novas mecânicas de fumaça.",
        nota: "9.0/10",
        imagem: "https://unsplash.com"
    },
    {
        titulo: "Roblox",
        plataforma: "celular",
        descricao: "A plataforma definitiva onde você pode criar, jogar e compartilhar experiências com milhões de jogadores ao redor do mundo.",
        nota: "8.8/10",
        imagem: "https://unsplash.com"
    },
    {
        titulo: "Garena Free Fire",
        plataforma: "celular",
        descricao: "Jogo battle royale de tiro e sobrevivência, onde 50 jogadores caem em uma ilha em busca de ação rápida e estratégica.",
        nota: "9.1/10",
        imagem: "https://unsplash.com"
    }
];

const container = document.getElementById('jogos-container');
const botoesFiltro = document.querySelectorAll('.filtro-btn');

function exibirJogos(jogosParaExibir) {
    container.innerHTML = '';
    
    jogosParaExibir.forEach(jogo => {
        const card = document.createElement('div');
        card.classList.add('jogo-card');
        card.setAttribute('data-categoria', jogo.plataforma);
        
        card.innerHTML = `
            <img src="${jogo.imagem}" alt="${jogo.titulo}" class="jogo-img">
            <div class="jogo-info">
                <span class="plataforma">${jogo.plataforma}</span>
                <h2>${jogo.titulo}</h2>
                <p class="descricao">${jogo.descricao}</p>
                <div class="jogo-footer">
                    <span class="nota">⭐ ${jogo.nota}</span>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Filtro por categorias
botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        // Remove a classe ativo de todos
        botoesFiltro.forEach(btn => btn.classList.remove('ativo'));
        // Adiciona a classe ativo no clicado
        botao.classList.add('ativo');

        const categoria = botao.getAttribute('data-categoria');

        if (categoria === 'todos') {
            exibirJogos(jogos);
        } else {
            const jogosFiltrados = jogos.filter(jogo => jogo.plataforma === categoria);
            exibirJogos(jogosFiltrados);
        }
    });
});

// Exibe todos os jogos ao carregar a página
document.addEventListener('DOMContentLoaded', () => exibirJogos(jogos));
