const addTable = document.querySelector('#adicionar')

 
addTable.addEventListener('click',()=>{
  const tableQnt = document.querySelector('#tableQnt')
const tableDesc = document.querySelector('#tableDesc')
const tableValUni = document.querySelector('#tableValUni')
const tableTot = document.querySelector('#tableTot')
  const ul = document.querySelector('#ulList')
  
  const newLi = document.createElement('li')
  
  newLi.innerHTML = `<div class="flex justify-between mx-2">
          
        <div class="w-1/10 bg-green-100">${tableQnt.value}</div>
          <div class="break-words">${tableDesc.value}</div>
          <div class="w-1/10 bg-green-100">${tableValUni.value}</div>
          <div class="w-1/10">${tableTot.value}</div>
        </div>`
  
  ul.append(newLi)
  
  tableQnt.value=""
  tableDesc.value=''
  tableValUni.value=''
  tableTot.value=''
  
  console.log(tableQnt,tableDesc,tableValUni,tableTot)
})