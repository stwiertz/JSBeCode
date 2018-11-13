/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    var rnd = Math.floor((Math.random()*100)+1);
    var loser=0;
    do{
     
        
        var answer = prompt("1-100?"+loser+"fail");
        
        if(answer < rnd){ alert("plus grand")}
        
        else if(answer == rnd){ alert("nice")}
        else {alert("petit")}
        
        
        loser++;
        
    }while( answer != rnd );

})();
