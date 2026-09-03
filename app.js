/*
to do list

Map separado [check]
Bobina minúscula [check]
Inverter input com total
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

addTable.addEventListener("click", () => {
  const tableQnt = document.querySelector("#tableQnt");
  const tableDesc = document.querySelector("#tableDesc");
  const tableValUni = document.querySelector("#tableValUni");
  const tableTot = document.querySelector("#tableTot");

  const divList = document.querySelector("#divList");

  const newDiv = document.createElement("div");
  let total = 0;
  const table = document.querySelector("#table");
  divTotalExist = document.querySelector("#divTotal");
  newDiv.innerHTML = `<div class="flex p-1 w-full gap-2">
          <div class=" w-full max-w-1/10 flex break-all nowrap justify-center">${tableQnt.value}</div>
          <div class="w-full flex justify-center wrap text-justify break-all">${tableDesc.value}</div>
          <div class="w-2/10 text-center">R$ ${tableValUni.value == "" ? "00,00" : tableValUni.value}</div>
          <div class="w-2/10 flex justify-center">R$ ${tableQnt.value * tableValUni.value == 0 ? "00,00" : tableQnt.value * tableValUni.value}</div>
         <div class="w-1/10">
            <i
              class="fa-regular fa-pen-to-square hover:bg-gray-400 rounded text-lg ml-1 text-gray-200"
              onclick="editTable(event)"></i>
            <i
              class="fa-regular fa-trash-can text-lg text-red-400 hover:bg-gray-400 rounded"
              onclick="deleteTable(event)"></i>
          </div>
          </div>
         `;

  newDiv.classList.add("border");
  divList.append(newDiv);

  if (divTotalExist) {
    table.appendChild(divTotalExist);
  } else {
    let divTotal = document.createElement("div");
    divTotal.innerHTML = `<div class="flex w-full mt-1">
    
          <div class=" w-full max-w-1/10 flex break-all"></div>
          <div class="w-full flex justify-center wrap text-justify break-all"></div>
          <div class="w-2/10 text-center border border-r-0">Total</div>
          <div class="w-2/10 flex justify-center border border-l-0">R$ ${total}</div>
        </div>`;

    divTotal.setAttribute("id", "divTotal");
    table.append(divTotal);
  }
  arrayTotal.push(tableQnt.value * tableValUni.value);

  tableQnt.value = "";
  tableDesc.value = "";
  tableValUni.value = "";
  tableTot.value = "";
  arrayTotal.forEach((u) => {
    total += u;
  });
  divTotal.children[0].children[3].innerHTML = `R$${total}`;
});
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

const editTable = (event) => {
  let divEdit = Array.from(
    event.currentTarget.parentElement.parentElement.children,
  );

  /*
  <div class="flex p-1 w-full gap-2">
          <div class=" w-full max-w-1/10 flex break-all nowrap">${tableQnt.value}</div>
          <div class="w-full flex justify-center wrap text-justify break-all">${tableDesc.value}</div>
          <div class="w-2/10 text-center">R$ ${tableValUni.value == "" ? "00,00" : tableValUni.value}</div>
          <div class="w-2/10 flex justify-center">R$ ${tableQnt.value * tableValUni.value == 0 ? "00,00" : tableQnt.value * tableValUni.value}</div>
         <div class="w-1/10">
            <i
              class="fa-regular fa-pen-to-square text-white hover:bg-gray-400 rounded text-lg ml-1"
              onclick="editTable(event)"></i>
            <i
              class="fa-regular fa-trash-can text-lg text-red-400 hover:bg-gray-400 rounded"
              onclick="deleteTable(event)"></i>
          </div>
          </div>
  */
  divEdit.forEach((div, i) => {
    if (i == divEdit.length - 1) {
      div.innerHTML = `<i
              class="fa-solid fa-check text-green-400 hover:bg-gray-400 rounded text-lg ml-1 "
              onclick="confirmEdit(event)"></i><i
              class="fa-regular fa-trash-can text-lg text-red-400 hover:bg-gray-400 rounded"
              onclick="deleteTable(event)"></i>`;
      div.setAttribute("class", "flex  items-center w-1/10 gap-1");
    } else {
      let valueDiv0 = div.textContent;
      div.innerHTML = `<input type="text" value = "${valueDiv0} " class = "text-center w-full inputsTable "/>`;
    }
  });

  divEdit[0].setAttribute(
    "class",
    "w-full max-w-1/10 flex break-all nowrap bg-gray-500 animate-pulse flex justify-center rounded-lg",
  );
  divEdit[1].setAttribute(
    "class",
    "w-full flex justify-center wrap text-justify break-all",
  );
  divEdit[2].setAttribute("class", "w-2/10 text-center");
  divEdit[3].setAttribute("class", "w-2/10 flex justify-center");

  const inputsTable = document.querySelectorAll(".inputsTable");
  inputsTable.forEach((input) => {
    input.addEventListener("click", () => (input.value = ""));
  });
};
const deleteTable = () => {
  let divEdit = event.currentTarget.parentElement.parentElement.parentElement;
  divEdit.remove();
};
const confirmEdit = (event) => {
  let divEdit = Array.from(
    event.currentTarget.parentElement.parentElement.children,
  );
  divEdit.forEach((div, i) => {
    if (i == divEdit.length - 1) {
      div.innerHTML = `<i
              class="fa-regular fa-pen-to-square text-white hover:bg-gray-400 rounded text-lg ml-1 print:hidden"
              onclick="editTable(event)"></i><i
              class="fa-regular fa-trash-can text-lg text-red-400 hover:bg-gray-400 rounded print:hidden"
              onclick="deleteTable(event)"></i>`;
    } else {
      let inputs = div.children[0].value;
      console.log(inputs);
      div.innerHTML = "";
      let newDiv = document.createElement("div");
      newDiv.innerHTML = `${inputs}`;
      newDiv.setAttribute("class", "flex rounded-xl ");
      div.appendChild(newDiv);
    }
  });
};
