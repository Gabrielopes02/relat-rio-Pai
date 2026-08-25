const addTable = document.querySelector("#adicionar");
const saveInPdf = document.querySelector("#saveInPdf");
addTable.addEventListener("click", () => {
  const tableQnt = document.querySelector("#tableQnt");
  const tableDesc = document.querySelector("#tableDesc");
  const tableValUni = document.querySelector("#tableValUni");
  const tableTot = document.querySelector("#tableTot");

  const divList = document.querySelector("#divList");

  const newDiv = document.createElement("div");

  newDiv.innerHTML = `<div class="flex p-1 w-full gap-2">
          <div class=" w-full max-w-1/10 flex break-all">${tableQnt.value}</div>
          <div class="w-full flex justify-center wrap text-justify break-all">${tableDesc.value}</div>
          <div class="w-2/10 text-center">${tableValUni.value}</div>
          <div class="w-2/10 flex justify-center">${tableTot.value}</div>
        </div>
        <div id="divList">`;

  newDiv.classList.add("border");
  divList.append(newDiv);

  tableQnt.value = "";
  tableDesc.value = "";
  tableValUni.value = "";
  tableTot.value = "";

  console.log(tableQnt, tableDesc, tableValUni, tableTot);
});
saveInPdf.addEventListener("click", () => {
  window.print();
});
