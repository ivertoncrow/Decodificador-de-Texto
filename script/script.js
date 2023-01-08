function criptografar() {
  let inputText = document.getElementById("mensagem").value;
  let textArea = inputText;

  let resultadoCript = textArea
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  document.getElementById("solucao").innerHTML = resultadoCript;
}

function descriptografar() {
  let inputText = document.getElementById("mensagem").value;
  let textArea = inputText;

  let resultadoDescript = textArea
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  document.getElementById("solucao").innerHTML = resultadoDescript;
}

function copiar() {
  let copyTexto = document.getElementById("solucao");
  let resultado = "";
  copyTexto.select();
  document.execCommand("copy");
  document.getElementById("solucao").innerHTML = resultado;
}