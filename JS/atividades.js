document.addEventListener("DOMContentLoaded", function () {
    const status_atividade = document.getElementById("status_atividade_1");

    if (!status_atividade) {
        return;
    }

    function atualizar_status_atividade() {
        const resultado = JSON.parse(localStorage.getItem("atividade_1"));
        const concluida = resultado && resultado.feita === true;

        status_atividade.textContent = concluida ? "FEITA" : "PENDENTE";
        status_atividade.classList.toggle("feita", concluida);
        status_atividade.classList.toggle("pendente", !concluida);
    }

    atualizar_status_atividade();

    window.addEventListener("storage", function (event) {
        if (event.key === "atividade_1") {
            atualizar_status_atividade();
        }
    });
});