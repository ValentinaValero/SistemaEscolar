//pega as informações do cadastro e valida com as informações inseridas pelo user

function logar() {

    const email_digitado = document.getElementById("email").value;
    const senha_digitada = document.getElementById("senha").value;

    const email_salvo = localStorage.getItem("email_usuario");
    const senha_salva = localStorage.getItem("senha_usuario");

    if (email_salvo === email_digitado && senha_salva === senha_digitada) {
        alert("Login realizado");
        location.href = "../HTML/home.html";
    }

    else {
        alert("Informação invalida. Tente novamente");
    }
}

function mostrar_senha() {

    const senha = document.getElementById("senha");
    const icone = document.getElementById("icone");

    if (senha.type === "password") {
        senha.setAttribute("type", "text");
        icone.classList.add("icone_invisivel")
    }

    else {
        senha.setAttribute("type", "password");
        icone.classList.remove("icone_invisivel")
    }
}

/*Apartir daqui função para mudar a senha*/

const bloco = document.getElementById("bloco");

function criar_bloco_senha() {

    if (document.querySelector(".bloco_senha")) {
        return;
    }

    const novoBloco = document.createElement("div");

    novoBloco.classList.add("bloco_senha");

    novoBloco.innerHTML = `
    <h2>Alterar senha</h2>

    <input type="email" placeholder="Email" class="email">

    <div class="campo_senha">
        <input type="password" placeholder="Nova senha" class="nova_senha">
        <div class="icone_nova_senha" onclick="mostrar_nova_senha(this)"></div>
    </div>

    <button onclick="mudarSenha(this)">Mudar senha</button>
    `;

    bloco.appendChild(novoBloco);
}




//Só para fechar quando clicar fora do bloco

document.addEventListener("click", function (event) {

    const blocoSenha = document.querySelector(".bloco_senha");
    const abrirBloco = event.target.closest(".abrir_bloco");

    if (!blocoSenha) {
        return;
    }

    if (!blocoSenha.contains(event.target) && !abrirBloco) {
        blocoSenha.remove();
    }

});

// Mesma função de mostrar a senha só que para o bloco mudar senha
function mostrar_nova_senha(icone) {

    const senha = icone.previousElementSibling; //pega o input que está imediatamente antes do icone

    if (senha.type === "password") {
        senha.type = "text";
        icone.classList.add("icone_nova_senha_invisivel");
    }

    else {
        senha.type = "password";
        icone.classList.remove("icone_nova_senha_invisivel");
    }
}

//valida se o email existe. Se existir ele muda para a nova senha

function mudarSenha(botao) {

    const blocoSenha = botao.parentElement;

    const email = blocoSenha.querySelector(".email").value;
    const novaSenha = blocoSenha.querySelector(".nova_senha").value;

    const emailSalvo = localStorage.getItem("email_usuario");

    if (email === emailSalvo) {

        localStorage.setItem("senha_usuario", novaSenha);

        alert("Senha alterada com sucesso!");

        blocoSenha.remove();

    }

    else {
        alert("Informações invalidas. Tente novamente!");
    }
}