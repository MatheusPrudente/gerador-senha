const array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
               "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z",
               "1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","&","*","(",")","_","-",".",",",";",":","[","]","}","{"];

window.addEventListener("load", function(event) {
  getPassword();
});

function shuffle(array) {
  let m = array.length;
  let t;
  let i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function getPassword() {
  shuffle(array);
  let length =  document.querySelector("#passwordLength").value;
  let password = "";
  document.querySelector("#passwordLabel").innerHTML = "Password length : " + length;

  while (length) {
    password += array[getRandom(array.length)];
    length--;
  }

  document.getElementById("password").innerHTML = password;
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}


function copyPassword() {
  let copyText = document.getElementById("password");

  navigator.clipboard.writeText(copyText.textContent);
  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.textContent;
}

function showTooltip() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
