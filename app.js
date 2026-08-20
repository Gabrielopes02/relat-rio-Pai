const addTable = document.querySelector("#adicionar");
const saveInPdf =document.querySelector('#saveInPdf')
addTable.addEventListener("click", () => {
  const tableQnt = document.querySelector("#tableQnt");
  const tableDesc = document.querySelector("#tableDesc");
  const tableValUni = document.querySelector("#tableValUni");
  const tableTot = document.querySelector("#tableTot");
  const ul = document.querySelector("#ulList");

  const newLi = document.createElement("li");
  
  newLi.innerHTML = `
          <div class="flex flex-wrap" >
          <div class="w-1/10 flex justify-center items-center">${tableQnt.value}</div>
          <div class="w-7/10 text-justify p-5 flex justify-center items center "><p>${tableDesc.value}</p></div>
          <div class="w-1/10 flex justify-center items-center">${tableValUni.value}</div>
          <div class="w-1/10 flex justify-center items-center">${tableTot.value}</div>
          </div>`;

  
  newLi.classList.add('border')
  ul.append(newLi);

  tableQnt.value = "";
  tableDesc.value = "";
  tableValUni.value = "";
  tableTot.value = "";

  console.log(tableQnt, tableDesc, tableValUni, tableTot);
});
saveInPdf.addEventListener('click', () => {
  
  window.print()
})