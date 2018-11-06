/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click",function(){
        
        var d = new Date();
        var bd= new Date(document.getElementById("dob-year").value,document.getElementById("dob-month").value-1,document.getElementById("dob-day").value);
            
        var age=0; 
        
        console.log(d.getDate());
        console.log(bd.getDate());
        
        
        age= d.getFullYear()-bd.getFullYear();
        if(d.getMonth()<bd.getMonth()){
           age--;
           
           }else if(d.getMonth()==bd.getMonth() && d.getDate()<bd.getDate()){
               age--;
           }
       
        
        alert("age: "+age+"ans");
    });
    
  
    
})();
