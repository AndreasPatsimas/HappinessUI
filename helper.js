function tab (li_active, li1_inactive, li2_inactive, div_active, div1_inactive, div2_inactive){

        li_active.setAttribute("class","active");
    
        li1_inactive.removeAttribute("class");
    
        li2_inactive.removeAttribute("class");  

        div_active.setAttribute("class","tab-pane active");

        div1_inactive.setAttribute("class","tab-pane");

        div2_inactive.setAttribute("class","tab-pane");
}


  function getAge(dateString){

    var today = new Date();
    
    var birthDate = new Date(dateString);
    
    var age = today.getFullYear() - birthDate.getFullYear();
   
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
};






