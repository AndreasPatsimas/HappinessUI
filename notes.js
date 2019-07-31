
const liNotes       = document.querySelector("#notes"),
      aNotes        = liNotes.firstChild,
      divNotesInfo  = document.querySelector("#notesInfo");

 aNotes.addEventListener("click", function(){
     tab(liNotes, liHome, liSettings, divNotesInfo, divHomeInfo, divSettingsInfo);
 });
    