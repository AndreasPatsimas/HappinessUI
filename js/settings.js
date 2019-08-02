const liSettings       = document.querySelector("#settings"),
      aSettings        = liSettings.firstChild,
      divSettingsInfo  = document.querySelector("#settingsInfo");

aSettings.addEventListener("click", function(){

    changeTab(liSettings, liHome, liNotes, divSettingsInfo, divHomeInfo, divNotesInfo);

    document.getElementById("myActivitiesTabs").style.display = "none";

});

const imgSettings = document.getElementById("imgSettings");
imgSettings.setAttribute("src", localStorage.getItem("imageLink"));

// document.getElementById("first_name").value = document.getElementById("fullname").innerText;