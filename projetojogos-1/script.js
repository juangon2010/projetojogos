const jogos = [
    {
        titulo: "ASTRO BOT",
        plataforma: "playstation",
        exclusivo: "Exclusivo PlayStation 5",
        descricao: "Embarque em uma missão galáctica e explore mais de 50 planetas nesta aventura de plataforma definitiva.",
        nota: "9.6/10",
        ano: 2024,
        players: "Single-player",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpaFsjoBbL1-uvfx4zOnQUnmYSeOmswo6xFcq9X_4ig&s=10" 
    },
    {
        titulo: "Marvel's Spider-Man 2",
        plataforma: "playstation",
        exclusivo: "Exclusivo PlayStation 5",
        descricao: "Balance, pule e utilize as novas Asas de Teia por toda a Nova York da Marvel, alternando entre Peter Parker e Miles Morales.",
        nota: "9.5/10",
        ano: 2023,
        players: "Single-player",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjw2_GQvX6Gch-lhsfQE50K9J0FvQnX59BPjxuZcwFJg&s=10" 
    },
    {
        titulo: "Halo Infinite",
        plataforma: "xbox",
        exclusivo: "Exclusivo Xbox / PC",
        descricao: "Quando toda a esperança foi perdida, o Master Chief está pronto para encarar o inimigo mais implacável que já enfrentou.",
        nota: "8.7/10",
        ano: 2021,
        players: "Multiplayer Grátis / Coop",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_EOwkAyGu9430e0YafMwkhcExfS1g5YYa1kMdJ1ULvg&s=10"
    },
    {
        titulo: "Forza Motorsport",
        plataforma: "xbox",
        exclusivo: "Exclusivo Xbox / PC",
        descricao: "Supere a competição usando mais de 500 carros do mundo real em pistas mundialmente famosas com IA de ponta.",
        nota: "8.5/10",
        ano: 2023,
        players: "Single-player e Multiplayer",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzsJtVWRn_2krNXEyhtzAnZUSgtTPME3xQKEZZ7GQP5g&s=10"
    },
    {
        titulo: "The Legend of Zelda: Tears of the Kingdom",
        plataforma: "nintendo",
        exclusivo: "Exclusivo Nintendo Switch",
        descricao: "Uma aventura épica na terra e nos céus de Hyrule. Crie suas próprias armas e veículos usando novas habilidades incríveis.",
        nota: "9.7/10",
        ano: 2023,
        players: "Single-player",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTErKqnIV8ob_dFbCB5pXQx4WRtdtuKRfIghRTIX3VDnw&s"
    },
    {
        titulo: "Pokémon Scarlet",
        plataforma: "nintendo",
        exclusivo: "Exclusivo Nintendo Switch",
        descricao: "Explore um mundo aberto de Pokémon sem barreiras. Capture, lute e treine em uma vasta região inspirada na Península Ibérica.",
        nota: "8.0/10",
        ano: 2022,
        players: "Single-player e Coop",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_r6rP30jeRq7bVQKwQyPHUepaagt51b67Mo9XH3SRUA&s=10"
    },
    {
        titulo: "Forza Horizon 5",
        plataforma: "computador",
        exclusivo: "Disponível para PC / Xbox",
        descricao: "O simulador de corrida em mundo aberto definitivo, com gráficos estonteantes e centenas de carros para pilotar no México.",
        nota: "9.3/10",
        ano: 2021,
        players: "Mais de 40 Milhões",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMPyVWg5LDfZvjhXrZahbLqZm5Vz9vFfNPdDebdSocpQ&s=10"
    },
    {
        titulo: "Counter-Strike 2",
        plataforma: "computador",
        exclusivo: "Exclusivo PC (Steam)",
        descricao: "O famoso jogo de tiro tático por equipes. Grátis para jogar, com gráficos atualizados e novas mecânicas de fumaça.",
        nota: "9.0/10",
        ano: 2023,
        players: "1.2 Milhão simultâneos",
        imagem: "https://i.pinimg.com/736x/55/b9/2e/55b92e64100c309f8bd7dbcac3437a1f.jpg"
    },
    {
        titulo: "Roblox",
        plataforma: "celular",
        exclusivo: "Multiplataforma",
        descricao: "A plataforma definitiva onde você pode criar, jogar e compartilhar experiências com milhões de jogadores ao redor do mundo.",
        nota: "8.8/10",
        ano: 2006,
        players: "70 Milhões diários",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8BOFgGDPZZovza9EIhSa-2gApr364hnHvYoC9FVfvmg&s"
    },
    {
        titulo: "Garena Free Fire",
        plataforma: "celular",
        exclusivo: "Exclusivo Mobile",
        descricao: "Jogo battle royale de tiro e sobrevivência, onde 50 jogadores caem em uma ilha em busca de ação rápida e estratégica.",
        nota: "9.1/10",
        ano: 2017,
        players: "100 Milhões ativos",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUaeS0bsa3CHq1NNoYL629100dW6ywUSiJ_QqrvaTIEA&s=10"
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
            <div class="badge-exclusivo">${jogo.exclusivo}</div>
            <img src="${jogo.imagem}" alt="${jogo.titulo}" class="jogo-img">
            <div class="jogo-info">
                <span class="plataforma">${jogo.plataforma}</span>
                <h2>${jogo.titulo}</h2>
                <p class="descricao">${jogo.descricao}</p>
                
                <div class="detalhes-tecnicos">
                    <p>📅 <strong>Ano:</strong> ${jogo.ano}</p>
                    <p>👥 <strong>Players:</strong> ${jogo.players}</p>
                </div>

                <div class="jogo-footer">
                    <span class="nota">⭐ ${jogo.nota}</span>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        botoesFiltro.forEach(btn => btn.classList.remove('ativo'));
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

document.addEventListener('DOMContentLoaded', () => exibirJogos(jogos));
