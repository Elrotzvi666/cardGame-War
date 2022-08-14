import React from 'react'
import { useState } from 'react';
import Title from './Title';

export default function Home(props) {


    const [name, setName] = useState('');
    const [userNameErr, setUserNameErr] = useState('');
    const [btnDisable, setBtnDisable] = useState(true);
    const [disabledBtnID, setDisabledBtnID] = useState('disabledBtn')
    

    const isNameValid = (event) =>{
        let input = event.target.value;
        if(input.length <= 2)
        {
            setUserNameErr('Player name must be 2 characters or up');
            setBtnDisable(true);
            setDisabledBtnID('disabledBtn');
        }
        else
        {
            setUserNameErr('');
            setBtnDisable(false);
            setDisabledBtnID('');
            setName(input);
        }
    }

    const startGame = ()=>{
        props.resettWinsCount(0);
        props.resettLosesCount(0);
        props.savePlayerName(name);
        props.changePage("game");
    }

  return (
    <div>
        <Title title={"Welcome"}/>
        <label className='startField' for="playerName">Please type your name:</label><br/><br/>
        <input className='startField' id='startInput' type={'text'} name='playerName' placeholder={'Your name'} onChange={isNameValid}/><br/><br/>
        <span className='errMsgPlayerName'>{userNameErr}</span>
        <br/><br/>
        <button className='btns' id={disabledBtnID} disabled={btnDisable} onClick={startGame}>Start</button>
    </div>
  )
}
