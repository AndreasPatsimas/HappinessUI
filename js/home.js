const liHome       = document.querySelector("#home"),
aHome        = liHome .firstChild,
divHomeInfo  = document.querySelector("#homeInfo"),
general      = document.querySelector("#general"),
january      = document.querySelector("#January"),
february     = document.querySelector("#February"),
march        = document.querySelector("#March"),  
april        = document.querySelector("#April"),  
may          = document.querySelector("#May"),
june         = document.querySelector("#June"),
july         = document.querySelector("#July"),
august       = document.querySelector("#August"),
september    = document.querySelector("#September"),
october      = document.querySelector("#October"),
november     = document.querySelector("#November"),
december     = document.querySelector("#December");


aHome.addEventListener("click", function(){

changeTab(liHome, liTasks, liSettings, divHomeInfo, divTasksInfo, divSettingsInfo);

document.getElementById("myActivitiesTabs").style.display = "block";
});

const httpHome = new httpRequest();

httpHome.get("happyUsers.json", function(error, user){

if(error){
console.log(error);
}
else{

user = JSON.parse(user);

function init(...tabs){

tabs.forEach(function(tabActivated){
  if(tabActivated != null){
      tabActivated.addEventListener("click",function(){
          
          tab = getActiveTab();
          
          changeMonthsTab(tabActivated,tab);
      
      });
  }
});
}

init(general, january, february, march, april, may, june, july, august, september, october, november, december);


var tab;

function getActiveTab(){

var tabListItems = document.getElementById('myActivitiesTabs').childNodes;

tabListItems.forEach(function(tabListItem){
  
  if(tabListItem.nodeName == "LI" && tabListItem.className == "active"){
     
     tab = tabListItem; 
            
  }
});

return tab;
}


function changeMonthsTab(activeElement, inactiveElement) {

if(activeElement != null){
              
      activeElement.setAttribute("class","active");

      inactiveElement.removeAttribute("class");
      
      fillhomeTable(activeElement);
}  
}

function fillhomeTable(activeElement){
const homeTable = document.getElementById("items");
      
      var content = "";

      for(let i = 1; i < 4; i++){
              content +=      `<tr>
                                      <td>${i}</td>
                                      <td>${activeElement.id}</td>
                                      <td>${activeElement.id}</td>
                                      <td>${activeElement.id}</td>
                              </tr>`;
      }

      homeTable.innerHTML = content;
}

fillhomeTable(general);

httpHome.get(`previousYearProfile.json`, 
  function(error,previousYearProfiles){
      if(error){
          console.log(error);
      }
        else{
            previousYearProfiles = JSON.parse(previousYearProfiles);
            console.log(previousYearProfiles);
            let today = new Date();

            let avgRatingPreviousYear = Math.round(71.25 * 100) / 100;
            
            document.getElementById("avgPrev").innerHTML = `<a href = "#" style = "color:grey" id = "analysisPreviousYear"><span class="pull-left"><strong id="prevYear">
                                                          General ${today.getFullYear()-1}</strong></span> 
                                                          ${avgRatingPreviousYear}% </a>`;

            
                              
      }
});


}
});



