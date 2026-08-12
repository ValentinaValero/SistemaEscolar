function logar(){

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if( email == "aluno@escola.pr.gov.br" && senha == "senhaAluno"){
        alert("Login realizado");
        location.href = "../HTML/home.html";
    }

    else{
        alert("Informação invalida. Tente novamente");
    }
}

function mostrar_senha(){

    const senha = document.getElementById("senha");
    const icone = document.getElementById("icone");

    if(senha.type === "password"){
        senha.setAttribute("type", "text");
        icone.classList.add("icone_invisivel")
    }

    else{
        senha.setAttribute("type", "password");
        icone.classList.remove("icone_invisivel")
    }
}