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

// When button clicked, prompt for password criteria

// User select password criteria

// Prompt for passwrod length, 8-128 characters

// Prompt character types, Upper/lower case letters, numbers, symbols

// Input valid when at least one character type selected

// When all prompts answered, password is generated that meets users selected criteria

// Once password generated, is displayed as alert or written to the page