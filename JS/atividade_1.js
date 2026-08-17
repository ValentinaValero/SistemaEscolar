// QUESTÕES

const questoes = [
    {
        pergunta: "Qual é a capital do Brasil?",
        alternativas: ["São Paulo", "Brasília", "Rio de Janeiro", "Curitiba"],
        correta: 1
    },
    {
        pergunta: "Quanto é 5 × 6?",
        alternativas: ["25", "30", "35", "40"],
        correta: 1
    },
    {
        pergunta: "Qual linguagem é utilizada para estilizar páginas web?",
        alternativas: ["HTML", "JavaScript", "CSS", "Python"],
        correta: 2
    },
    {
        pergunta: "Qual destes é um sistema operacional?",
        alternativas: ["Windows", "HTML", "CSS", "MySQL"],
        correta: 0
    },
    {
        pergunta: "Qual estrutura é utilizada para armazenar vários valores em JavaScript?",
        alternativas: ["Array", "String", "Boolean", "Number"],
        correta: 0
    },
    {
        pergunta: "Quanto é 10 + 15?",
        alternativas: ["20", "25", "30", "35"],
        correta: 1
    }
];


// INFORMAÇÕES

const parametros = new URLSearchParams(window.location.search);
const atividade_id = parametros.get("id") || "atividade_1";
const atividade_nome = "Atividade de Revisão";
const atividade = document.getElementById("atividade");

let resultado = JSON.parse(localStorage.getItem(atividade_id));


// mostrar resultado atividade

function mostrar_atividade(revisao = false) {

    const formulario = document.createElement("form");
    formulario.classList.add("formulario");

    formulario.innerHTML = `<h1>${atividade_nome}</h1>`;

    if (revisao) {
        formulario.innerHTML += `
            <div class="resultado">
                <strong>Resultado: ${resultado.acertos}/${questoes.length}</strong>
            </div>
        `;
    }

    questoes.forEach((questao, i) => {

        const bloco = document.createElement("div");
        bloco.classList.add("questao");

        bloco.innerHTML = `<h2>${i + 1}. ${questao.pergunta}</h2>`;

        questao.alternativas.forEach((alternativa, j) => {

            const label = document.createElement("label");
            label.classList.add("alternativa");

            const input = document.createElement("input");

            input.type = "radio";
            input.name = `questao_${i}`;
            input.value = j;

            if (revisao) {

                input.disabled = true;

                const resposta = Number(resultado.respostas[i]);

                if (resposta === j) {
                    input.checked = true;
                    label.classList.add("resposta_usuario");

                    if (resposta !== questao.correta) {
                        label.classList.add("resposta_errada");
                    }
                }

                if (j === questao.correta) {
                    label.classList.add("resposta_correta");
                }
            }

            label.append(input, document.createTextNode(alternativa));
            bloco.appendChild(label);
        });

        formulario.appendChild(bloco);
    });


    // funções do botão

    if (!revisao) {

        const botao = document.createElement("button");

        botao.type = "submit";
        botao.classList.add("botao_enviar");
        botao.textContent = "Enviar atividade";

        formulario.appendChild(botao);

        formulario.addEventListener("submit", function(evento) {
            evento.preventDefault();
            finalizar_atividade(formulario);
        });

    } else {

        const aviso = document.createElement("p");

        aviso.classList.add("atividade_bloqueada");
        aviso.textContent =
            "Esta atividade já foi realizada. Você está no modo de revisão.";

        formulario.appendChild(aviso);
    }


    atividade.innerHTML = "";
    atividade.appendChild(formulario);
}


// Ao finalizar o form

function finalizar_atividade(formulario) {

    const respostas = [];
    let acertos = 0;

    questoes.forEach((questao, i) => {

        const resposta = formulario.querySelector(
            `input[name="questao_${i}"]:checked`
        );

        if (!resposta) {
            respostas.push(null);
            return;
        }

        const valor = Number(resposta.value);

        respostas.push(valor);

        if (valor === questao.correta) {
            acertos++;
        }
    });


    if (respostas.includes(null)) {
        alert("Responda todas as questões antes de enviar.");
        return;
    }


    resultado = {
        feita: true,
        acertos: acertos,
        respostas: respostas
    };

    localStorage.setItem(
        atividade_id,
        JSON.stringify(resultado)
    );

    window.location.href = "atividades.html";
}


// Inicia o código

mostrar_atividade(resultado?.feita === true);