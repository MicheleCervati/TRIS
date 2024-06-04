const btns = document.querySelectorAll("button");

const lunghezzaArrayPartita = 9;

let partita = ["E", "E", "E", "E", "E", "E", "E", "E", "E"];
let counter = 0;
let finito = false;

btns.forEach(btn => btn.addEventListener("click", function () {
    if (!finito) {
        if (counter % 2 == 0 && partita[btn.id - 1] == "E") {
            partita[btn.id - 1] = "X"
            counter++;
            btn.innerHTML = "X"
        } else if (counter % 2 == 1 && partita[btn.id - 1] == "E") {
            partita[btn.id - 1] = "O"
            btn.innerHTML = "O"
            counter++;
        }
        console.log(partita);
        ControllaVittoria()
    }
}))

let condizioniVittoria = [ //A rappresenta dove va messa la la X o la O per vincere
    ["A", "A", "A", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "A", "A", "A", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "A", "A", "A"],

    ["A", "E", "E", "A", "E", "E", "A", "E", "E"],
    ["E", "A", "E", "E", "A", "E", "E", "A", "E"],
    ["E", "E", "A", "E", "E", "A", "E", "E", "A"],

    ["A", "E", "E", "E", "A", "E", "E", "E", "A"],
    ["E", "E", "A", "E", "A", "E", "A", "E", "E"],
]

function ControllaVittoria() {
    let temp = [];


    for (let i = 0; i < lunghezzaArrayPartita; i++) {
        if (partita[i] != "X") {
            temp.push("E");
        } else {
            temp.push("A");
        }
    }

    condizioniVittoria.forEach(element => {
        if (element == partita) {
            alert("Ha vinto il giocatore X");
        }
    });
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAA   " + temp)

    for (let i = 0; i < lunghezzaArrayPartita; i++) {
        if (partita[i] != "O") {
            temp.push("E");
        } else {
            temp.push("A");
        }
    }

    condizioniVittoria.forEach(element => {
        if (element == partita) {
            alert("Ha vinto il giocatore O");
        }
    });


}

