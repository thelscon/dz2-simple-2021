let enterNumberText = 'Введите первый операнд (число):' ;
let firstNumber ;
do {
    firstNumber = prompt( enterNumberText ).trim() ;
    enterNumberText = 'Недопустимый первый операнд! Повторите попытку: ' ;
} while (firstNumber === '' || Number.isNaN(parseFloat(firstNumber))) ;
firstNumber = parseFloat(firstNumber) ;

enterNumberText = 'Введите второй операнд (число):' ;
let secondNumber ;
do {
    secondNumber = prompt( enterNumberText ).trim() ;
    enterNumberText = 'Недопустимый второй операнд! Повторите попытку: ' ;
} while (secondNumber === '' || Number.isNaN(parseFloat(secondNumber))) ;
secondNumber = parseFloat(secondNumber) ;

enterNumberText = 'Введите знак операции:' ;
let act ;
do {
    act = prompt( enterNumberText );
    enterNumberText = 'Вы ввели недопустимый знак операции! Повторите попытку: ' ;
} while ( act !== '+' && act !== '-' && act !== '*' && act !==  '/' ) ;

let result ;
switch (act) {
    case '+': 
        result = isFinite(firstNumber + secondNumber) ? `Результат операции: ${firstNumber}${act}${secondNumber}=${firstNumber+secondNumber}` : `Операция "${firstNumber}${act}${secondNumber}" невозможна!` ;
    break;
    case '-': 
        result = isFinite(firstNumber - secondNumber) ? `Результат операции: ${firstNumber}${act}${secondNumber}=${firstNumber-secondNumber}` : `Операция "${firstNumber}${act}${secondNumber}" невозможна!` ;
    break;
    case '*': 
        result = isFinite(firstNumber * secondNumber) ? `Результат операции: ${firstNumber}${act}${secondNumber}=${firstNumber*secondNumber}` : `Операция "${firstNumber}${act}${secondNumber}" невозможна!` ;
    break;
    case '/': 
        result = isFinite(firstNumber / secondNumber) ? `Результат операции: ${firstNumber}${act}${secondNumber}=${firstNumber/secondNumber}` : `Операция "${firstNumber}${act}${secondNumber}" невозможна!` ;
    break;
}

alert( result ) ;