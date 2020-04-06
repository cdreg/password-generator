// Assignment code here

//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('result');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

//password gen functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const Symbols = '!@#$%^&*(){}[]_+-=/.';
  return Symbols[Math.floor(Math.random() * Symbols.length)];
}
console.log(getRandomSymbol());

// Get references to the #generate element
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//create for loop to choose password characters



//generate password function
function generatePassword(lower, upper, number, symbol, length) {
  // password var
  //filter unchecked types
  //for loop
  //add final password to pw var and return

  let generatedPassword = '';

  const typesCount = lower + upper + number + symbol;

  console.log('typesCount: ', typesCount);

  const typesArr = [{ lower }, { upper }, { number}, {symbol }].filter
  (
    item => Object.values(item)[0]
  );

  console.log('typesArr: ', typesArr);

  if(typesCount === 0) {
    return '';
  }

  for(let i = 0; i < length; i += typesCount){
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];

      generatePassword += randomFunc[funcName]();
    });
  }
  console.log(generatedPassword);
}
// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  console.log(length);
  console.log(hasLower, hasUpper, hasNumber, hasSymbol);

  //resultEl.getElementById'password' = generatePassword(
    hasLower,
    hasUpper,
    hasNumber, 
    hasSymbol, 
    length
  ;
});

//copy pass to clipboard
clipboardEl.addEventListener('click', () => {
  const passwordText = document.createElement('passwordText');
  const password = resultEl.passwordText;

  if(password) {
    return;
  }
  passwordText.value = password;
  document.body.appendChild(passwordText);
  passwordText.select();
  document.execCommand('copy');
  passwordText.remove();
  alert('Copied password to clipboard!');
});  
