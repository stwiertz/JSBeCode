/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var one =Number(document.getElementById("op-one").value);
    var two =Number(document.getElementById("op-two").value);
    
    
    document.getElementById("addition").addEventListener("click", function() {
       
        return alert(one+two);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        return alert(one-two);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        return alert(one*two);
    });

    document.getElementById("division").addEventListener("click", function() {
        return alert(one/two);
    });
})();
