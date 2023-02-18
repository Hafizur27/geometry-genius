document.getElementById('ellipse-btn').addEventListener('click', function(){
    count = count + 1;
    
    const ellipseMajorA = textElement('ellipse-major')
    const ellipseMinorB = textElement('ellipse-minor')
    
    const ellipseArea = 3.14 * ellipseMajorA * ellipseMinorB;
    const  area = parseFloat(ellipseArea.toFixed(2));
    
   
    const ellipseTitle = document.getElementById('ellipse-title').innerText;
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
    <td>${ellipseTitle}</td>
    <td>${area}</td>
    
    `;
    calculator.appendChild(tr).appendChild(td);

   
})