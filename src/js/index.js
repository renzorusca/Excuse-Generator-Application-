import 'bootstrap'; //breathecode dom for more explicit errors
import 'breathecode-dom'; //DOM override to make JS easier to use
import '../style/index.scss';

window.onload = function() {
    
    document.querySelector("#excuse").innerHTML = generatex();
    console.log("Hello from console");
    
};
    
    let generatex = function() {
        
        let word1 = ["the dog","my grandma","this turtle","mybird"];
        let word2 = ["eat","pissed","crushed","broked"];
        let word3 = ["before the glass","right in time", "when i finisehd","during my lunch"];
        
        let indexword1 = Math.floor(Math.random() * word1.length);
        let indexword2 = Math.floor(Math.random() * word2.length);
        let indexword3 = Math.floor(Math.random() * word3.length);
        
        return word1(indexword1) + " " +
               word2(indexword2) + " " +
               word3(indexword3);
        
        
        
    }; 
