import Mascara from "./mask.js";
import { consultarCep, covidBrasilApi } from "./api.js";

const button = document.querySelector("#button");
const cpfInput = document.querySelector("#input-cpf");

//function para consumir API
function preencherResultados(data) {
  data = data[0];
  document.querySelector("#estado").innerHTML = data.state;
  document.querySelector("#casos").innerHTML = data.cases;
  document.querySelector("#obitos").innerHTML = data.deaths;
  document.querySelector("#curados").innerHTML = data.refuses;

}

//Event 
button.addEventListener("click", (e) => {
  e.preventDefault();
  Promise.all([consultarCep(cpfInput.value)]).then((dataCep) => {
    dataCep = Object.values(dataCep[0]);
    let uf = dataCep[5];
    if (uf != undefined) {
      Promise.all([covidBrasilApi(uf)]).then((dataCovid) => {
        preencherResultados(dataCovid);
      });
    } else {
      alert("CEP inexistente!");
    }
  });
});

cpfInput.addEventListener("input", (e) => {
  e.target.value = Mascara.cep(e.target.value);
});

