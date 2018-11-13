/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];
    let num =0;
    
    // your code here
    let img = document.getElementsByClassName("material")[0].getElementsByTagName("img")[0];
    
    document.getElementById("next").addEventListener("click",function(){
        
        if(num==4){num=0;}else{ num++;}
        
        img.src = gallery[num];
        
        
    });

})();
