var contador = 0;
$(document).ready(function() {
  document.querySelector(".contador").textContent = document.querySelector(".contador").innerHTML + contador;
});

function atualizaContador(num) {
  contador++;
  num.textContent = "Solicitações de acesso: " + contador;
}
