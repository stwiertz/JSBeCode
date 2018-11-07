/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    
    
    // va chercher l'attribut data-image dans l'id source
    var source = document.getElementById("source")    //"va" dans la div avec l'id source
    var dataImage = source.getAttribute("data-image"); //stoc la valeur de l'attribut data-image
    var img = document.createElement('img');
    img.src= dataImage;
    document.getElementById("target").appendChild(img);
    source.parentNode.removeChild(source);
        
})();
