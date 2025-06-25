<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task-SP | Automação Escolar</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <div class="container">
    <div class="card">
      <h1>Task<span>SP</span> 🚀</h1>
      <p>Automatizador para Sala do Futuro e CMSP</p>

      <input type="text" id="ra" placeholder="Digite seu RA + dígito + sp">
      <input type="password" id="senha" placeholder="Senha">

      <div class="check">
        <input type="checkbox" id="robot">
        <label for="robot">Eu não sou um robô</label>
      </div>

      <button onclick="login()">🔓 Entrar</button>

      <div class="actions" id="actions">
        <button onclick="mostrarAtividades('pendente')">📜 Atividades Pendentes</button>
        <button onclick="mostrarAtividades('expirada')">⏳ Atividades Expiradas</button>
      </div>

      <div class="atividade" id="atividade">
        <h2>Selecionar Atividade</h2>
        <select id="lista">
          <option value="Matemática">Matemática</option>
          <option value="Português">Português</option>
          <option value="Ciências">Ciências</option>
          <option value="História">História</option>
        </select>
        <input type="number" id="tempo" placeholder="Tempo (min)" min="1" value="5">
        <button onclick="executarTarefa()">🚀 Iniciar</button>
      </div>

      <p id="status"></p>
    </div>
  </div>

<script src="js/script.js"></script>
</body>
</html>
