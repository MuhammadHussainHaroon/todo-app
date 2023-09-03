

const input = document.querySelector('input')
const ol = document.querySelector('ol')
const array = []
function addtodo(event) {
  event.preventDefault()
  array.push(input.value);
  ol.innerHTML = ''
        for (let i = 0; i < array.length; i++){
          ol.innerHTML +=`<li> ${array[i]} </li> 
          <button onclick="deletes(${i})">delete</button> 
          <button onclick="edit(${i})">edit</button>` 
          input.value = ''
     }
}
function deletes(index) {
let newarr = array.splice(index , 1);
ol.innerHTML = ''
for (let i = 0; i < array.length; i++){
  ol.innerHTML +=`<li> ${array[i]} </li> 
  <button onclick="deletes(${i})">delete</button> 
  <button onclick="edit(${i})">edit</button>` 
  input.value = ''
}

}
function edit(index) {
  let uservalue = prompt("enter your todo")
  let newarray = array.splice(index , 1 , uservalue)
  if(uservalue==""){
    alert("plz enter todo")
  }
  else{
    let newarray = array.splice(index , 1 , uservalue)
  }
  ol.innerHTML = ''
  for (let i = 0; i < array.length; i++){
    ol.innerHTML +=`<li> ${array[i]} </li> 
    <button onclick="deletes(${i})">delete</button> 
    <button onclick="edit(${i})">edit</button>` 
    input.value = ''
  }
  console.log();

}



  















