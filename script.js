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

// Generate password function
function generatePassword() {
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "<", ">", "_", "-"];
  var passwordLength = 0;
  var okayChar = [];
  var userCriteria = [];
  var randomPassword = [];
  var generateBtn = document.querySelector("#generate");

  // Ask password length w/ while loop including alert
  while (passwordLength > 8 || passwordLength < 128) {
    passwordLength = prompt("Please select password length greater than 8 and less than 128 characters.");
    console.log(passwordLength);
  }

  // Ask if user wants to use lowercase letters
  var askLower = confirm("Do you want lower case letters?");

  // Add or exclude lowercase letters w/ if/else
  if (askLower === true) {
    // Acceptable character push
    okayChar = okayChar.concat(lowerCase)
    console.log("Lower case OK: " + true);
  } else {
    console.log("Lower case OK: " + false);
  }

  // Ask if user wants to use uppercase letters
  var askUpper = confirm("Do you want upper case letters?");

  // Add or exclude uppercase letters w/ if/else
  if (askUpper === true) {
    // Acceptable character push
    okayChar = okayChar.concat(upperCase)
    console.log("Upper case OK: " + true);
  } else {
    console.log("Upper case OK: " + false);
  }

  // Ask if user wants to use numbers
  var askNumber = confirm("Do you want numbers?");

  // Add or exclude numbers w/ if/else
  if (askNumber === true) {
    // Acceptable character push
    okayChar = okayChar.concat(numbers)
    console.log("Numbers OK: " + true);
  } else {
    console.log("Numbers OK: " + false);
  }

  // Ask if user wants to use symbols
  var askSymbols = confirm("Do you want symbols?");

  // Add or exclude symbols w/ if/else
  if (askSymbols === true) {
    // Acceptable character push
    okayChar = okayChar.concat(symbols)
    console.log("Symbols OK: " + true);
  } else {
    console.log("Symbols OK: " + false);
  }

  // Edge case to prompt if user does not select 1 character type
  if (askLower, askUpper, askNumber, askSymbols === false) {
    alert("You must chose one or more!")
  }
  console.log(okayChar);

  // For loop to random select ok characters
  for (var i = 0; i < passwordLength.length; i++) {
    randomPassword.push(okayChar[Math.floor(Math.random() * okayChar.length)]);
  }
  // Array concatenate. Create a string from array
  return randomPassword.join("")
}