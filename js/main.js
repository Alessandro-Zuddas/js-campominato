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

        // Condizioni di vittoria del gioco
        if(difficoult === "easy"){
            if(points === 84){
                gameText.innerHTML = `Complimenti hai vinto! Il tuo punteggio finale è di: ${points}`;

                setTimeout(function(){
                    alert("Bravissimo! Premi OK per riprovare ad una difficoltà superiore!");
                    window.location.reload();
                }, 200);
            }
        }else if(difficoult === "medium"){
            if(points === 65){
                gameText.innerHTML = `Complimenti hai vinto! Il tuo punteggio finale è di: ${points}`;

                setTimeout(function(){
                    alert("Bravissimo! Premi OK per riprovare ad una difficoltà superiore!");
                    window.location.reload();
                }, 200);
            }
        }else if(difficoult === "hard"){
            if(points === 33){
                gameText.innerHTML = `Complimenti hai vinto! Il tuo punteggio finale è di: ${points}`;

                setTimeout(function(){
                    alert("Sei il migliore! Hai vinto alla difficoltà massima!");
                    window.location.reload();
                }, 200);
            }
        }

        // Condizioni per capire se è un punto o una bomba
        if(!this.wasClicked && !bombs.includes(Number(this.innerHTML))){

            gameCell.classList.add("clicked");
            this.wasClicked = true;
            gameText.innerHTML = `Il tuo punteggio: ${points++}`

        }else if(!this.wasClicked && bombs.includes(Number(this.innerHTML))){

            for (let i = 0; i < bombs.length; i++) {               
                
            document.querySelector(`.game-number:nth-child(${bombs[i]})`).classList.add("bomb");
                
            }

            // Gestione Game Over
            gameText.innerHTML = `Hai perso! Il tuo punteggio finale è di: ${points}`;  

            setTimeout(function(){
                alert("Che peccato! Premi OK per riprovare!");
                window.location.reload();
            }, 200);
     
        }

    });

    cells.push(Number(gameCell.innerHTML));

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

// Dichiarazione testo di gioco
const gameText = document.querySelector(".game-text");

// Variabile per contenere il numero estratto randomicamente
let rndNumber;

let cells = [];

// Array dei numeri random
let bombs = [];

// Booleano per capire lo stato della cella
let wasClicked = false;

// Contatore per il punteggio
let points = 1;

playButton.addEventListener("click", function(){

    if(gameMode.value === "easy"){

        // Reset container numeri
        gameTable.innerHTML = "";

        // Impostazione numeri in base alla difficoltà
        gameModeSettings(100, "easy");

        // Spawn Bombe
        bombsSpawn(100);

    }else if(gameMode.value === "medium"){

        // Reset container numeri
        gameTable.innerHTML = "";

        // Impostazione numeri in base alla difficoltà
        gameModeSettings(81, "medium");

        // Spawn Bombe
        bombsSpawn(81);

    }else if(gameMode.value === "hard"){

        // Reset container numeri
        gameTable.innerHTML = "";

        // Impostazione numeri in base alla difficoltà
        gameModeSettings(49, "hard");

        // Spawn Bombe
        bombsSpawn(49);
    }

});
