/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElememntById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        var num= Number(document.getElementById("number").value);
        var som=1;
        for(i=1; i < num+1 ; i++){
            som= som*i;
        }
        alert(som);
    });

})();
