//Iteration 1

var responses = [ "This is the best job ever!","Satisfied.","At least I get paid.","I'm looking for another job.","I don't want to answer." ];

//Iteration 1.2

function random_answ(items) {
    return items[Math.floor(Math.random()*items.length)]
}

random_answ(responses);


//Iteration 1.3
function response3(arr){
    var respuestas = []
    for (let i = 0; i < 10; i++){
      respuestas.push(random_answ(arr)) 
      
    }
    return respuestas
}
 
response3(responses)

//Iteration 1.4
var employeeSatisfaction = function (arr) {
    // Steps 2, 3 and 4 here
    var array = []
    for (let i = 0; i < 5; i++){
      array.push(response3(arr))
    }
  
    return array;
};
employeeSatisfaction(responses)
