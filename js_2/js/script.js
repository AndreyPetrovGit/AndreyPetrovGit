
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
  console.log(new_element);
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
    this.del_el=function(selector,positionOfElement){
      var elForDel=document.querySelectorAll(selector);
      elForDel[positionOfElement].removeChild();
    }
    this.get_all=function(){

    }
    this.add_n_el=function(tag, parent_selector,position,NewClass,text_content, how){
      for(var i=0;i<how;++i){
        this.add_el(tag, parent_selector,position,NewClass,text_content[i]);
      }

    }
 };

var style=['backgroundColor','#aaa'];
var testPage=new HTML_MANAGER('body','none',style);

testPage.add_el('div','body','last','wrapper');
testPage.add_el('p','.wrapper',0,'header','Тест по программированию');

var questions=['1.Вопрос№1','2.Вопрос№2','3.Вопрос№3'];
var question_content=['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3'];
for(var i=0;i<3;++i){
    var iString=i+1+'';
    testPage.add_el('div','.wrapper','last','questBox',questions[i]);
    testPage.add_el('form','.questBox:nth-of-type(' +iString+')','last','testForm','none');

    for(var j=0;j<3;++j){
       testPage.add_el('input','.questBox:nth-of-type(' +iString+') .testForm','last','inp','none');
       testPage.LastCreatedTag.setAttribute('type', "radio");
       testPage.LastCreatedTag.setAttribute('id', ""+iString+j);   
       testPage.LastCreatedTag.setAttribute('name', ""+iString+'name');  
       testPage.add_el('label','.questBox:nth-of-type(' +iString+') .testForm','last','inp_label',question_content[j]);
    }
   
}

testPage.add_el('form','.wrapper','last','Lastform','none');
testPage.add_el('button','.Lastform','last','Button','Проверить мои результаты!');

