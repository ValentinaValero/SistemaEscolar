const horarios = [
    {
        materia: "Matemática",
        material: "Caderno de Matemática"
    },
    {
        materia: "Português",
        material: "Livro de Português"
    },
    {
        materia: "Programação",
        material: "Notebook"
    },
    {
        materia: "Banco de Dados",
        material: "Caderno de Banco de Dados"
    },
    {
        materia: "Física",
        material: "Caderno de Física"
    },
    {
        materia: "Química",
        material: "Lista de exercícios"
    }
];

const dias = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira"
];

let dia_atual = 0;

const dia_semana = document.getElementById("dia_semana");
const materias = document.querySelectorAll(".metade_1 li");
const lista_materiais = document.querySelector(".metade_2 ul");

const dia_anterior = document.getElementById("dia_anterior");
const proximo_dia = document.getElementById("proximo_dia");

dia_anterior.addEventListener("click", () => mudar_dia(-1));

proximo_dia.addEventListener("click", () => mudar_dia(1));


function embaralhar(lista) {
    return lista.sort(() => Math.random() - 0.5);
}


function mostrar_dia() {

    dia_semana.textContent = dias[dia_atual];

    const horario = embaralhar([...horarios]);

    materias.forEach((materia, indice) => {
        materia.textContent = horario[indice].materia;
    });

    lista_materiais.innerHTML = "";

    horario.forEach((aula) => {
        lista_materiais.innerHTML += `
            <li>${aula.material}</li>
        `;
    });
}


function mudar_dia(valor) {

    dia_atual += valor;

    if (dia_atual < 0) {
        dia_atual = 4;
    }

    if (dia_atual > 4) {
        dia_atual = 0;
    }

    mostrar_dia();
}


mostrar_dia();