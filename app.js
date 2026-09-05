/*
to do list

Map separado [check]
Bobina minúscula [check]
Inverter input com total [check]
Editar tabela
mudar nome do pdf

*/

const addTable = document.querySelector("#adicionar");
const saveInPdf = document.querySelector("#saveInPdf");
let arrayTotal = [];
const inputPressionB = document.querySelector("#baixaBar");
const inputPressionBPa = document.querySelector("#baixaMPa");
const inputPressionA = document.querySelector("#altaBar");
const inputPressionAKPa = document.querySelector("#altaKPa");

const sensorMapBar = document.querySelector("#sensorMapBar");
const sensorMapPa = document.querySelector("#sensorMapPa");
const sensorMafBar = document.querySelector("#sensorMafBar");
const sensorMafPa = document.querySelector("#sensorMafPa");

const inputs = [
  inputPressionA,
  inputPressionAKPa,
  inputPressionB,
  inputPressionBPa,
  sensorMapBar,
  sensorMapPa,
  sensorMafBar,
  sensorMafPa,
];

let unidadesMedida = [
  [1, 100],
  [0.01, 1],
  [1, 10],
  [0.1, 1],
];

saveInPdf.addEventListener("click", () => {
  window.print();
});

inputPressionB.addEventListener("change", () => {
  let value = Number(inputPressionB.value);

  let convertTomBar = value * unidadesMedida[0][0];
  let convertToKPa = value * unidadesMedida[0][1];
  inputPressionB.value = `${convertTomBar} Bar`;
  inputPressionBPa.value = `${convertToKPa} Kpa`;
});

inputPressionBPa.addEventListener("change", () => {
  let value = Number(inputPressionBPa.value);

  let convertTomBar = value * unidadesMedida[1][0];
  let convertToKPa = value * unidadesMedida[1][1];
  inputPressionB.value = `${convertTomBar} Bar`;
  inputPressionBPa.value = `${convertToKPa} Kpa`;
});

inputPressionA.addEventListener("change", () => {
  let value = Number(inputPressionA.value);

  let convertTomBar = value * unidadesMedida[0][0];
  let convertToKPa = value * unidadesMedida[0][1];
  inputPressionA.value = `${convertTomBar} Bar`;
  inputPressionAKPa.value = `${convertToKPa} Kpa`;
});

inputPressionAKPa.addEventListener("change", () => {
  let value = Number(inputPressionAKPa.value);

  let convertTomBar = value * unidadesMedida[1][0];
  let convertToKPa = value * unidadesMedida[1][1];
  inputPressionA.value = `${convertTomBar} Bar`;
  inputPressionAKPa.value = `${convertToKPa} Kpa`;
});

inputs.forEach((input) => {
  input.addEventListener("click", () => (input.value = ""));
});

sensorMapBar.addEventListener("change", () => {
  let value = sensorMapBar.value;
  let valuemBar = value * unidadesMedida[2][0];
  let valueKPa = value * unidadesMedida[2][1];
  sensorMapBar.value = `${valuemBar} mBar`;
  sensorMapPa.value = `${valueKPa} KPa`;
});

sensorMapPa.addEventListener("change", () => {
  let value = sensorMapPa.value;
  let valuemBar = value * unidadesMedida[3][0];
  let valueKPa = value * unidadesMedida[3][1];
  sensorMapBar.value = `${valuemBar} mBar`;
  sensorMapPa.value = `${valueKPa} KPa`;
});

sensorMafBar.addEventListener("change", () => {
  let value = sensorMafBar.value;
  let valuemBar = value * unidadesMedida[2][0];
  let valueKPa = value * unidadesMedida[2][1];
  sensorMafBar.value = `${valuemBar} mBar`;
  sensorMafPa.value = `${valueKPa} KPa`;
});
sensorMafPa.addEventListener("change", () => {
  let value = sensorMafPa.value;
  let valuemBar = value * unidadesMedida[3][0];
  let valueKPa = value * unidadesMedida[3][1];
  sensorMafBar.value = `${valuemBar} mBar`;
  sensorMafPa.value = `${valueKPa} KPa`;
});

const btnEdit = document.querySelector("#buttonEdit");
const btnCheck = document.querySelector("#buttonCheck");

const confirmEdit = () => {};

const deleteTable = (event) => {
  event.target.closest("#divLine").remove();
};

addTable.addEventListener("click", () => {
  const tableQnt = document.querySelector("#tableQnt");
  const tableDesc = document.querySelector("#tableDesc");
  const tableValUni = document.querySelector("#tableValUni");
  const divLine = document.querySelector("#divLine");
  const divTable = document.querySelector("#table");

  newDiv = divLine.cloneNode(true);
  newDiv.children[0].textContent = tableQnt.value;
  newDiv.children[1].textContent = tableDesc.value;
  newDiv.children[2].textContent = tableValUni.value;
  newDiv.children[3].textContent = tableQnt.value * tableValUni.value;
  newDiv.classList.toggle("hidden");
  divTable.appendChild(newDiv);
  tableQnt.value = "";
  tableDesc.value = "";
  tableValUni.value = "";
  sumValuesInput();
});

const sumValuesInput = () => {
  const valuesToSum = document.querySelectorAll(".valueToSum");
  const divTotal = document.querySelector("#divTotal");
  let sum = 0;

  valuesToSum.forEach((div) => {
    sum += Number(div.textContent);
  });
  divTotal.classList.remove("hidden");
  divTotal.children[2].textContent = sum;
};
const editTable = (event) => {
  const divs = Array.from(event.target.closest("#divLine").children);
  divs.forEach((div, i) => {
    let valorDiv = div.textContent;
    let newInput = document.createElement("input");
    newInput.classList.add("min-w-0", "w-full", "text-center");
    newInput.value = valorDiv;
    if (i < 3) {
      div.innerHTML = "";
      div.appendChild(newInput);
    }
  });
};
