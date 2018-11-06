/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
    
    
    var days=["Dimanche", "lundi" , "mardi" , "mercredi" , "jeudi" , "vendredi" , "samedi"];
    var mois=["janvier", "fevrier","mars","avril","mai","juin,","juillet","aout", "septmenbre" ,"octobre" , "novembre" , "decembre"];
    
    var d= new Date();
    
    
    
    document.getElementById("target").innerHTML = days[d.getDay()] + " " + d.getDate() + " " +  mois[d.getMonth()] + " " + d.getFullYear() + ", " + addZero(d.getHours()) + "h" + addZero(d.getMinutes());
    
    
})();
