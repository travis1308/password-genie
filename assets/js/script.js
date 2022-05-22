const passWordStrings = {
   lowerCase: 'abcdefghijklmnopqrstuvwxyz',
   upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
   numbers: "0123456789",
   symbols: "!@#$%^&*()-_+=/\<>?|{}~",
};

var genPassword = function() {
   // Blank password string to start
   var passWordSet = "";

   // Choose a length for the password
   var length = window.prompt("Please enter a number between 8 and 128 characters.");
   if (length >= 8 || length <= 128) {
      window.alert("Your password will be " + length + " characters long.");
   }

   // Begin choose your character types
   var lowerCase = window.confirm("Would you like to use lowercase letters?");
   if (lowerCase) {
      passWordSet += passWordStrings.lowerCase;
   };

   var upperCase = window.confirm("Would you like to use uppercase letters?");
   if (upperCase) {
      passWordSet += passWordStrings.upperCase;
   };

   var symbols = window.confirm("Would you like to use symbols?");
   if (symbols) {
      passWordSet += passWordStrings.symbols;
   }

   var numbers = window.confirm("Would you like to use numbers?");
   if (numbers) {
      passWordSet += passWordStrings.numbers;
   }
   // End choose your character types

   // Merge and generate password
   var password = "";
   for (let i = 0; i < length; i++) {
      password += passWordSet[Math.floor(Math.random() * passWordSet.length)]
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