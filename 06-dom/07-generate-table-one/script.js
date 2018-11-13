/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
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
    
    for(var i=0; i<10; i++){
    target.getElementsByTagName("table")[0].insertRow(i).innerHTML= "coucou";
    
    }
    
    
    
})();
