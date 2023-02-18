
document.getElementById('rhombus-btn').addEventListener('click', function(){
    count = count + 1;

    const diagonalsFirst = textElement('rhombus-diagonals-first')
    const diagonalsSecond = textElement('rhombus-diagonals-second')

    const rhombusArea = 0.5 * diagonalsFirst * diagonalsSecond;

    const parallelogramTitle = document.getElementById('rhombus-title').innerText;
    const calculator = document.getElementById('calculator');
    const tr = document.createElement('tr');
    const td= document.createElement('button');
    td.innerText ='Rhombus ';
    td.style.backgroundColor ='blue'
    td.style.padding ='8px 30px'
    td.style.borderRadius ='10px'
    td.style.color = 'white'
    tr.innerHTML =`
    <td>${count}</td>
    <td>${parallelogramTitle}</td>
    <td>${rhombusArea}</td>
    
    `;
    calculator.appendChild(tr).appendChild(td);
})