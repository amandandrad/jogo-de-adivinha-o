//Variáveis
let randomNumber = Math.round(Math.random() * 10); // criação de variavel para gerar número aleatório
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let xAttempts = 0; //variavél para armazenar número de tentativas

//Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", handleClickEnter);

// função para o evento ENTER
function handleClickEnter(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}

// função callback atribuida ao botão (só funciona com o click)
function handleTryClick(event) {
  // linha 11 é: não faça o padrão! que seria enviar o form
  event.preventDefault();

  // seleciona o botão através do ID do css
  const inputNumber = document.querySelector("#inputNumber");
  if (inputNumber.value >= 0 && inputNumber.value <= 10) {
    xAttempts++; // inclemeta +1 a cada número válido digitado
    console.log("Tentativa:", xAttempts);
    if (Number(inputNumber.value) == randomNumber) {
      /* se o número digitado pelo usuário = número aleatório então no screen 1 vai ser adicionado a class hide (que tem o display: none, onde vai deixar a tela branca) e remove a hide do screen2 para que ele apareça */
      toggleScreen();

      screen2.querySelector(
        "h2"
      ).innerText = `Acertou em ${xAttempts} tentativas.`;
    }
  } else {
    inputNumber.value = "";
    alert("Por favor, insira um número entre 0 e 10.");
  }

  //após o clique no botão tentar, automaticamente o campo fica limpo
  inputNumber.value = "";
}

// função callback irá iniciar o programa novamente
function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

//função para simplificar a troca do hide
function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
