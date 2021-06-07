let enterNumberText = 'Введите первый операнд (число):' ;
let firstNumber = null;
do {
    firstNumber = Number( prompt( enterNumberText ) );
    enterNumberText = 'Вы ввели недопустимый первый операнд! Повторите попытку: ' ;
} while (typeof firstNumber === 'Number') ;

enterNumberText = 'Введите второй операнд (число):' ;
let secondNumber = null ;
do {
    secondNumber = Number( prompt( enterNumberText ) );
    enterNumberText = 'Вы ввели недопустимый второй операнд! Повторите попытку: ' ;
} while (typeof secondNumber === 'Number') ;

enterNumberText = 'Введите знак операции:' ;
let act = null ;
do {
    act = prompt( enterNumberText );
    enterNumberText = 'Вы ввели недопустимый знак операции! Повторите попытку: ' ;
} while ( act !== '+' && act !== '-' && act !== '*' && act !==  '/' ) ;

let result;
switch (act) {
    case '+': result = firstNumber+secondNumber;
    break;
    case '-': result = firstNumber-secondNumber;
    break;
    case '*': result = firstNumber*secondNumber;
    break;
    case '/': result = firstNumber/secondNumber;
    break;
}

alert( `Результат операции: ${firstNumber}${act}${secondNumber}=${result}` );

//------------------------------------------------------------------------------------------------

/*let firstNumber = Number( prompt('Введите первый операнд(число): ') );
while(!firstNumber) {
    firstNumber = Number( prompt( 'Вы ввели недопустимый операнд(число), повторите попытку:' ) );
}

let secondNumber = Number( prompt('Введите второй операнд(число):') );
while(!secondNumber) {
    secondNumber = Number( prompt( 'Вы ввели недопустимый операнд(число), повторите попытку:' ) );
}

let act = prompt('Введите знак операции:');
while (act !== '+' && act !== '-' && act !== '*' && act !==  '/') {
    act = prompt('Вы ввели недопустимый знак операции, повторите попытку:');
}

let result;
switch (act) {
    case '+': result = firstNumber+secondNumber;
    break;
    case '-': result = firstNumber-secondNumber;
    break;
    case '*': result = firstNumber*secondNumber;
    break;
    case '/': result = firstNumber/secondNumber;
    break;
}

alert( `Результат операции: ${firstNumber}${act}${secondNumber}=${result}` ); */