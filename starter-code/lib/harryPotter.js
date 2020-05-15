var birthdays = ["Severus Snape", "9 January", "Arthur Weasley", "6 February",
"Ron Weasley", "1 March", "Remus Lupin", "10 March",
"Fred & George Weasley", "1 April", "Pomona Sprout", "15 May",
"Draco Malfoy", "5 June", "Dobby", "28 June",
"Neville Longbottom", "30 July", "Harry Potter", "31 July",
"Ginevra Weasley", "11 August", "Percy Weasley ", "22 August",
"Hermione Granger", "19 September", "Minerva McGonagall",
"4 October", "Filius Flitwick", "17 October", "Molly Weasley",
"30 October", "Bill Weasley", "29 November", "Rubeus Hagrid",
"6 December", "Charlie Weasley", "12 December"];


//Iteration 1

function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;

    for (let i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}

var matrix = listToMatrix(birthdays, 2);

// Iteration 2

var moreBirthdays = [ "Lily Evans", "30 January", "James Potter", "27 March",
"Dudley Dursley", "30 June", "Tom Riddle", "31 December" ];

// Iteration 3

var matrix = listToMatrix(moreBirthdays, 2);


console.log(matrix)

// Iteration 4