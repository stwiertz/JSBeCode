/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    
    
    document.getElementById("pass-one").addEventListener("input",function(){
        
        let longeur = document.getElementById("pass-one").value.length;
        let textarray = document.getElementById("pass-one").value.split('');
        let cont=0;
        for(var i=0; i<textarray.length; i++){
            
                if(!isNaN(textarray[i]) && isFinite(textarray[i])){
                   cont++;
                   }
        
        }
        if(longeur > 7 && cont >1){
            
            document.getElementById("validity").innerHTML= "ok";
        }else{
            document.getElementById("validity").innerHTML= "Pas ok";
        }
                
        
    });
    
    
})();
