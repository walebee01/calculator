console.log('Hello world!')
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
        console.log('Operator key!')
    )
    if (action === 'decimal')(
        console.log('decimal key')
    )
    if (action === 'delete')(
        console.log('delete key')
    )
    if (action === 'clear')(
        console.log('clear')
    )
    if (action === 'calculate')(
        console.log('calculate key')
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
display.textContent = 'on god';
console.log(900 - 42);
console.log(70000 * 600 / 12);
console.log(70000 * 12);