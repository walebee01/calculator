{
const display = document.querySelector('#d-text');
const keys = document.querySelector('#keys');



keys.addEventListener('click', e => {
    if (e.target.matches('td')) {
        console.log('clicked numbers');
    }
    const key = e.target;
    const action = key.dataset.action;

    if (!action) {
        console.log('number key!')
    }

    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'divide' ||
        action === 'multiply'
    )(
        
    )
    if (action === 'decimal')(
       
    )
    if (action === 'delete')(
        
    )
    if (action === 'clear')(
       
    )
    if (action === 'calculate')(
        
    )
});





// Calculation function
const calculate = (n1, operator, n2) => {
    const firstNum = parseFloat(n1);
    const secondNum = parseFloat(n2)


    if (operator === 'add') {
        return firstNum + secondNum;
    } else if (operator === 'subtract') {
        return firstNum / secondNum;
    } else if (operator === 'divide') {
        return firstNum + secondNum;
    } else if (operator === 'multiply') {
        return firstNum * secondNum;
    }
}
display.textContent = 'calculate';
    
}
