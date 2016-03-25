function HTML_MANAGER(name,NewClass,propertie_key_value){

    this.MyTag=document.querySelector(name);
    
    if(NewClass!==undefined  && NewClass!=='none'){
        this.MyTag.classList.add(NewClass);
    }
    if(propertie_key_value!==undefined  && propertie_key_value!=='none'){
        this.MyTag.style[propertie_key_value[0]]=propertie_key_value[1];
    }
    this.add_el= function(tag, parent_selector, position, NewClass, text_content,propertie_key_value){
        var new_element= document.createElement(tag);
          this.LastCreatedTag=new_element;
        var parent_tag= document.querySelector(parent_selector);
        if(NewClass!==undefined && NewClass!=='none') {
            new_element.classList.add(NewClass);
        }
        if(position!==undefined  && position!=='none'){
            if(position==='last')
            {
              parent_tag.appendChild(new_element);
            } else{

              parent_tag.insertBefore(new_element, parent_tag.children[position]);
            }
            if(text_content!==undefined && text_content!=='none'){
              new_element.innerHTML=text_content;
            }
        }
        if(propertie_key_value!==undefined && propertie_key_value!=='none'){
            this.MyTag.style[propertie_key_value[0]]=propertie_key_value[1];
        }
    }
    this.del_el=function(tag, parent_selector,position){
    	var _child=document.querySelectorAll(tag)[0];
      var parent=document.querySelectorAll(parent_selector);
      parent[position].removeChild(_child);
    }
  
 };

var testPage=new HTML_MANAGER('body','none');

function addEvent(element,event,handler){

	if(window.attachEvent){
		element.attachEvent('on'+event,handler);
	}
	else{
		element.addEventListener(event,handler);
	}	
}


var isActive=false;

var element= document.querySelector('form');

alert('isActive='+isActive);


function ChangeButtonState(){
	var statesText= ['START','PAUSE'];
	isActive=!isActive;
	testPage.del_el('button','form',0);
	testPage.add_el('button','form','last','none',statesText[isActive+0]);	
}

addEvent(element,"click",ChangeButtonState);


var minTime=6;
var _time={
	timeS : 0
};
var timerID;
function addtime(){
_time.timeS+=minTime;
console.log(_time.timeS);
}

var Counter=function(){

   
	if(isActive){
		timerID=setInterval(startTimer,minTime);
	}else
	if(timerID!==undefined){
		clearInterval(timerID);
	}
}
addEvent(element,"click",Counter);

var TimeRenderer=function (){
	var START = new Date();
	_time.timeS+=START.getMilliseconds();

	var end = new Date();
setTimeout(TimeRenderer, 4);
}
function startTimer() {
    var my_timer = document.getElementById("q");
    var time = my_timer.innerHTML;
    var arr = time.split(":");
    var h = arr[0];
    var m = arr[1];
    var s = arr[2];
    var ms = arr[3];
    ms=parseInt(ms)+4;
    alert("ms="+ms);
    if(ms>=999)
    {

    	ms-=999;
    	s++;    
    }
    if(s>=60){
		s-=60;
    	m++;
    }
    if(m>=60){
    	m-=60;
    	h++;
    }
 if (ms < 100) ms = "0" + ms;
 if (s.length<2) s = "0" + s;
 if ( m.length< 2) m = "0" + m;
    
    document.getElementById("q").innerHTML = h+":"+m+":"+s+":"+ms;
}
TimeRenderer();
	
