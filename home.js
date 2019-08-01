const liHome       = document.querySelector("#home"),
      aHome        = liHome .firstChild,
      divHomeInfo  = document.querySelector("#homeInfo");
      
      
aHome.addEventListener("click", function(){

    changeTab(liHome, liNotes, liSettings, divHomeInfo, divNotesInfo, divSettingsInfo);
    
    document.getElementById("myActivitiesTabs").style.display = "block";
});