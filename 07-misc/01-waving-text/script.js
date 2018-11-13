/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  
   /*
    var lettre = document.getElementById("target").innerHTML.split("");
    document.getElementById("target").innerHTML="";
    var cont=1;
    var fS=1;
    
    //console.log(lettre);
    for(let i=0; i< lettre.length; i++){
        if(fS==5){
            cont=-1; 
        }else if(fS==1){cont= 1;}
        
        fS= fS + cont;
        
        var para = document.createElement("span");
        var t = document.createTextNode(lettre[i]);
        para.appendChild(t);
        document.getElementById("target").appendChild(para);
        document.getElementById("target").getElementsByTagName("span")[i].style.fontSize= fS+"rem";
        
    }
    */
    
    var lettre =document.getElementById("target").innerHTML.split("");
    document.getElementById("target").innerHTML="";
    var cont=1;
    var fS=["1rem","1.5rem","2rem","2.5rem","2rem","1.5rem"];
    var offset=["10px","15px","20px","15px","10px"]
    
    document.getElementById("target").style.lineHeight="35px";
    
         for(let i=0; i< lettre.length; i++){
            
            var para = document.createElement("span");
            //para.style.lineHeight="35px";
            para.style.verticalAlign="middle";
           
            var t = document.createTextNode(lettre[i]);
            para.appendChild(t);
            document.getElementById("target").appendChild(para);
             
        
         }
    //sizing();
    setInterval(sizing, 115);
         
    
    
    
    function sizing(){
            var temp = fS[0];
            
            fS.shift();
            fS.push(temp);
           var x =0;
            
        for(var y=0; y< lettre.length ;y++){
            
            document.getElementById("target").getElementsByTagName("span")[y].style.fontSize=fS[x];
           
            if(x==5){ x=0;}else{x++;}
        }
            
    }
    
})();
