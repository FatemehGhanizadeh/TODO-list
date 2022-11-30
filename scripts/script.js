// SELECT FORM TAG
let myForm = document.querySelector('#inputForm');
// let inputText = document.querySelector('#inputText');
let Number = 0;

// if approved; The entry is added to the list

myForm.addEventListener('submit' , function(){

let inputText = document.querySelector('#inputText');

if(inputText.value!='')
{
    let listItem = document.createElement('li');
    listItem.innerHTML=inputText.value;
    let toDoList = document.querySelector('#toDoList');
    toDoList.appendChild(listItem);
    inputText.value = '';
    
    
    // Increase toatalNumber
    Number++;

    let toatalNumber = document.querySelector('#toatal');
    toatalNumber.innerHTML = 'toatal :' + Number ; }

    else
    {
        alert('type something...');
    }
    

});

