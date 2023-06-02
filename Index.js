const buttonEncriptar = document.getElementById("button-encriptar");
const buttonDesencriptar = document.getElementById("button-desencriptar");
const buttonCopiar = document.getElementById("button-copiar");
const TextoArea = document.getElementById("texto");
const textoResultado = document.getElementById("texto-resultado");

buttonEncriptar.addEventListener("click", () => {
  encriptar();
});

buttonDesencriptar.addEventListener("click", () => {
  desencriptar();
});

buttonCopiar.addEventListener("click", () => {
  copiar();
});

const mapaEncriptacion = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

function encriptar() {
  let texto = TextoArea.value;
  let textoEncriptado = "";
  for (i = 0; i < texto.length; i++) {
    let letra = texto[i];
    if (mapaEncriptacion[letra]) {
      textoEncriptado += mapaEncriptacion[letra];
    } else {
      textoEncriptado += letra;
    }
  }
  buttonCopiar.innerHTML = "Copiar";
  mostrarResultado(textoEncriptado);
}

function desencriptar() {
  let texto = TextoArea.value;
  let textoDesencriptado = "";
  let i = 0;
  while (i < texto.length) {
    let letra = texto[i];
    if (mapaEncriptacion[letra]) {
      let posibleCadenaEncriptada = texto.substr(
        i,
        mapaEncriptacion[letra].length
      );
      if (posibleCadenaEncriptada === mapaEncriptacion[letra]) {
        textoDesencriptado += letra;
        i += posibleCadenaEncriptada.length;
      } else {
        textoDesencriptado += letra;
        i++;
      }
    } else {
      textoDesencriptado += letra;
      i++;
    }
  }
  buttonCopiar.innerHTML = "Copiar";
  mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
  mostrarTexto = document.getElementById("texto-resultado");
  mostrarTexto.innerHTML = texto;
}

function copiar() {
  let copyText = document.getElementById("texto-resultado");
  navigator.clipboard.writeText(copyText.innerHTML);
  buttonCopiar.innerHTML = "Copiado ✔";
}
