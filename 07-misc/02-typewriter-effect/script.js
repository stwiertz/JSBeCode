/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
   var target = document.getElementById("target");
    var table = target.innerHTML;
    target.innerHTML="";
    var i =0;
    var speed =500;
        
    typeWriter();
function typeWriter() {
  if (i < table.length) {
      
    target.innerHTML += table.charAt(i);
    i++;
    
      speed= Math.floor((Math.random()*150)+30);
      console.log(speed);
    setTimeout(typeWriter, speed);
      
  }
}
    

        
        
    
    
    /*
    var lettre =document.getElementById("target").innerHTML.split("");
    document.getElementById("target").innerHTML="";
    var i =0;
    function ecrire(){
        
         if(i< lettre.length){
            
            var para = document.createElement("span");
                      
            var t = document.createTextNode(lettre[i]);
            para.appendChild(t);
            document.getElementById("target").appendChild(para);
             
            i++;
         }
        
    }
    
    function rdmtime(){
        
 Math.floor((Math.random()*200)+200);
        
    }
    
    setInterval(ecrire, rdmtime);
    */
    
})();
