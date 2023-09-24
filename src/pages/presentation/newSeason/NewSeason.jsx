import "./newSeason.css";
import Clock from "./clock/Clock";
import React, { useEffect } from "react";
import imagen1 from "./../../../assets/img.png";
import imagen2 from "./../../../assets/img3.png";
import BubbleGame from './bubbleGame/BubbleGame';
import imagen3 from "../../../assets/game/gameplay1.png"
import imagen4 from "../../../assets/game/gameplay2.png"
import imagen5 from "../../../assets/game/gameplay3.png"
import imagen6 from "../../../assets/game/gameplay4.png"

function NewSeason({ themeText, selectedItem={selectedItem}}) {
  return (
    <div className="newseason-container">
      <div className="season-name">
        <h3 className="season-title">{selectedItem && selectedItem.name ? selectedItem.name : "Fortnite New Season"}</h3>
        <p className="seasonn-sub-title">Join Live Stream</p>
      </div>
      <Clock></Clock>

      <div className="game-img">
        
        {themeText === "Tema oscuro"? 
          <BubbleGame top = {90} left={20} animation={"moveUpAndDown2"} image = {imagen4} nameIcon = {"FaEye"}></BubbleGame>
          : 
          <BubbleGame top = {10} left={30} animation={"moveUpAndDown2"} image = {imagen3} ></BubbleGame>
        }
        {themeText === "Tema oscuro"? 
          <BubbleGame top = {10} right={30} animation={"moveUpAndDown"} image = {imagen5}></BubbleGame>
          : 
          <BubbleGame top = {90} right={20} animation={"moveUpAndDown"} image = {imagen6} nameIcon = {"FaHeart"}></BubbleGame>
        }
        <img
          src={themeText === "Tema oscuro" ? imagen2 : imagen1}
          alt="Season Image"
        />
      </div>
    </div>
  );
}

export default NewSeason;
