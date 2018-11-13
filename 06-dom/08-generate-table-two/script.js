/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

      var tbl = document.createElement("table");
    
    let target = document.getElementById("target");
    
    
    target.appendChild(tbl);
    
    for(var i=0; i<11; i++){
    target.getElementsByTagName("table")[0].insertRow(i);
    
        for(var y =0 ; y<11 ; y++){
                    
            target.getElementsByTagName("tr")[i].insertCell(y).innerHTML= (y)*(i) ;
            
            
            
            }
            
        
        
    }
    for(var x=0; x<11 ; x++){
        target.getElementsByTagName("tr")[0].getElementsByTagName("td")[x].innerHTML= x;
        target.getElementsByTagName("tr")[x].getElementsByTagName("td")[0].innerHTML= x;
                
    }
    

})();
