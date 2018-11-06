/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElememntById("element-id").value
    var one =Number(document.getElementById("op-one").value);
    var two =Number(document.getElementById("op-two").value);
    
    var performOperation = function(operation) {
      
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
            
            switch($btn.id){
                
                case "addition": 
                            alert(one + two);
                            break;
                case "substraction": 
                            alert(one - two);
                            break;
            
                case "multiplication": 
                            alert(one * two);
                            break;
            
                case "division": 
                            alert(one / two);
                            break;
                default:
                    alert("mert");
        }
                
        });
    });
})();
