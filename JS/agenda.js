const eventos = {
    "08-27": {
        nome: "Avaliação 2",
        materia: "Matemática"
    },

    "08-15": {
        nome: "Apresentação de Slides",
        materia: "Português"
    },

    "08-20": {
        nome: "Apresentação PMBOK",
        materia: "Programação Mobile"
    },

    "09-03": {
        nome: "Avaliação 1",
        materia: "Física"
    },

    "09-10": {
        nome: "Entrega de trabalho",
        materia: "Banco de Dados"
    }
};

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


let mes_atual = 7;


const dias = document.querySelectorAll(".dias_mes li");
const nome_mes = document.getElementById("nome_mes");
const evento_conteudo = document.getElementById("evento_conteudo");

const botao_anterior = document.getElementById("mes_anterior");
const botao_proximo = document.getElementById("proximo_mes");


function criar_data(dia) {
    return `${String(mes_atual + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
}

dias.forEach((dia) => {

    dia.addEventListener("click", () => {

        dias.forEach((d) => {
            d.classList.remove("selecionado");
        });

        dia.classList.add("selecionado");

        mostrar_evento(criar_data(Number(dia.textContent)));
    });

});


function mostrar_evento(data) {

    const evento = eventos[data];

    if (evento) {
        evento_conteudo.innerHTML = `
            <li>
                <h3>${evento.nome}</h3>
                ${evento.materia}
            </li>
        `;
    } else {
        evento_conteudo.innerHTML = `
            <li>Nenhum evento neste dia.</li>
        `;
    }
}

function marcar_eventos() {

    dias.forEach((dia) => {

        const data = criar_data(Number(dia.textContent));

        dia.classList.toggle("tem-evento", !!eventos[data]);

    });
}


function trocar_mes() {

    nome_mes.textContent = nomes_meses[mes_atual];

    dias.forEach((dia) => {
        dia.classList.remove("selecionado");
    });

    marcar_eventos();

    evento_conteudo.innerHTML = `
        <li>Selecione um dia.</li>
    `;
}

function mudar_mes(valor) {

    mes_atual += valor;

    if (mes_atual < 0) mes_atual = 11;
    if (mes_atual > 11) mes_atual = 0;

    trocar_mes();
}


botao_anterior.addEventListener("click", () => mudar_mes(-1));

botao_proximo.addEventListener("click", () => mudar_mes(1));


trocar_mes();