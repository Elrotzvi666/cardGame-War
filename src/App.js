import './App.css';
import Home from './components/Home';
import Game from './components/Game';
import Score from './components/Score';
import { useState } from 'react';


function App() {

const [playerName, setPlayerName] = useState('');
const pages = {home: 'home', game: 'game', score: 'score'};
const [currentPage, setCurrentPage] = useState(pages.home);
const [winCount, setWinCount] = useState(0);
const [loseCount, setLoseCount] = useState(0);
const [playerData, setPlayerData] = useState([{name: '', wins: 0, loses: 0}]);

const savePlayerName = pName => setPlayerName(pName);
const resettWinsCount = resetWins => setWinCount(resetWins);
const resettLosesCount = resetLoses => setLoseCount(resetLoses);
const whoWon = result => {

  if(result)
  {
    setWinCount(winCount+1);
  }
  else
  {
    setLoseCount(loseCount+1);
  }
  // filetr by name - playerData

  let palyer = {
    name: playerName, wins: winCount, loses: loseCount
  }
  console.log(palyer);
  
  setPlayerData([...playerData, palyer])
};

const changePage = page => setCurrentPage(page);

const displayPage = () =>{
  switch(currentPage)
  {
    case pages.home:
      return <Home savePlayerName={savePlayerName} changePage={changePage} resettWinsCount={resettWinsCount} resettLosesCount={resettLosesCount}/>

    case pages.game:
      return <Game changePage={changePage} whoWon={whoWon} playersName={playerName}/>

    case pages.score:
      return <Score changePage={changePage} winCount={winCount} loseCount={loseCount}/>
  }
  
}


  return (
    <div className="App">
      {displayPage()}
    </div>
  );
}

export default App;
