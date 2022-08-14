import React from 'react'
import Title from './Title';

export default function Score(props) {

  const gamePage = () => {
    props.changePage("game");
  }

  const homePage = () => {
    props.changePage("home");
  }

  return (
    <div>
        <Title title={"Score:"}/>
        <h1>Wins / Loses</h1>
        <h2> {props.winCount} | {props.loseCount} </h2>
        <button className='btns' onClick={gamePage}>Again?</button><br/><br/>
        <button className='btns' onClick={homePage}>Exit</button>
    </div>
  )
}
