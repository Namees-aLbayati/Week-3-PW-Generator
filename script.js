// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  // create empty arrays for the prompt results and final pw

  var promptArray = [];
  var pwArray = [];

  // create arrays for all differnt types of characters
  var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

//get form input data and save to variable. checked returns true or false.

  var upperCase = document.querySelector('#uppercase').checked;
  var lowerCase = document.querySelector('#lowercase').checked;
  var numbers = document.querySelector('#numbers').checked;
  var specials = document.querySelector('#specials').checked;
  var amountChar = document.querySelector('#length').value;

  //validating length chosen in amountChar is between 8-128, prompt user again if not.
  console.log(upperCase);
  console.log(lowerCase);

  if (amountChar < 8 || amountChar > 128) {
  window.alert('Your choice was not between 8-128 characters. Please pick again');
  return "invalid length";
  }

  //validating that at least one character type was selected
  if (!upperCase && !lowerCase && !numbers && !specials) {
    alert("You need to pick at least one character type to use. Try again!");
  }

  //check if checkbox results are truthy/falsy(checked or not), concat array to promptArray if true.

  if (upperCase) {
    promptArray = promptArray.concat(upperArray);
  };
  if (lowerCase) {
    promptArray = promptArray.concat(lowerArray);
  };
  if (numbers) {
    promptArray = promptArray.concat(numArray);
  };
  if (specials) {
    promptArray = promptArray.concat(specialArray);
  }

  //console log prompt array. should contain all arrays that were selected with prompts.

  console.log(promptArray);

  //use a for loop and math.random to pick a random index of promptarray and push it to pwArray. Loop amount determined by user input on amountChar prompt.

  for (var i = 0; i < amountChar; i++) {
    pwArray.push (promptArray[Math.floor(Math.random() * promptArray.length)])
  };

  //use array.join method to convert array to string and return it
    console.log(pwArray);
  return pwArray.join("");
}

