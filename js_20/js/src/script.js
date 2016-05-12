

 var state=0;
 var newState;
function change_slider(newState)
{
console.log(Math.abs(state-newState));
  if(state-newState==2)
  {
    $('.carousel').r(); 
    state=newState;
  }
  else
  if(state-newState==1){
  state=newState;
    $('.carousel').l();
 }
   else
  if(state-newState==-1){
  state=newState;
    $('.carousel').r();
 }
   else
  if(state-newState==-2){
  state=newState;
    $('.carousel').l();
 }
}


$(function(){
  $('.carousel').carousel(
    {backgroubdColor:'transparent'}
    );
    // $('.carousel').auto_right();
    $('.carousel__button:nth-of-type(1)').on('click',
      function(){
        $('.carousel__button .carousel__buttonState').css('visibility','hidden');
        $(this).find('.carousel__buttonState').css('visibility','visible');
        newState=0;
        change_slider(newState);

      });
    $('.carousel__button:nth-of-type(2)').on('click',function(){
        newState=1;
        $('.carousel__button .carousel__buttonState').css('visibility','hidden');
      $(this).find('.carousel__buttonState').css('visibility','visible');
       //
         change_slider(newState);
      });
    $('.carousel__button:nth-of-type(3)').on('click',function(){
      $('.carousel__button .carousel__buttonState').css('visibility','hidden');
      $(this).find('.carousel__buttonState').css('visibility','visible');
        newState=2;
         change_slider(newState);
      });

var $dropMenu__trigger=$('.dropMenu__trigger');
  $dropMenu__trigger.on('click',function(){
     var $content=$(this).siblings('.dropMenu__text');
     $content.slideToggle();
     console.log('$content=',$content);



  });
});

