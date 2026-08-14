const adic_nota = document.getElementById("adic_nota");
const notas = document.getElementById("notas");


//carrega as notas quando a página abre
let lista_notas = JSON.parse(localStorage.getItem("notas")) || [];


//cria uma nota
function criar_nota(texto = "") {

    const nova_nota = document.createElement("div");
    nova_nota.classList.add("nova_nota");

    nova_nota.innerHTML = `
        <p contenteditable="true">${texto}</p>
        <button class="excluir">x</button>
    `;

    notas.appendChild(nova_nota);

    const texto_nota = nova_nota.querySelector("p");
    const botao_excluir = nova_nota.querySelector(".excluir");


    //Salva quando digitar
    texto_nota.addEventListener("input", salvar_notas);


    //Exclui a nota
    botao_excluir.addEventListener("click", function () {

        nova_nota.remove();

        salvar_notas();

    });


    if (texto === "") {
        texto_nota.focus();
    }
}


//Salva todas as notas no localStorage
function salvar_notas() {

    lista_notas = [];

    document.querySelectorAll(".nova_nota p").forEach(function (nota) {

        lista_notas.push(nota.innerText);

    });

    localStorage.setItem("notas", JSON.stringify(lista_notas));
}


//Botão de criar nota
adic_nota.addEventListener("click", function () {

    criar_nota();

    salvar_notas();

});


//Recupera as notas salvas
lista_notas.forEach(function (nota) {

    criar_nota(nota);

});