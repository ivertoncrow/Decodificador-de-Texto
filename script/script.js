function criptografar() {
  let inputText = document.getElementById("textInput").value;
  let textArea = inputText;

  let resultadoCript = textArea
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  document.getElementById("textOutput").innerHTML = resultadoCript;
}

function descriptografar() {
  let inputText = document.getElementById("textInput").value;
  let textArea = inputText;

  let resultadoDescript = textArea
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  document.getElementById("textOutput").innerHTML = resultadoDescript;
}

function copiar() {
  let copyTexto = document.getElementById("textOutput");
  let resultado = "";
  copyTexto.select();
  document.execCommand("copy");
  document.getElementById("textOutput").innerHTML = resultado;
}
