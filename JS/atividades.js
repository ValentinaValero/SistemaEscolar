document.addEventListener("DOMContentLoaded", function () {
    const statusAtividade = document.getElementById("status-atividade-1");

    if (!statusAtividade) {
        return;
    }

    function atualizarStatusAtividade() {
        const resultado = JSON.parse(localStorage.getItem("atividade_1"));
        const concluida = resultado && resultado.feita === true;

        statusAtividade.textContent = concluida ? "FEITA" : "PENDENTE";
        statusAtividade.classList.toggle("feita", concluida);
        statusAtividade.classList.toggle("pendente", !concluida);
    }

    atualizarStatusAtividade();

    window.addEventListener("storage", function (event) {
        if (event.key === "atividade_1") {
            atualizarStatusAtividade();
        }
    });
});