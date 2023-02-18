    // 1. event listener add in triangle calculate button

document.getElementById('triangle-btn').addEventListener('click', function(){

    // 2. increase the global variable value

    count = count + 1;

    // 3. call the inputFiledValue function and get the return input value of the function 

     const baseTriangle = inputFiledValue('triangle-base');
     const heightTriangle = inputFiledValue('triangle-height');

    // 4. calculate triangle area

     const area = .5 * baseTriangle * heightTriangle;

    // 5. get our triangle element text

     const title = document.getElementById('triangle-title').innerText;

    //  6. call display data function
    
     data(title,area);

 
 
 })