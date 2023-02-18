// 1. global variable declare

let count = 0 ;

// 2. event listener add for going our calculation site

document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'question.html';
})

// 3. declare this function for get input value and check validation condition

function inputFiledValue(inputId){
    const inputValue = document.getElementById(inputId);
    const inputValueString = inputValue.value;
    const input = parseFloat(inputValueString);
    inputValue.value = '';
    if(input < 0 || input % 2 !==0 || input === '' ){
        alert('Please input valid number');
    }
    return input;
    
}

// 4. declare this function for get element value 

function textElement(elementId){
    const elementValue = document.getElementById(elementId);
    const elementStringValue = elementValue.innerText;
    const element = parseInt(elementStringValue);
    return element;
}

// 5. declare this function for put our calculate value, add new element and append data in  element 

function data(title,area){
    const calculator = document.getElementById('calculator');
    const tr = document.createElement('tr');
    const td= document.createElement('button');
    td.innerText ='Convert to m';
    td.style.backgroundColor ='rgb(0, 128, 255)'
    td.style.padding ='7px 12px'
    td.style.borderRadius ='10px'
    td.style.color = 'white'
    tr.innerHTML =`
    <td>${count}</td>
    <td>${title}</td>
    <td>${area}</td>
    
    `;
    calculator.appendChild(tr).appendChild(td);
}