import React, { useState } from "react";

function GameUI() {

    let contTitle = "container container-change"
    let titleScreen = "container"
    let [status, changeStatus] = useState(true)
    if (status === false) {
        contTitle = "container"
        titleScreen = "container container-change"
    }
    let [score, changeScore] = useState(0)
    let [guessNb, changeGuessNb] = useState(0)

// Declare rgb arrays
let rgbObj = [];
let rgbFake1 = [];
let rgbFake2 = [];
let rgbFake3 = [];
let fourAnswers = [];
let rgbObjTitle;
// Count Variables
const totalGame = 10;
let width = 0;
let id;
let match;
    
// Shuffle array algo
function shuffle (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

// Gen 3x 3 RGB numbers
function genNumbers() {
    for (let i = 0; i < 3; i++) {
        rgbFake1[i] = Math.floor(Math.random() * 255);
        rgbFake2[i] = Math.floor(Math.random() * 255);
        rgbFake3[i] = Math.floor(Math.random() * 255);
        rgbObj[i] = Math.floor(Math.random() * 255);

    }
    fourAnswers.push(rgbFake1);
    fourAnswers.push(rgbFake2);
    fourAnswers.push(rgbFake3);
    fourAnswers.push(rgbObj);
    shuffle(fourAnswers);

};
genNumbers();



    return (
        
        <>
            <div id="start-title" className={titleScreen}>
            <h1 className="title">RGB Quiz</h1>
            <h2 className="rules">ルール</h2>
            <p className="exp">Guess the designated RGB color. Max score is 10. One point is substracted each time you pick the wrong answer.</p>
            <button onClick={() => changeStatus(status = false)}
      className="z-depth-2 waves-effect waves-light btn-large " id="btn">スタート</button>

        </div>
    <div id="game-ui" className={contTitle}>
        
            <div id="myProgress">
                <div className="my-bar" id="myBar"></div>
            </div>
            <p id="rgb" className="rgb">{`${rgbObj[0]}, ${rgbObj[1]}, ${rgbObj[2]}`}</p>
            <p id="guess">{`Questions left: ${guessNb}/10`}</p>
            <p id="score">{score}</p>
            <ul onClick={(e) => {
                        match = `rgb(${rgbObj[0]}, ${rgbObj[1]}, ${rgbObj[2]})`;
                    if (e.target.style.backgroundColor === match) {
                        changeScore(score++)
                        fourAnswers = [];
                        genNumbers();
                        clearInterval(id);
                        width = 0;
                        // myBar.style.width = width + "%";
                        // move();
                
                    } else {
                        changeScore(score--)
                    }
                    changeGuessNb(guessNb++)                
            }} id="ul">
                <li id="itemOne" style={{backgroundColor: `rgb(${fourAnswers[1]})`}} className="items"></li>
                <li id="itemTwo" style={{backgroundColor: `rgb(${fourAnswers[2]})`}} className="items"></li>
                <li id="itemThree" style={{backgroundColor: `rgb(${fourAnswers[3]})`}} className="items"></li>
                <li id="itemFour" style={{backgroundColor: `rgb(${rgbObj[0]}, ${rgbObj[1]}, ${rgbObj[2]})`}} className="items"></li>
            </ul>
    </div>
            <div id="game-over" className="game-over container-change">
            <h2>ゲームオーバー</h2>
            <a className="z-depth-2 waves-effect waves-light btn-large" id="restart">もう一回</a>
            <p id="game-over-text"></p>
        </div>
        </>
    )
}

export default GameUI
