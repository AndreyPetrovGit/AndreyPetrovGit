var nameList = [];
for (var i = 0; i < 5; ++i) {
  var newName = prompt("Enter new name:");
  if (newName === null) {
    i--;
    alert("Ты че, думал меня обмануть? Пробуй снова!");
  } else {
    nameList.push(newName);
  }
}
var yourName = prompt("Enter your name: ");

function nameSearch(name) {
  for (var i = 0; i < nameList.length; ++i) {
    if (nameList[i] === name) {
     return "Your name: " + nameList[i]
    }
  }
  return false;
}
alert(nameSearch(yourName));