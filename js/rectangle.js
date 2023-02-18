document.getElementById('rectangle-btn').addEventListener('click', function(){
    count = count + 1;

    const widthRectangle = inputFiledValue('rectangle-width');
    const lengthRectangle = inputFiledValue('rectangle length');

    const areaRectangle = widthRectangle * lengthRectangle;

    const titleRectangle = document.getElementById('rectangle-title').innerText;
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
    <td>${titleRectangle }</td>
    <td>${areaRectangle}</td>
    
    `;
    calculator.appendChild(tr).appendChild(td);

})