/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    
    var mois=["janvier","fevrier","mars","avril","mai","juin ","juillet","aout","septmenbre", "octobre","novembre","decembre"];
   
  
    
    document.getElementById("run").addEventListener("click",function(){
        
     var date= new Date(document.getElementById("year").value );
        date.setDate(13);
         
        
        
       
        for(var m =0 ; m<12 ; m++){
            
            date.setMonth(m);
            
            if( date.getDay() ==5){
                console.log(mois[date.getMonth()]);
                
            }
            
        }
        
    })
    
    
    
    
})();
