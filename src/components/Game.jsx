import React from 'react';
import {useState} from 'react';
import Title from './Title';
import Images from './Images';

export default function Game(props) {

  const [playerCards, setPlayerCards] = useState([]);
  const [computerCards, setComputerCards] = useState([]);
  const [showPlayerCard, setShowPlayerCard] = useState('');
  const [showComputerCard, setShowComputerCard] = useState('');
  const [startGameBtn, setStartGameBtn] = useState(false);
  const [showGame, setShowGame] = useState(true);
  const [shoNextBtn, setShoNextBtn] = useState(true);
  const [finishGameBtn, setFinishGameBtn] = useState(true);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [title, setTitle] = useState('Are you ready for WAR?!');
  const [roundNum, setRoundNum] = useState(0);
  const [gameBtnName, setGameBtnName] = useState('Start');
  
  const shuflleCards = () =>{
    let deckOfCards= [];
    let letter = 'A';
    for(let i = 1; i <= 13; i++)
    {
      for(let j = 1; j <= 4; j++)
      {
        deckOfCards.push(letter + (i+1));
        letter = String.fromCharCode(letter.charCodeAt(0) + 1);
      }
      letter = 'A';
    }
    
    let pCards = [];
    let cCards = [];
    let counter = 51;
    for (let i = 0; i < 26; i++)
    {
      let rnd = Math.floor(Math.random() * counter);
      pCards.push(deckOfCards[rnd]);
      deckOfCards.splice(rnd, 1);
      counter--;
    }

    for (let i = 0; i < 26; i++)
    {
      let rnd = Math.floor(Math.random() * counter);
      cCards.push(deckOfCards[rnd]);
      deckOfCards.splice(rnd, 1);
      counter--;
    }

    setPlayerCards(pCards);
    setComputerCards(cCards);
    setStartGameBtn(true);
    setShoNextBtn(false);
    setShowGame(false);
    setShowPlayerCard('black_joker');
    setShowComputerCard('red_joker');
    setTitle('THIS IS WAR!!!');
    setRoundNum(0);
  }


  const play = () =>{
    setGameBtnName('Next');
    setRoundNum(roundNum+1);    
    setShowPlayerCard(playerCards[0]);
    setShowComputerCard(computerCards[0]);
    let numOfPlayerCard;
    let numOfComputerCard;
    numOfPlayerCard = parseInt(playerCards[0].slice(1));
    numOfComputerCard = parseInt(computerCards[0].slice(1));
    if(numOfPlayerCard > numOfComputerCard)
    {
      setPlayerScore(playerScore+1);
    }
    else if(numOfComputerCard > numOfPlayerCard)
        {
          setComputerScore(computerScore+1);
        }

    playerCards.splice(0,1);
    computerCards.splice(0,1);

    if(playerCards.length == 0)
    {
      setGameBtnName('Start');
      setShoNextBtn(true);
      setFinishGameBtn(false);
      if(computerScore <= playerScore)
      {
        props.whoWon(true);
      }
      else
      {
        props.whoWon(false);
      }
    }
    
  }

  const resultPage = () =>{
    props.changePage("score");
  }

  return (
    <div>
      <Title title={title}/>
      <h2 hidden={showGame}>Round Number: {roundNum}</h2>
      <div hidden={showGame} id='boardGame'>
        <p><span id='playerNameTags'>{props.playersName}</span> <Images imageSrc = {showPlayerCard}/></p>
        <p> <Images imageSrc = {showComputerCard}/> <span id='computerNameTags'>Computer</span></p>
      </div>
      <h2 hidden={showGame}>Score:</h2>
      <p hidden={showGame}><h3>Player: {playerScore}|{computerScore} :Computer</h3></p>
      <button className='btns' hidden={startGameBtn} onClick={shuflleCards}>Let's Go!</button>
      <button className='btns' hidden={shoNextBtn} onClick={play}>{gameBtnName}</button>
      <button className='btns' hidden={finishGameBtn} onClick={resultPage}>Finish</button>
    </div>
  )
}
