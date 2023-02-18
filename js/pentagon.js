// 1. event listener add in pentagon calculate button

document.getElementById('pentagon-btn').addEventListener('click', function(){

    // 2. increase the global variable value

    count = count + 1;

    // 3. call the textElement function and get the element value of the function 
    
    const pentagonPerimeter = textElement('pentagon-perimeter');
    const pentagonBase = textElement('pentagon-base');

    // 4. calculate pentagon area
    
    const area = 0.5 * pentagonPerimeter * pentagonBase;

    // 5. get our pentagon element text
   
    const title = document.getElementById('pentagon-title').innerText;

    //  6. call display data function

    data(title,area);

   
})