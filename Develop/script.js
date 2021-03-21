// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare Characters Arrays in global Memory
const lowerCaseArray = [
"a", 
"b", 
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y", 
"z"
];

const upperCaseArray = [
"A", 
"B", 
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"
];

const numericArray = [
"0",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
];

const specialCharArray = [
"+", 
"-", 
"&&", 
"||", 
"!", 
"(", 
")", 
"{", 
"}", 
"[", 
"]", 
"^",
"~", 
"*", 
"?", 
":",
];

let isLowerCase;
let isUpperCase;
let isNumericChar;
let isSpecialChar;

//Generate Password 
function generatePassword() {
  let passwordLength = prompt("Whats is the length of your password?");
  console.log(passwordLength);

  let passwordLengthNumber = parseInt(passwordLength, 10)
  console.log(passwordLengthNumber)

  if (passwordLength > 8 && passwordLength < 128) {
    console.log("Hurray");
  }
  else
    alert("Password needs to be between 8 and 128!");

  // Create a variable to store Password
  var password = "hello";

  // Return Password
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button  
generateBtn.addEventListener("click", writePassword);
