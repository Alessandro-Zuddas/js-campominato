"use strict";

/*-------------------------------------------------------------
                  FUNCTIONS
--------------------------------------------------------------*/ 

// Inserimento numeri in base alla difficoltà
function gameModeSettings(cellNumber, difficoult){

    for (let i = 1; i <= cellNumber; i++) {

    const gameCell = document.createElement("div");
    gameCell.innerHTML = i;
    gameCell.classList.add("game-number");

    gameCell.classList.add(difficoult);

    gameCell.addEventListener("click", function(){

        if(!this.wasClicked && !bombs.includes(Number(this.innerHTML))){

            gameCell.classList.add("clicked");
            this.wasClicked = true;

        }else if(!this.wasClicked && bombs.includes(Number(this.innerHTML))){

            gameCell.classList.add("bomb");

        }

    });

    gameTable.append(gameCell);

    }
}

// Estrae numero random prendendo come argomento il numero massimo fino al quale arrivare
function rndBombs(maxNumber){
    rndNumber = Math.floor(Math.random() * maxNumber) + 1;
}

// Riempie array attraverso la funzione rndBombs()
function bombsSpawn(maxNumbers){

    while(bombs.length < 16){

        rndBombs(maxNumbers);

        if(!(bombs.includes(rndNumber))){

            bombs.push(rndNumber);

        }
    }

}

/*-------------------------------------------------------------
                  FUNCTIONS
--------------------------------------------------------------*/ 


// Dichiarazione bottone play
const playButton = document.querySelector(".play-btn");

// Dichiarazione container numeri
const gameTable = document.querySelector(".game-table");

// Dichiarazione difficoltà selezionata
const gameMode = document.getElementById("game-mode");

// Variabile per contenere il numero estratto randomicamente
let rndNumber;

// Array dei numeri random
let bombs = [];

// Booleano per capire lo stato della cella
let wasClicked = false;

playButton.addEventListener("click", function(){

    if(gameMode.value === "easy"){

        // Reset container numeri
        gameTable.innerHTML = "";

        // Impostazione numeri in base alla difficoltà
        gameModeSettings(100, "easy");

        // Spawn Bombe
        bombsSpawn(100);
        console.log(bombs);

    }else if(gameMode.value === "medium"){

        // Reset container numeri
        gameTable.innerHTML = "";

        // Impostazione numeri in base alla difficoltà
        gameModeSettings(81, "medium");

        // Spawn Bombe
        bombsSpawn(81);
        console.log(bombs);

    }else if(gameMode.value === "hard"){

        // Reset container numeri
        gameTable.innerHTML = "";

        // Impostazione numeri in base alla difficoltà
        gameModeSettings(49, "hard");

        // Spawn Bombe
        bombsSpawn(49);
        console.log(bombs);
    }

});


