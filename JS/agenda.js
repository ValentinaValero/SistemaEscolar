const nomes_meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];


// Mês que está sendo mostrado
let mes_atual = 7;


// Dia selecionado
let dia_selecionado = null;


// Pega os elementos do HTML
const nome_mes = document.getElementById("nome_mes");
const dias_mes = document.getElementById("dias_mes");
const evento_conteudo = document.getElementById("evento_conteudo");

const botao_anterior = document.getElementById("mes_anterior");
const botao_proximo = document.getElementById("proximo_mes");
const adicionar_evento = document.getElementById("adicionar_evento");


// Recupera os eventos salvos
let eventos = JSON.parse(localStorage.getItem("eventos")) || {};



function criar_calendario() {

    dias_mes.innerHTML = "";

    nome_mes.textContent = nomes_meses[mes_atual];


    // Descobre quantos dias o mês possui
    const quantidade_dias = new Date(
        2026,
        mes_atual + 1,
        0
    ).getDate();



    // Cria os dias
    for (let dia = 1; dia <= quantidade_dias; dia++) {

        const novo_dia = document.createElement("li");

        novo_dia.textContent = dia;

        novo_dia.classList.add("dia");


        // Verifica se esse dia possui eventos
        const data = criar_data(dia);

        if (eventos[data] && eventos[data].length > 0) {

            novo_dia.classList.add("tem-evento");

        }


        // Clique no dia
        novo_dia.addEventListener("click", function () {

            selecionar_dia(dia, novo_dia);

        });


        dias_mes.appendChild(novo_dia);
    }
}



function criar_data(dia) {

    return `${mes_atual + 1}-${dia}`;

}


function selecionar_dia(dia, elemento) {

    document.querySelectorAll(".dia").forEach(function (d) {

        d.classList.remove("selecionado");

    });


    elemento.classList.add("selecionado");


    dia_selecionado = dia;


    mostrar_eventos();

}

function mostrar_eventos() {

    evento_conteudo.innerHTML = "";


    if (!dia_selecionado) {

        evento_conteudo.innerHTML = `
            <p>Selecione um dia.</p>
        `;

        return;
    }


    const data = criar_data(dia_selecionado);


    // Se não houver eventos
    if (!eventos[data] || eventos[data].length === 0) {

        evento_conteudo.innerHTML = `
            <p>Nenhum evento neste dia.</p>
        `;

        return;
    }


    // Cria cada evento
    eventos[data].forEach(function (evento, indice) {

        criar_evento_visual(evento, indice);

    });
}



function criar_evento_visual(evento, indice) {

    const novo_evento = document.createElement("div");

    novo_evento.classList.add("novo_evento");


    novo_evento.innerHTML = `

        <button class="excluir_evento">x</button>

        <h3 contenteditable="true">${evento.titulo}</h3>

        <p contenteditable="true">${evento.descricao}</p>

    `;


    evento_conteudo.appendChild(novo_evento);


    const titulo = novo_evento.querySelector("h3");
    const descricao = novo_evento.querySelector("p");
    const botao_excluir = novo_evento.querySelector(".excluir_evento");


    // Salva quando o título for alterado
    titulo.addEventListener("input", function () {

        eventos[criar_data(dia_selecionado)][indice].titulo =
            titulo.innerText;

        salvar_eventos();

    });


    // Salva quando a descrição for alterada
    descricao.addEventListener("input", function () {

        eventos[criar_data(dia_selecionado)][indice].descricao =
            descricao.innerText;

        salvar_eventos();

    });


    // Excluir evento
    botao_excluir.addEventListener("click", function () {

        eventos[criar_data(dia_selecionado)].splice(indice, 1);


        // Se não tiver mais eventos nesse dia
        if (eventos[criar_data(dia_selecionado)].length === 0) {

            delete eventos[criar_data(dia_selecionado)];

        }


        salvar_eventos();

        criar_calendario();

        // Mantém o dia selecionado
        const dias = document.querySelectorAll(".dia");

        dias.forEach(function (dia) {

            if (Number(dia.textContent) === dia_selecionado) {

                dia.classList.add("selecionado");

            }

        });


        mostrar_eventos();

    });

}



adicionar_evento.addEventListener("click", function () {

    // Não deixa criar evento sem selecionar um dia
    if (!dia_selecionado) {

        alert("Selecione um dia primeiro.");

        return;
    }


    const data = criar_data(dia_selecionado);


    // Cria a lista daquele dia caso ela ainda não exista
    if (!eventos[data]) {

        eventos[data] = [];

    }


    // Cria o evento
    eventos[data].push({

        titulo: "Novo evento",

        descricao: ""

    });


    salvar_eventos();


    criar_calendario();


    // Recoloca a seleção no dia
    const dias = document.querySelectorAll(".dia");

    dias.forEach(function (dia) {

        if (Number(dia.textContent) === dia_selecionado) {

            dia.classList.add("selecionado");

        }

    });


    mostrar_eventos();


    // Coloca o cursor na descrição/título
    const ultimo_evento =
        evento_conteudo.lastElementChild;

    const titulo =
        ultimo_evento.querySelector("h3");

    titulo.focus();


    // Seleciona "Novo evento"
    document.execCommand("selectAll", false, null);

});



function salvar_eventos() {

    localStorage.setItem(
        "eventos",
        JSON.stringify(eventos)
    );

}



function mudar_mes(valor) {

    mes_atual += valor;


    if (mes_atual < 0) {

        mes_atual = 11;

    }


    if (mes_atual > 11) {

        mes_atual = 0;

    }


    dia_selecionado = null;


    criar_calendario();


    evento_conteudo.innerHTML = `
        <p>Selecione um dia.</p>
    `;

}


// Botão mês anterior
botao_anterior.addEventListener("click", function () {

    mudar_mes(-1);

});


// Botão próximo mês
botao_proximo.addEventListener("click", function () {

    mudar_mes(1);

});


criar_calendario();