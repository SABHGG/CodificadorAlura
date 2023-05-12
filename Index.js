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
  mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
  document.getElementById("img-man").style.display = "none";
  document.getElementById("msg-no").style.display = "none";
  textoResultado.className = "texto-resultado-on";
  buttonCopiar.className = "button-copiar-on";
  mostrarTexto = document.getElementById("texto-resultado");
  mostrarTexto.innerHTML = texto;
}

function copiar() {
  let copyText = document.getElementById("texto-resultado");
  copyText.select();
  document.execCommand("copy");
}
