document.getElementById('pentagon-btn').addEventListener('click', function(){
    count = count + 1;
    
    const pentagonPerimeter = textElement('pentagon-perimeter')
    const pentagonBase = textElement('pentagon-base')
    
    const pentagonArea = 0.5 * pentagonPerimeter * pentagonBase;
   
    const pentagonTitle = document.getElementById('pentagon-title').innerText;
    const calculator = document.getElementById('calculator');
    const tr = document.createElement('tr');
    const td= document.createElement('button');
    td.innerText ='pentagon ';
    td.style.backgroundColor ='blue'
    td.style.padding ='8px 30px'
    td.style.borderRadius ='10px'
    td.style.color = 'white'
    tr.innerHTML =`
    <td>${count}</td>
    <td>${pentagonTitle}</td>
    <td>${pentagonArea}</td>
    
    `;
    calculator.appendChild(tr).appendChild(td);

   
})