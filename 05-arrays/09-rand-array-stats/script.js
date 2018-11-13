/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function(){
        
        var table= new Array(10);
        var sum=0;
        
        for(var i =0 ; i < 10 ;i++){
                                                 
            table[i]= Math.floor( (Math.random() * 100)+1);   
            sum = sum+table[i];
            var ids="n-"+(i+1);
            document.getElementById(ids).innerHTML = table[i];
            
        }
        

        
        document.getElementById("min").innerHTML = Math.min(... table );
        document.getElementById("max").innerHTML = Math.max(... table );
        document.getElementById("sum").innerHTML = sum;         
        document.getElementById("average").innerHTML = sum/10;         
            
            
        
        });
        
})();
