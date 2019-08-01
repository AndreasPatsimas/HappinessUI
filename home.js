const liHome       = document.querySelector("#home"),
      aHome        = liHome .firstChild,
      divHomeInfo  = document.querySelector("#homeInfo"),
      general      = document.querySelector("#general").firstChild,
      january      = document.querySelector("#January").firstChild;
      
let   february     = document.querySelector("#February");
if(february != null){
    february = document.querySelector("#February").firstChild;
}

let march          = document.querySelector("#March");
if(march != null){
    march = document.querySelector("#February").firstChild;
}

let april          = document.querySelector("#April");
if(april != null){
    april = document.querySelector("#February").firstChild;
}

let may            = document.querySelector("#May");
if(may != null){
    may = document.querySelector("#February").firstChild;
}

let june           = document.querySelector("#June");
if(june != null){
    june = document.querySelector("#February").firstChild;
}

let july           = document.querySelector("#July");
if(july != null){
    july = document.querySelector("#February").firstChild;
}

let august         = document.querySelector("#August");
if(august != null){
    august = document.querySelector("#February").firstChild;
}

let september      = document.querySelector("#September");
if(september != null){
    september = document.querySelector("#February").firstChild;
}

let october        = document.querySelector("#October");
if(october != null){
    october = document.querySelector("#February").firstChild;
}
let november       = document.querySelector("#November");
if(november != null){
    november = document.querySelector("#February").firstChild;
}
let december       = document.querySelector("#December");
if(december != null){
    december = document.querySelector("#February").firstChild;
}

      


    
      
aHome.addEventListener("click", function(){

    changeTab(liHome, liNotes, liSettings, divHomeInfo, divNotesInfo, divSettingsInfo);
    
    document.getElementById("myActivitiesTabs").style.display = "block";
});











    