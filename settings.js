const liSettings       = document.querySelector("#settings"),
      aSettings        = liSettings.firstChild,
      divSettingsInfo  = document.querySelector("#settingsInfo");

aSettings.addEventListener("click", function(){

    changeTab(liSettings, liHome, liNotes, divSettingsInfo, divHomeInfo, divNotesInfo);

});