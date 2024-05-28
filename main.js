//Variáveis
let randomNumber = Math.round(Math.random() * 1000);
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let xAttempts = 0;

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
  event.preventDefault();
  const inputNumber = document.querySelector("#inputNumber");

  if (inputNumber.value !== "") {
    if (inputNumber.value >= 0 && inputNumber.value <= 1000) {
      xAttempts++;
      if (Number(inputNumber.value) == randomNumber) {
        toggleScreen();
        screen2.querySelector(
          "h2"
        ).innerText = `Acertou em ${xAttempts} tentativas.`;
      } else if (Number(inputNumber.value > randomNumber)) {
        alert("Eita, o número é menor. Tente novamente!");
      } else {
        alert("Vish, o número é maior. Tente novamente!");
      }
    } else {
      inputNumber.value = "";
      alert("Por favor, insira um número entre 0 e 1000.");
    }
  }

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
