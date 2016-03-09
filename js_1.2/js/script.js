
var nameList=[];
for(var i=0;i<5;++i){
var newName=prompt("Enter new name:");
nameList.push(newName);
}

var yourName=prompt("Enter your name:");
var flag=false;
for(var i in nameList){
	
	if(nameList[i]==yourName){
    alert("Your name:"+nameList[i]);
    flag=true;
	break;
	}
}
if(!flag){
	alert("Search error!");
}