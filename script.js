function mostrarSenha() {
    const senha = document.getElementById("senha");
    senha.type = senha.type === "password" ? "text" : "password";
}

function login() {
    const ra = document.getElementById("ra").value;
    const senha = document.getElementById("senha").value;
    const robot = document.getElementById("robot").checked;
    const status = document.getElementById("status");

    if (ra === "" || senha === "") {
        status.innerText = "❌ Preencha todos os campos!";
        status.style.color = "red";
        return;
    }

    if (!robot) {
        status.innerText = "❌ Marque 'Eu não sou um robô'";
        status.style.color = "red";
        return;
    }

    status.innerText = "✅ Login efetuado com sucesso!";
    status.style.color = "#22c55e";

    document.getElementById("botoes").style.display = "block";
}

function mostrarAtividades(tipo) {
    const atividade = document.getElementById("atividade");
    atividade.style.display = "block";

    const status = document.getElementById("status");
    if (tipo === "pendente") {
        status.innerText = "📜 Atividades pendentes carregadas!";
    } else {
        status.innerText = "⏳ Atividades expiradas carregadas!";
    }
}

function executarTarefa() {
    const atividadeSelecionada = document.getElementById("lista").value;
    const tempo = parseInt(document.getElementById("tempo").value) * 1000;
    const status = document.getElementById("status");

    status.innerText = `🚀 Executando ${atividadeSelecionada}...`;

    setTimeout(() => {
        status.innerText = `✅ ${atividadeSelecionada} concluída com sucesso!`;
    }, tempo);
        }
