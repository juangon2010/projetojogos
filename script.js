// 1. BANCO DE DADOS ATUALIZADO COM LINKS DE IMAGENS QUE NÃO QUEBRAM
let jogos = [
    {
        id: 1,
        titulo: "ASTRO BOT",
        plataforma: "playstation",
        exclusivo: "Exclusivo PlayStation 5",
        descricao: "Embarque em uma missão galáctica e explore mais de 50 planetas nesta aventura de plataforma definitiva.",
        nota: "9.6/10",
        ano: 2024,
        players: "Single-player",
        imagem: "https://unsplash.com" 
    },
    {
        id: 2,
        titulo: "Marvel's Spider-Man 2",
        plataforma: "playstation",
        exclusivo: "Exclusivo PlayStation 5",
        descricao: "Balance, pule e utilize as novas Asas de Teia por toda a Nova York da Marvel, alternando entre Peter Parker e Miles Morales.",
        nota: "9.5/10",
        ano: 2023,
        players: "Single-player",
        imagem: "https://unsplash.com" 
    },
    {
        id: 3,
        titulo: "Halo Infinite",
        plataforma: "xbox",
        exclusivo: "Exclusivo Xbox / PC",
        descricao: "Quando toda a esperança foi perdida, o Master Chief está pronto para encarar o inimigo mais implacável que já enfrentou.",
        nota: "8.7/10",
        ano: 2021,
        players: "Multiplayer Grátis / Coop",
        imagem: "https://unsplash.com"
    },
    {
        id: 4,
        titulo: "Forza Motorsport",
        plataforma: "xbox",
        exclusivo: "Exclusivo Xbox / PC",
        descricao: "Supere a competição usando mais de 500 carros do mundo real em pistas mundialmente famosas com IA de ponta.",
        nota: "8.5/10",
        ano: 2023,
        players: "Single-player e Multiplayer",
        imagem: "https://unsplash.com"
    },
    {
        id: 5,
        titulo: "The Legend of Zelda",
        plataforma: "nintendo",
        exclusivo: "Exclusivo Nintendo Switch",
        descricao: "Uma aventura épica na terra e nos céus de Hyrule. Crie suas próprias armas e veículos usando novas habilidades incríveis.",
        nota: "9.7/10",
        ano: 2023,
        players: "Single-player",
        imagem: "https://unsplash.com"
    },
    {
        id: 6,
        titulo: "Pokémon Scarlet",
        plataforma: "nintendo",
        exclusivo: "Exclusivo Nintendo Switch",
        descricao: "Explore um mundo aberto de Pokémon sem barreiras. Capture, lute e treine em uma vasta região inspirada na Península Ibérica.",
        nota: "8.0/10",
        ano: 2022,
        players: "Single-player e Coop",
        imagem: "https://unsplash.com"
    },
    {
        id: 7,
        titulo: "Forza Horizon 5",
        plataforma: "computador",
        exclusivo: "Disponível para PC / Xbox",
        descricao: "O simulador de corrida em mundo aberto definitivo, com gráficos estonteantes e centenas de carros para pilotar no México.",
        nota: "9.3/10",
        ano: 2021,
        players: "Mais de 40 Milhões",
        imagem: "https://unsplash.com"
    },
    {
        id: 8,
        titulo: "Counter-Strike 2",
        plataforma: "computador",
        exclusivo: "Exclusivo PC (Steam)",
        descricao: "O famoso jogo de tiro tático por equipes. Grátis para jogar, com gráficos atualizados e novas mecânicas de fumaça.",
        nota: "9.0/10",
        ano: 2023,
        players: "1.2 Milhão simultâneos",
        imagem: "https://unsplash.com"
    },
    {
        id: 9,
        titulo: "Roblox",
        plataforma: "celular",
        exclusivo: "Multiplataforma",
        descricao: "A plataforma definitiva onde você pode criar, jogar e compartilhar experiências com milhões de jogadores ao redor do mundo.",
        nota: "8.8/10",
        ano: 2006,
        players: "70 Milhões diários",
        imagem: "https://unsplash.com"
    },
    {
        id: 10,
        titulo: "Garena Free Fire",
        plataforma: "celular",
        exclusivo: "Exclusivo Mobile",
        descricao: "Jogo battle royale de tiro e sobrevivência, onde 50 jogadores caem em uma ilha em busca de ação rápida e estratégica.",
        nota: "9.1/10",
        ano: 2017,
        players: "100 Milhões ativos",
        imagem: "https://unsplash.com"
    }
];

