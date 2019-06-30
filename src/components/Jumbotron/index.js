import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container-fluid">
                <h1 className="display-4">Star Wars Clicky Game</h1>
                <p className="lead">Test your memory out with this game. Try to not click on the same image twice or you loose.</p>
                <hr className="my-4"></hr>
                <div className="score">
                    <h4>Score: {props.score}</h4>
                    <br></br>
                    <h4>Highscore: {props.highscore}</h4>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;