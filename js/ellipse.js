// 1. event listener add in ellipse calculate button

document.getElementById('ellipse-btn').addEventListener('click', function(){

    // 2. increase the global variable value

    count = count + 1;

    // 3. call the textElement function and get the element value of the function 

    const ellipseMajorA = textElement('ellipse-major');
    const ellipseMinorB = textElement('ellipse-minor');

    // 4. calculate ellipse area
    
    const ellipseArea = 3.14 * ellipseMajorA * ellipseMinorB;
    const  area = parseFloat(ellipseArea.toFixed(2));

    // 5. get our ellipse element text
   
    const title = document.getElementById('ellipse-title').innerText;

    //  6. call display data function

    data(title,area);

   
})