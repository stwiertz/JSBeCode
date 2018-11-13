/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    
    let form = document.getElementById("pass-one");
    
    form.setAttribute("maxlength", 10);
    
    form.addEventListener("input", function(){
        
        document.getElementById("counter").innerHTML= form.value.length+"/10";
        
    })
    

})();
