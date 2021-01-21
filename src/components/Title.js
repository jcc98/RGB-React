import React, { useState } from "react";

function Title() {


    return (
        

        <div id="start-title" className="container">
            <h1 className="title">RGB Quiz</h1>
            <h2 className="rules">ルール</h2>
            <p className="exp">Guess the designated RGB color. Max score is 10. One point is substracted each time you pick the wrong answer.</p>
        </div>
    )
}

export default Title
