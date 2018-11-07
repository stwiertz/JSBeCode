/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementsByClassName("material")[0].addEventListener("hover",function(){
       
        
        var el = document.querySelector("section.material.figure img");
        
        
     let source = document.getElementsByClassName("material.figure. ")[0];
        let datahover = source.getAttribute("data-hover");
        console.log(datahover);
        
        document.getElementsByClassName("material").img.src= datahover;
        
    })
    
})();
