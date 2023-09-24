import React from 'react';
import './bubbleGame.css';
import { FaHeart } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';

const BubbleGame = (props) => {
  
  const styles = {
    position: "absolute",
    top : props.top,
    left: props.left,
    right: props.right,
    animationName: props.animation
  }
  
  return (
    <div className='bubblegame' style={styles}>
      <img src={props.image} alt="Bubble Game" />
      {props.nameIcon === "FaHeart" ? <div className='bubblegame-icon'><FaHeart></FaHeart></div>: null}
      {props.nameIcon === "FaEye" ? <div className='bubblegame-icon'><FaEye></FaEye></div>: null}
      
    </div>
  );
}

export default BubbleGame;

