// 1. Write a JavaScript function to check if given string includes given symbol.

let testText = 'Andrii done task_1 for test for AQA Camp',
symbol = 'y';
let checkSymbol = (testStr, symbol) => {
    if(testText.includes(symbol)){
        console.log(`Text "${testText}" includes symbol "${symbol}"`);
    } else {
        console.log(`Symbol "${symbol}" is NOT defined in the text`);
    }
}
checkSymbol (testText, symbol);

// 2. Write a JavaScript function to check whether a string is blank or not (string with spaces should be also blank).

let givenStr = '  ';
let checkBlank = (str) => {
    if(str != null){
        if(str.length > 0 && str.trim() !== ''){
        console.log('String is NOT blank');
        } else {
        console.log('String is blank');
        }
    } else {
        console.log('String is NOT defined!');
    }
}
checkBlank(givenStr);

// 3. Write a JavaScript function to convert a string in abbreviated form. console.log
// (abbrev (“Name Surname")) – should be “N.S.” (should convert lower case names to upper)

const abbrevForm = (text) => {
    let abbrevSymdol = "";
    const arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
        abbrevSymdol = abbrevSymdol.concat(arr[i][0].toUpperCase(), ".");
    }
    return abbrevSymdol;
  };
  console.log(abbrevForm("Andrii done task_3 for test for AQA Camp"));

  // 4. Write a JavaScript function that accept two integers and display the larger.

const largeNumbet = (x, y) => x > y ? `The number ${x} is larger than ${y}` : `The numbet ${y} is larger than ${x}`;
console.log(largeNumbet(22, 33));

