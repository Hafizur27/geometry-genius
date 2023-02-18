
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
    td.innerText ='Convert to m';
    td.style.backgroundColor ='rgb(0, 128, 255)'
    td.style.padding ='7px 12px'
    td.style.borderRadius ='10px'
    td.style.color = 'white'
    tr.innerHTML =`
    <td>${count}</td>
    <td>${parallelogramTitle}</td>
    <td>${parallelogramArea}</td>
    
    `;
    calculator.appendChild(tr).appendChild(td);

   
})