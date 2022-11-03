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

        gameCell.classList.add("clicked");
        console.log(i);

    });

    gameTable.append(gameCell);

    }
}

function rndBombs(maxNumber){
    rndNumber = Math.floor(Math.random() * maxNumber) + 1;
}

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

let rndNumber;

let bombs = [];

playButton.addEventListener("click", function(){

    if(gameMode.value === "easy"){

        // Reset container numeri
        gameTable.innerHTML = "";

        // Impostazione numeri in base alla difficoltà
        gameModeSettings(100, "easy");

    }else if(gameMode.value === "medium"){

        // Reset container numeri
        gameTable.innerHTML = "";

        // Impostazione numeri in base alla difficoltà
        gameModeSettings(81, "medium");

    }else if(gameMode.value === "hard"){

        // Reset container numeri
        gameTable.innerHTML = "";

        // Impostazione numeri in base alla difficoltà
        gameModeSettings(49, "hard");
    }

});
