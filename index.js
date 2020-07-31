
var prompt = require('prompt');
// Start the prompt 
prompt.start(); 

var nbrAlea = Math.ceil(Math.random()*100);
// 0-1  ---> 0 - 100 
console.log(nbrAlea); 

var question = {
    name: "question",
    description: "Quel est le nombre "
}

function moreOrLess() {

    prompt.get(question, function (err, result){
        var input = parseInt(result.question);
        if (err !== null){
            console.log("error", err);
            return 
        } 
            //console.log("saisie :", result.question);
            //console.log("saisie :", nbrAlea);
            //console.log("saisie :", input);          
            if (nbrAlea === input){
                console.log("Bravo, vous avez trouvez le nombre mystère !!!");

            } else if (nbrAlea < input) {
                console.log("C'est moin !");
                moreOrLess();

            } else {
                console.log("C'est plus !");
                moreOrLess();
            }
        
    }) 
}  

moreOrLess();