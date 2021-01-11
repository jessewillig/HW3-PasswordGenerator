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

// Ask password length w/ while loop including alert
while (passwordLength > 8 && passwordLength < 128) {
  prompt("Please select password length greater than 8 and less than 128 characters.")
}

// Ask if user wants to use lowercase letters
  // Add or exclude lowercase letters w/ if/else
  // Acceptable character push

// Ask if user wants to use uppercase letters
  // Add or exclude uppercase letters w/ if/else
  // Acceptable character push

// Ask if user wants to use numbers letters
  // Add or exclude numbers letters w/ if/else
  // Acceptable character push

// Ask if user wants to use symbols letters
  // Add or exclude symbols letters w/ if/else
  // Acceptable character push

// Edge case to prompt if user does not select 1 character type

// For loop to random select ok characters

// Array concatenate. Create a string from array
}