const container = document.getElementById('jogos-container');
const botoesFiltro = document.querySelectorAll('.filtro-btn');
const modal = document.getElementById('modal-jogo');
const formJogo = document.getElementById('form-jogo');

// 2. FUNÇÃO RENDERIZAR CARDS
function exibirJogos(jogosParaExibir) {
    if (!container) return;
    container.innerHTML = '';
    
    if (jogosParaExibir.length === 0) {
        container.innerHTML = `<p class="descricao" style="grid-column: 1/-1; text-align: center; margin-top: 2rem;">Nenhum jogo encontrado.</p>`;
        return;
    }

    jogosParaExibir.forEach(jogo => {
        const card = document.createElement('article');
        card.classList.add('jogo-card');
        
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

                <div class="acoes-card">
                    <button class="btn-card btn-editar" onclick="prepararEdicao(${jogo.id})">✏️ Editar</button>
                    <button class="btn-card btn-excluir" onclick="excluirJogo(${jogo.id})">🗑️ Excluir</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// 3. LOGICA FILTROS
function aplicarFiltroAtual() {
    const botaoAtivo = document.querySelector('.filtro-btn.ativo');
    const categoria = botaoAtivo ? botaoAtivo.getAttribute('data-categoria') : 'todos';
    
    if (categoria === 'todos') {
        exibirJogos(jogos);
    } else {
        const filtrados = jogos.filter(j => j.plataforma === categoria);
        exibirJogos(filtrados);
    }
}

botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        botoesFiltro.forEach(btn => btn.classList.remove('ativo'));
        botao.classList.add('ativo');
        aplicarFiltroAtual();
    });
});

// 4. MODAL EVENTOS
const btnAbrir = document.getElementById('btn-abrir-modal');
if(btnAbrir) {
    btnAbrir.addEventListener('click', () => {
        formJogo.reset();
        document.getElementById('jogo-id').value = '';
        document.getElementById('modal-titulo').innerText = 'Anexar Novo Jogo 🚀';
        modal.classList.add('ativo');
    });
}

const btnFechar = document.getElementById('btn-fechar-modal');
if(btnFechar) {
    btnFechar.addEventListener('click', () => {
        modal.classList.remove('ativo');
    });
}

// 5. SALVAR OU CRIAR JOGO
if(formJogo) {
    formJogo.addEventListener('submit', (e) => {
        e.preventDefault();
        const idInput = document.getElementById('jogo-id').value;
        const novoJogo = {
            titulo: document.getElementById('titulo').value,
            plataforma: document.getElementById('plataforma').value,
            exclusivo: document.getElementById('exclusivo').value,
            descricao: document.getElementById('descricao').value,
            nota: document.getElementById('nota').value,
            ano: parseInt(document.getElementById('ano').value),
            players: document.getElementById('players').value,
            imagem: document.getElementById('imagem').value
        };

        if (idInput === "") {
            novoJogo.id = jogos.length > 0 ? Math.max(...jogos.map(j => j.id)) + 1 : 1;
            jogos.push(novoJogo);
        } else {
            const idExistente = parseInt(idInput);
            const index = jogos.findIndex(j => j.id === idExistente);
            if (index !== -1) {
                novoJogo.id = idExistente;
                jogos[index] = novoJogo;
            }
        }
        modal.classList.remove('ativo');
        aplicarFiltroAtual();
    });
}

// 6. EDITAR E EXCLUIR
function prepararEdicao(id) {
    const jogo = jogos.find(j => j.id === id);
    if (!jogo) return;

    document.getElementById('jogo-id').value = jogo.id;
    document.getElementById('titulo').value = jogo.titulo;
    document.getElementById('plataforma').value = jogo.plataforma;
    document.getElementById('exclusivo').value = jogo.exclusivo;
    document.getElementById('descricao').value = jogo.descricao;
    document.getElementById('nota').value = jogo.nota;
    document.getElementById('ano').value = jogo.ano;
    document.getElementById('players').value = jogo.players;
    document.getElementById('imagem').value = jogo.imagem;

    document.getElementById('modal-titulo').innerText = '✏️ Editando: ' + jogo.titulo;
    modal.classList.add('ativo');
}

function excluirJogo(id) {
    if (confirm("Você quer mesmo apagar esse jogo?")) {
        jogos = jogos.filter(j => j.id !== id);
        aplicarFiltroAtual();
    }
}

// Inicializa a grade
exibirJogos(jogos);
