/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElememntById("element-id").value

    document.getElementById("run").addEventListener("click", function() {
        
        var table = document.getElementById("numbers").value.split(" ");
        var a =0;
        for(var i=0; i <table.length; i++){
            
            table[i]= table[i].replace(",","");
            table[i]= table[i].trim();
        }
        
        
       table.sort(function(a,b){return a-b;})
            
            alert(table);
            
    });

})();
