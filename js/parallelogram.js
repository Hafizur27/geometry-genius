// function textElementValue(elementId){
//     const elementValue = document.getElementById(elementId);
//     const elementValueString = elementValue.innerText;
//     const element = parseFloat(elementValueString);
//     return element;
    
// }
function textElement(elementId){
    const elementValue = document.getElementById(elementId);
    const elementStringValue = elementValue.innerText;
    const element = parseInt(elementStringValue);
    return element;
}
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    count = count + 1;

    const parallelogramBase = textElement('parallelogram-base')
    const parallelogramHeight = textElement('parallelogram-height')

    const parallelogramArea = parallelogramBase * parallelogramHeight;

    const parallelogramTitle = document.getElementById('parallelogram-title').innerText;
    const calculator = document.getElementById('calculator');
    const tr = document.createElement('tr');
    const td= document.createElement('button');
    td.innerText ='parallelogram ';
    td.style.backgroundColor ='blue'
    td.style.padding ='8px 30px'
    td.style.borderRadius ='10px'
    td.style.color = 'white'
    tr.innerHTML =`
    <td>${count}</td>
    <td>${parallelogramTitle}</td>
    <td>${parallelogramArea}</td>
    
    `;
    calculator.appendChild(tr).appendChild(td);

   
})