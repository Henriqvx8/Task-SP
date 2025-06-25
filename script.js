function login() {
  const ra = document.getElementById("ra").value;
  const senha = document.getElementById("senha").value;
  const robot = document.getElementById("robot").checked;
  const status = document.getElementById("status");

  if (ra === "" || senha === "") {
    status.innerText = "❌ Preencha RA e Senha";
    status.style.color = "red";
    return;
  }

  if (!robot) {
    status.innerText = "❌ Marque 'Eu não sou um robô'";
    status.style.color = "red";
    return;
  }

  status.innerText = "✅ Login efetuado";
  status.style.color = "#22c55e";

  document.getElementById("actions").style.display = "block";
}

function mostrarAtividades(tipo) {
  document.getElementById("atividade").style.display = "block";
  const status = document.getElementById("status");
  status.innerText = tipo === "pendente" ? "📜 Atividades Pendentes carregadas" : "⏳ Atividades Expiradas carregadas";
}

function executarTarefa() {
  const atividade = document.getElementById("lista").value;
  const tempo = parseInt(document.getElementById("tempo").value) * 1000;
  const status = document.getElementById("status");

  status.innerText = `🚀 Executando ${atividade}...`;

  setTimeout(() => {
    status.innerText = `✅ ${atividade} concluída com sucesso!`;
  }, tempo);
}
