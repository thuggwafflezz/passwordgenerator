// Assignment Code

//global variables
var generateBtn = document.querySelector("#generate");
const uppercaseValues = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const lowercaseValues = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const numbersValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbolsValues = ['`', '~', '!', '@', '#', '$', '%', '^']
let characterAmount;
let includeUpper;
let includeLower;
let includeNumbers;
let includeSymbols;
let tryAgain;
let passwordLength

function generatePassword(){
  let characterAmount = parseInt(window.prompt('enter a number between 8-128'));
  let passwordArray = [];

  if (characterAmount < 8) return alert('please choose a number between 8-128')
  if (characterAmount > 128) return alert('please choose a number between 8-128')
  else{
    if (!isNaN(characterAmount)){
      passwordLength = characterAmount
  
      let passChars = lowercaseValues
      console.log(passChars)
      includeLower = confirm('use lower?')
      if (includeLower) passChars = lowercaseValues
      console.log(passChars)
      includeUpper = confirm('use upper?')
      if (includeUpper) passChars = passChars.concat(uppercaseValues)
      console.log(passChars)
      includeNumbers = confirm('use Numbers?')
      if (includeNumbers) passChars = passChars.concat(numbersValues)
      console.log(passChars)
      includeSymbols = confirm('use Symbols?')
      if (includeSymbols) passChars = passChars.concat(symbolsValues)
      console.log(passChars)
  
      
      for(i = 0; i < passwordLength; i++){
        passwordArray.push(randoGen(passChars))
      }
      console.log(passwordArray)
      return passwordArray.join('')
  
    }else{
      alert('This is not a number between 8-128, please start over')
    }
  }

}
//random pick function
function randoGen(anyArray){
  let value = Math.floor(Math.random() * anyArray.length)
  returnedValue = anyArray[value]
  return returnedValue
}

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

