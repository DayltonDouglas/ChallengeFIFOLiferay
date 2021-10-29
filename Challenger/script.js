const nomes = [];

function inserirNome() {
  let nomeCliente = document.getElementById(`cliente`).value;
  if (!nomeCliente) {
    alert("Digite um nome!");
    return;
  }
  nomes.push(nomeCliente);
  document.getElementById(`cliente`).value = "";
  mostrarClientes();
}

function finalizar() {
  nomes.shift();
  mostrarClientes();
}

function mostrarClientes() {
  var textHTML = "";
  for (let i = 0; i < nomes.length; i++) {
    textHTML += "<p>" + [i + 1] + " " + nomes[i] + "</p>";
  }
  let div = document.getElementById(`showClients`);
  div.innerHTML = textHTML;
}
mostrarClientes();
