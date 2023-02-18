// 1. click event add for triangle button
// 2. declare function for input filed value
// 3. increase the count number
// 4. function call for triangle base filed
// 5. function call for triangle height field
// 6. calculate area for triangle
// 7. get element text by using innerText

function inputFiledValue(inputId){
    const inputValue = document.getElementById(inputId);
    const inputValueString = inputValue.value;
    const input = parseFloat(inputValueString);
    inputValue.value = '';
    if(typeof input !== 'number'|| input < 0 || input === 'string' ){
        alert('Please input valid number');
    }
    return input;
    
}
let count = 0 ;

document.getElementById('triangle-btn').addEventListener('click', function(){
    
   count = count + 1;

    const baseTriangle = inputFiledValue('triangle-base');
    const heightTriangle = inputFiledValue('triangle-height');

    const areaTriangle = .5 * baseTriangle * heightTriangle;

    const titleTriangle = document.getElementById('triangle-title').innerText;
    const calculator = document.getElementById('calculator');
    const tr = document.createElement('tr');
    const td= document.createElement('button');
    td.innerText ='Triangle ';
    td.style.backgroundColor ='blue'
    td.style.padding ='8px 30px'
    td.style.borderRadius ='10px'
    td.style.color = 'white'
    tr.innerHTML =`
    <td>${count}</td>
    <td>${titleTriangle}</td>
    <td>${areaTriangle}</td>
    
    `;
    calculator.appendChild(tr).appendChild(td);


})