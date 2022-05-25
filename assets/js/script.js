const passWordStrings = {
   lowerCase: 'abcdefghijklmnopqrstuvwxyz',
   upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
   numbers: "0123456789",
   symbols: "!@#$%^&*()-_+=/\<>?|{}~",
};

// Blank password string to start
var selections;

// Input variables
var lowerCase;
var upperCase;
var symbols;
var numbers;

 
var genPassword = function() {
      // Choose a length for the password
   length = parseInt(window.prompt("Please enter a number between 8 and 128 characters."));
   
   if (!length) {
      window.alert("You need to enter a value!");
      genPassword();
   } else if (length < 8 || length > 128) {
      length = parseInt(window.prompt("You must choose a number between 8 and 128 characters."));
      genPassword();
   } else {
   
      // Begin choose your character types
      var lowerCase = window.confirm("Would you like to use lowercase letters?");
      var upperCase = window.confirm("Would you like to use uppercase letters?");
      var symbols = window.confirm("Would you like to use symbols?");
      var numbers = window.confirm("Would you like to use numbers?");
   };

   if (!lowerCase && !upperCase && !symbols && !numbers) {
     window.alert("You must choose a criteria!");

   } else if (lowerCase && upperCase && symbols && numbers) {
      selections += passWordStrings.lowerCase;
      selections += passWordStrings.upperCase;
      selections += passWordStrings.symbols;
      selections += passWordStrings.numbers;

   // 3 options in password
   } else if (lowerCase && upperCase && symbols) {
      selections += passWordStrings.lowerCase;
      selections += passWordStrings.upperCase;
      selections += passWordStrings.symbols;

   } else if (lowerCase && upperCase && numbers) {
      selections += passWordStrings.lowerCase;
      selections += passWordStrings.upperCase;
      selections += passWordStrings.numbers;

   } else if (lowerCase && numbers && symbols) {
      selections += passWordStrings.lowerCase;
      selections += passWordStrings.symbols;
      selections += passWordStrings.numbers;

   } else if (upperCase && numbers && symbols) {
      selections += passWordStrings.upperCase;
      selections += passWordStrings.symbols;
      selections += passWordStrings.numbers;

   // 2 options in password
   } else if (lowerCase && upperCase) {
      selections += passWordStrings.lowerCase;
      selections += passWordStrings.upperCase;

   } else if (lowerCase && symbols) {
      selections += passWordStrings.lowerCase;
      selections += passWordStrings.symbols;

   } else if (lowerCase && numbers) {
      selections += passWordStrings.lowerCase;
      selections += passWordStrings.numbers;

   } else if (upperCase && symbols) {
      selections += passWordStrings.upperCase;
      selections += passWordStrings.symbols;

   } else if (upperCase && numbers) {
      selections += passWordStrings.upperCase;
      selections += passWordStrings.numbers;

   } else if (symbols && numbers) {
      selections += passWordStrings.symbols;
      selections += passWordStrings.numbers;

   // 1 option in password
   } else if (lowerCase) {
      selections += passWordStrings.lowerCase;

   } else if (upperCase) {
      selections += passWordStrings.upperCase;

   } else if (numbers) {
      selections += passWordStrings.numbers;

   } else if (symbols) {
      selections += passWordStrings.symbols;
   };
   // End choose your character types

   // Merge and generate password
   var password = "";
   for (let i = 0; i < length; i++) {
      password += selections[Math.floor(Math.random() * selections.length)]
   }
   return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
   var password = genPassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;
}