const convertButton = document.querySelector(".convert-button"); // valor do button
const currencySelect = document.querySelector("#currency-select"); // valor do select
const resetValue = document.querySelector(".reset-value");

//Função criada para realizar a conversão
function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-value").value; // Valor recebido em real
  const currencyToConverted = document.querySelector(
    ".currency-value-to-convert"
  ); // Valor em real
  const currencyValueConverted = document.querySelector(
    ".currency-value-converted"
  ); // Outras moedas

  console.log(currencySelect.value); //mostra valor  do currency select no console

  const dolarToday = 4.92; // Valor do Dolar
  const euroToday = 5.28; // Valor do Euro
  const libraToday = 6.03; // Valor do Libra
  const bitcoinToday = 0.00000767; //Valor Bitcoin

  if (currencySelect.value == "dolar") {
    //Formata o numero após realizar os calculos de acordo com sua caracteristica
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }
  // toma uma decisão se a condição for verdadeira
  if (currencySelect.value == "euro") {
    //Formata o numero após realizar os calculos de acordo com sua caracteristica
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }
  // toma uma decisão se a condição for verdadeira
  if (currencySelect.value == "libra") {
    //Formata o numero após realizar os calculos de acordo com sua caracteristica
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
      minimumFractionDigits: 8,
    }).format(inputCurrencyValue * bitcoinToday);
  }

  //Formata os numeros de acordo com sua caracteristica
  currencyToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

// Função criada para alterar o tipo de moeda
function changeCurrency() {
  const currencyName = document.getElementById("currency-name"); // Obtem elemento do html
  const currencyImg = document.querySelector(".currency-img"); // Obtem elemento img do html

  // Condição para tomar uma decisão
  if (currencySelect.value == "dolar") {
    // compara valor so currencySelect
    currencyName.innerHTML = "Dólar americano"; // Se a condição for verdadeira troca o valor / nome do elemento
    currencyImg.src = "./assets/dolar.png"; // Se a condição for verdadeira troca a imagem do elemento
  }
  // condição para tomar uma decisão
  if (currencySelect.value == "euro") {
    // compara valor so currencySelect
    currencyName.innerHTML = "Euro"; // Se a  condição for verdadeira troca o valor / nome do elemento
    currencyImg.src = "./assets/euro.png"; // Se a  condição for verdadeira troca a imagem do elemento
  }
  // condição para tomar uma decisão
  if (currencySelect.value == "libra") {
    // compara valor so currencySelect
    currencyName.innerHTML = "Libra"; // se a condição for verdadeira ele troca o valor / nome do elemento
    currencyImg.src = "./assets/libra.png"; // Se a condição for verdadeira ele troca a imagem do elemento
  }
  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./assets/bitcoin.png";
  }
}

function resetValues() {
  const inputCurrencyValue = document.querySelector(".input-value");
  const currencyValueConverted = document.querySelector(
    ".currency-value-converted"
  );
  const currencySelect = document.querySelector("#currency-select");
  const currencyImg = document.querySelector(".currency-img");
  const currencyName = document.querySelector(".currency");

  //Define os valores iniciais zero para as variaveis
  inputCurrencyValue.value = 0;
  currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(0);

  //Redefine o valor  do elemento para a opção padrão
  currencySelect.selectedIndex = 0;

  //Redefine a imagem  para a opção padrão
  currencyImg.src = "./assets/dolar.png";

  //Redefine o valor  do elemento para a opção padrão
  currencyName.selectedIndex = 0;

  //Monitora quando clico no botão
  console.log("Cliquei");
}

//Redefinir os valores para os valores originais

// Chama função a partir de um evento
resetValue.addEventListener("click", resetValues);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
