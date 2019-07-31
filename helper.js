function tab (li_active, li1_inactive, li2_inactive, div_active, div1_inactive, div2_inactive){

        li_active.setAttribute("class","active");
    
        li1_inactive.removeAttribute("class");
    
        li2_inactive.removeAttribute("class");  

        div_active.setAttribute("class","tab-pane active");

        div1_inactive.setAttribute("class","tab-pane");

        div2_inactive.setAttribute("class","tab-pane");
}


function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }




