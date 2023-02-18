// 1. event listener add in rectangle calculate button

document.getElementById('rectangle-btn').addEventListener('click', function(){

    // 2. increase the global variable value

    count = count + 1;

    // 3. call the inputFiledValue function and get the return input value of the function 

    const widthRectangle = inputFiledValue('rectangle-width');
    const lengthRectangle = inputFiledValue('rectangle length');

    // 4. calculate rectangle area

    const area = widthRectangle * lengthRectangle;

    // 5. get our rectangle element text

    const title = document.getElementById('rectangle-title').innerText;

    //  6. call display data function

    data(title,area);

})