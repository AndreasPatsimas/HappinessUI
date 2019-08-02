function changeTab (li_active, li1_inactive, li2_inactive, div_active, div1_inactive, div2_inactive){

        li_active.setAttribute("class","active");
    
        li1_inactive.removeAttribute("class");
    
        li2_inactive.removeAttribute("class");  

        div_active.setAttribute("class","tab-pane active");

        div1_inactive.setAttribute("class","tab-pane");

        div2_inactive.setAttribute("class","tab-pane");
}

function changeMonthsTab(activeElement, inactiveElement) {

        if(activeElement != null){
                        
                activeElement.setAttribute("class","active");

                inactiveElement.removeAttribute("class")            
        }  
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

const MonthEnum = {
        
        1:"January",
        2:"February",
        3:"March",
        4:"April",
        5:"May",
        6:"June",
        7:"July",
        8:"August",
        9:"September",
        10:"October",
        11:"November",
        12:"December"
};

function getMonthsFromBeginningOfYearUntilToday(){
        
        let dt = new Date();
        
        let monthsFromBeginningOfYearUntilToday = dt.getMonth()+1;
        
        if(monthsFromBeginningOfYearUntilToday > 12){
                monthsFromBeginningOfYearUntilToday = 1;
        }
        
        let ul = document.getElementById("myActivitiesTabs");
        
        for(let i = 1; i <= monthsFromBeginningOfYearUntilToday; i++){
               
                let li = document.createElement("li");

                li.setAttribute("id", `${MonthEnum[i]}`);

                let a = document.createElement("a");

                a.setAttribute("href", `#${MonthEnum[i]}`);
                
                a.setAttribute("data-toggle", "tab");
               
                a.textContent = `${MonthEnum[i]}`;

                li.appendChild(a);

                ul.appendChild(li);
        }

        return monthsFromBeginningOfYearUntilToday;
}
const numberOfMonths = getMonthsFromBeginningOfYearUntilToday();

function getHash( url ) {
        var hashPos = url.lastIndexOf ( '#' );
        return url.substring( hashPos + 1 );
} //returns the portion of a URL after any hash symbol

function getFirstChildWithTagName( element, tagName ) {
        for ( var i = 0; i < element.childNodes.length; i++ ) {
          if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
        }
} //returns the first child of a specified element that matches a specified tag name
  









