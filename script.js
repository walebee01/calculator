
const display = document.querySelector('.display');
const controlKeys = document.querySelector('.control-keys').children;

let allSymbols = ['+', '-', '/', 'x', 'C', '='];

let firstNum = '';
let secondNum = '';
let operator = '';
let result ='';

const calculate = () => {
     firstNum = parseFloat(firstNum);
     secondNum = parseFloat(secondNum);

    if (operator === '+') result = firstNum + secondNum
    if (operator === '-') result = firstNum - secondNum
    if (operator === '/') result = firstNum / secondNum
    if (operator === 'x') result = firstNum * secondNum

    display.innerText = result
    firstNum = result
    secondNum = ''
}

for (let key of controlKeys){
    key.addEventListener('click', ()=>{
        const { innerText: keysValue } = key
        const btnValueSymbol =allSymbols.includes(keysValue)

if(keysValue == 'del'){
   return display.innerText =  display.innerText.toString().slice(0,-1)
}

if(!secondNum && keysValue === '=') return null

if(keysValue == 'AC'){
    firstNum = ''
    secondNum =''
    symbol = ''
    return display.innerText=''
}


if (firstNum && btnValueSymbol){
    secondNum && calculate()
    operator = keysValue
}
else if (!operator) firstNum += keysValue
else if (operator) secondNum += keysValue

      if (keysValue !== '=' ) { display.innerText += keysValue;
    })
}
