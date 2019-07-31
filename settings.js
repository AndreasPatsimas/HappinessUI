const liSettings       = document.querySelector("#settings"),
      aSettings        = liSettings.firstChild,
      divSettingsInfo  = document.querySelector("#settingsInfo");

aSettings.addEventListener("click", function(){

    tab(liSettings, liHome, liNotes, divSettingsInfo, divHomeInfo, divNotesInfo);

});