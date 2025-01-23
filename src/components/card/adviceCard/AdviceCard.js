import React from "react";
import "./AdviceCard.scss";
import { useAdviceContext } from "../../../context/adviceContext";

const AdviceCard = () => {
    const { advice, fetchAdvice } = useAdviceContext();

    return (
        <div className="main-container">
            <div className="card-container">
                <p className="advice-title">advice #{advice.id}</p>
                <div className="advice-quote">
                <p>"{advice.advice}"</p>
                </div>
                <img src='../../../../../pattern-divider-desktop.svg' alt="divider-icon" className="card-divider"/>
            </div>
            <div className="button-container" onClick={()=> fetchAdvice()}>
                <img src='../../../../../icon-dice.svg' alt="dice-icon" />
            </div>
        </div>
    )
}

export default AdviceCard;