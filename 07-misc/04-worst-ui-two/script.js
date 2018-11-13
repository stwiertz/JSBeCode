/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    
    document.querySelectorAll("button").forEach(function(btn){
               
               btn.addEventListener("click",function() {
                  
                   
                   var min = btn.getAttribute("data-min");
                   var max = btn.getAttribute("data-max");
                
                  if(parseInt(btn.innerHTML,10)< max){
                   
                      
                   btn.innerHTML = parseInt(btn.innerHTML,10)+1;
                      if(btn.innerHTML.length==1){btn.innerHTML="0" + btn.innerHTML;}
                      
                  }else{btn.innerHTML= min ;}
                   
                   document.getElementById("target").innerHTML="+" + document.getElementById("part-one").innerHTML + document.getElementById("part-two").innerHTML + document.getElementById("part-three").innerHTML + document.getElementById("part-four").innerHTML;
                   
                   
                   
               })
               
               })
    
    
    
})();
