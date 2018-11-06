/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   do{
            var nom = prompt("nom?");
            var age = prompt("age?");
            var ville =prompt("ville ? ");
            var validation = prompt(nom+" "+age+" "+ville);
        }while(validation!="oui" || validation !=null);

})();
