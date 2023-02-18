    // 1. event listener add in rhombus calculate button

document.getElementById('rhombus-btn').addEventListener('click', function(){

    // 2. increase the global variable value

    count = count + 1;

    // 3. call the textElement function and get the element value of the function 

    const diagonalsFirst = textElement('rhombus-diagonals-first');
    const diagonalsSecond = textElement('rhombus-diagonals-second');

    // 4. calculate rhombus area

    const area = 0.5 * diagonalsFirst * diagonalsSecond;

    // 5. get our rhombus element text

    const title = document.getElementById('rhombus-title').innerText;

    //  6. call display data function

    data(title,area);
})