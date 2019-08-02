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

    changeTab(liHome, liNotes, liSettings, divHomeInfo, divNotesInfo, divSettingsInfo);
    
    document.getElementById("myActivitiesTabs").style.display = "block";
});


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











    