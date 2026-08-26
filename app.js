/*
to do list
colocar tabela pra fazer as contas

*/

const addTable = document.querySelector("#adicionar");
const saveInPdf = document.querySelector("#saveInPdf");

addTable.addEventListener("click", () => {
  const tableQnt = document.querySelector("#tableQnt");
  const tableDesc = document.querySelector("#tableDesc");
  const tableValUni = document.querySelector("#tableValUni");
  const tableTot = document.querySelector("#tableTot");

  const divList = document.querySelector("#divList");

  const newDiv = document.createElement("div");
  divTotalExist = document.querySelector("#divTotal");

  newDiv.innerHTML = `<div class="flex p-1 w-full gap-2">
          <div class=" w-full max-w-1/10 flex break-all">${tableQnt.value}</div>
          <div class="w-full flex justify-center wrap text-justify break-all">${tableDesc.value}</div>
          <div class="w-2/10 text-center">R$ ${tableValUni.value == "" ? "00,00" : tableValUni.value}</div>
          <div class="w-2/10 flex justify-center somaTot">R$ ${tableQnt.value * tableValUni.value == 0 ? "00,00" : tableQnt.value * tableValUni.value}</div>
        </div>`;

  newDiv.classList.add("border");
  divList.append(newDiv);

  if (divTotalExist) {
    divList.appendChild(divTotalExist);
  } else {
    let divTotal = document.createElement("div");
    divTotal.innerHTML = `<div class="flex p-1 w-full gap-2">
          <div class=" w-full max-w-1/10 flex break-all"></div>
          <div class="w-full flex justify-center wrap text-justify break-all"></div>
          <div class="w-2/10 text-center">Total</div>
          <div class="w-2/10 flex justify-center"></div>
        </div>`;
    divTotal.setAttribute("id", "divTotal");
    divList.append(divTotal);

    tableQnt.value = "";
    tableDesc.value = "";
    tableValUni.value = "";
    tableTot.value = "";
    divsTotalSoma = document.getElementsByClassName("somaTot");
    console.log(divsTotalSoma);
  }
});
saveInPdf.addEventListener("click", () => {
  window.print();
});

const inputPressionB = document.querySelector("#baixaBar");
const inputPressionBPa = document.querySelector("#baixaMPa");
const inputPressionA = document.querySelector("#altaBar");
const inputPressionAKPa = document.querySelector("#altaKPa");

let unidadesMedida = [
  [1, 100],
  [0.01, 1],
  [1, 10],
  [0.1, 1],
];

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
const sensorMapBar = document.querySelector("#sensorMapBar");
const sensorMapPa = document.querySelector("#sensorMapPa");
const inputs = [
  inputPressionA,
  inputPressionAKPa,
  inputPressionB,
  inputPressionBPa,
  sensorMapBar,
  sensorMapPa,
];
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
