
$(document).ready(function(){

   $('.carousel').carousel(
    {backgroubdColor:'transparent'}
    );
// +++++++++++++++++++++++++++++++

   var html=$('#0').html();
   var profile0=[
     {
      id:'0',
      name:'Петров Андрей Олегович',
      rank: 'Пижон!',
      reasons:['Стипендии не хватает','Потому что могу','Не так банльно, как многое другое'],
      phone:'+380661488228',
      profile:['LinkeDin.com','https://www.linkedin.com/in/andrey-petrov-49b42a99?trk=nav_responsive_tab_profile'],//resourse link
      feedback:'И если что-то сломается — сигнал ТЫЖ — и ТЫЖ придет!'
     },
    {
      id:'1',
      name:'ivanov ivan ivanovich',
      rank: 'jast ivan',
      reasons:['because I am Ivan'],
      phone:'+30669486521',
      profile:['LinkeDin.com','https://www.linkedin.com/in/ivan-ivanov-229a3066?authType=NAME_SEARCH&authToken=636R&locale=ru_RU&srchid=3504149031461401083096&srchindex=5&srchtotal=3248&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A3504149031461401083096%2CVSRPtargetId%3A235457601%2CVSRPcmpt%3Aprimary%2CVSRPnm%3Atrue%2CauthType%3ANAME_SEARCH'],//resourse link
      feedback:'I’ll be back!'
     },
     {
      id:'2',
      name:'ivanov ivan ivanovich',
      rank: 'jast ivan',
      reasons:['because I am Ivan'],
      phone:'+30669486521',
      profile:['LinkeDin.com','https://www.linkedin.com/in/ivan-ivanov-229a3066?authType=NAME_SEARCH&authToken=636R&locale=ru_RU&srchid=3504149031461401083096&srchindex=5&srchtotal=3248&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A3504149031461401083096%2CVSRPtargetId%3A235457601%2CVSRPcmpt%3Aprimary%2CVSRPnm%3Atrue%2CauthType%3ANAME_SEARCH'],//resourse link
      feedback:'I’ll be back!'
     },
     {
      id:'3',
      name:'ivanov ivan ivanovich',
      rank: 'jast ivan',
      reasons:['because I am Ivan'],
      phone:'+30669486521',
      profile:['LinkeDin.com','https://www.linkedin.com/in/ivan-ivanov-229a3066?authType=NAME_SEARCH&authToken=636R&locale=ru_RU&srchid=3504149031461401083096&srchindex=5&srchtotal=3248&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A3504149031461401083096%2CVSRPtargetId%3A235457601%2CVSRPcmpt%3Aprimary%2CVSRPnm%3Atrue%2CauthType%3ANAME_SEARCH'],//resourse link
      feedback:'I’ll be back!'
     },
     {
      id:'4',
      name:'ivanov ivan ivanovich',
      rank: 'jast ivan',
      reasons:['because I am Ivan'],
      phone:'+30669486521',
      profile:['LinkeDin.com','https://www.linkedin.com/in/ivan-ivanov-229a3066?authType=NAME_SEARCH&authToken=636R&locale=ru_RU&srchid=3504149031461401083096&srchindex=5&srchtotal=3248&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A3504149031461401083096%2CVSRPtargetId%3A235457601%2CVSRPcmpt%3Aprimary%2CVSRPnm%3Atrue%2CauthType%3ANAME_SEARCH'],//resourse link
      feedback:'I’ll be back!'
     },
      {
      id:'5',
      name:'Петров Андрей Олегович',
      rank: 'Пижон!',
      reasons:['Стипендии не хватает','Потому что могу','Не так банльно, как многое другое'],
      phone:'+380661488228',
      profile:['LinkeDin.com','https://www.linkedin.com/in/andrey-petrov-49b42a99?trk=nav_responsive_tab_profile'],//resourse link
      feedback:'И если что-то сломается — сигнал ТЫЖ — и ТЫЖ придет!'
     },
    {
      id:'6',
      name:'ivanov ivan ivanovich',
      rank: 'jast ivan',
      reasons:['because I am Ivan'],
      phone:'+30669486521',
      profile:['LinkeDin.com','https://www.linkedin.com/in/ivan-ivanov-229a3066?authType=NAME_SEARCH&authToken=636R&locale=ru_RU&srchid=3504149031461401083096&srchindex=5&srchtotal=3248&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A3504149031461401083096%2CVSRPtargetId%3A235457601%2CVSRPcmpt%3Aprimary%2CVSRPnm%3Atrue%2CauthType%3ANAME_SEARCH'],//resourse link
      feedback:'I’ll be back!'
     },
     {
      id:'7',
      name:'ivanov ivan ivanovich',
      rank: 'jast ivan',
      reasons:['because I am Ivan'],
      phone:'+30669486521',
      profile:['LinkeDin.com','https://www.linkedin.com/in/ivan-ivanov-229a3066?authType=NAME_SEARCH&authToken=636R&locale=ru_RU&srchid=3504149031461401083096&srchindex=5&srchtotal=3248&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A3504149031461401083096%2CVSRPtargetId%3A235457601%2CVSRPcmpt%3Aprimary%2CVSRPnm%3Atrue%2CauthType%3ANAME_SEARCH'],//resourse link
      feedback:'I’ll be back!'
     }
  
  
  
   ];
   var content=tmpl(html,{data:profile0});
   $('body').append(content);

});