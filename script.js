const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const TextoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Mudanças Climáticas e Aquecimento Global: Este é um dos maiores desafios ambientais enfrentados pela humanidade. As emissões de gases de efeito estufa, resultantes da queima de combustíveis fósseis e outras atividades humanas, estão causando um aumento na temperatura média global, levando a consequências como o derretimento das calotas polares, aumento do nível do mar e eventos climáticos extremos.",
        alternativas: [
            "Reduzir as emissões de gases de efeito estufa é essencial para mitigar as mudanças climáticas.!",
            "Transição para fontes de energia renovável é fundamental para combater o aquecimento global."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();


