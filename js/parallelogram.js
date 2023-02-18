    // 1. event listener add in parallelogram calculate button

document.getElementById('parallelogram-btn').addEventListener('click', function(){

    // 2. increase the global variable value

    count = count + 1;

    // 3. call the textElement function and get the element value of the function 

    const parallelogramBase = textElement('parallelogram-base');
    const parallelogramHeight = textElement('parallelogram-height');

    // 4. calculate parallelogram area

    const area = parallelogramBase * parallelogramHeight;

    // 5. get our parallelogram element text

    const title = document.getElementById('parallelogram-title').innerText;

    //  6. call display data function

    data(title,area);

   
})