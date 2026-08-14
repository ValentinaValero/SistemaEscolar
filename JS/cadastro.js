//function de exibir e mostrar senha

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

//valida se o gmail é @escola

function validar_dominio(email) {

    const dominio = "@escola.pr.gov.br";
    const email_minusculo = email.toLowerCase().trim();

    return email_minusculo.endsWith(dominio);

}

//salva as informações do usuario para usar dps no login

function salvar_user() {

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (validar_dominio(email)) {

        localStorage.setItem("email_usuario", email);
        localStorage.setItem("senha_usuario", senha);

        location.href = "../HTML/login.html";
        alert("cadastro realizado com sucesso!")


    }

    else {
        alert("Formatação errada. Tente novamente!")
    }
}
