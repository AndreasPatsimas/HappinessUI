const liHome       = document.querySelector("#home"),
      aHome        = liHome .firstChild,
      divHomeInfo  = document.querySelector("#homeInfo");

aHome.addEventListener("click", function(){

    tab(liHome, liNotes, liSettings, divHomeInfo, divNotesInfo, divSettingsInfo);

});