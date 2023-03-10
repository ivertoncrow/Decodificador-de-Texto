const cripto = document.querySelector("#button-cripto");
const descripto = document.querySelector("#button-descripto");
const copy = document.querySelector("#button-copy");

cripto.addEventListener("click", criptografar);
descripto.addEventListener("click", descriptografar);
copy.addEventListener("click", copiar);

function criptografar() {
  let inputText = document.getElementById("input").value;
  let textArea = inputText;

  let resultadoCript = textArea
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  document.getElementById("output").innerHTML = resultadoCript;
}

function descriptografar() {
  let inputText = document.getElementById("input").value;
  let textArea = inputText;

  let resultadoDescript = textArea
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  document.getElementById("output").innerHTML = resultadoDescript;
}

function copiar() {
  let copyTexto = document.getElementById("output");
  const resultado = "";
  copyTexto.select();
  document.execCommand("copy");
  document.getElementById("output").innerHTML = resultado;
}
