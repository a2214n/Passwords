// Assignment code here
const getKey = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+{}|:<>?[]\,./-="
}

// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");
 // Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;
function createPassword () {
  const upper = document.getElementById("upperCase").checked;
  const lower = document.getElementById("lowerCase").checked;
  const number = document.getElementById("number").checked;
  const symbol = document.getElementById("symbol").checked;
  if (upper + lower + number + symbol === 0) {
    alert("Please check at least one box");
    return;
  }
  const length = document.getElementById("length");
  let password = "";
  while (length.value > password.length) {
    let keyToAdd = getKey [Math.floor(Math.random() * getKey.length)];
    let isChecked = document.getElementById(keyToAdd.name).checked;
    if(isChecked) {
      password += keyToAdd ();
    }
  }
  cardBody.innerHTML = password;
}

function copyPassword () {
  const password = document.getElementById("generator").innerText;
  if (!password) {return;}
  textarea.value=password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
}



// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
