const array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
			   "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z",
			   "1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","&","*","(",")","_","-",".",",",";",":","[","]","}","{"];

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
  let m = 5;
  let password = "";
  while (m) {
    password += array[getRandom(array.length)];
    m--;
  }
  console.log(password);
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}
