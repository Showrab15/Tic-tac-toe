import { useEffect, useState } from 'react'

import './App.css'
import Square from './components/Square/Square'
import { Patterns } from './components/Patterns/Patterns'

function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])
const [player, setPlayer] = useState('X')
const [result, setResult] =useState({winner: 'none', state: 'none'});

console.log(result.winner)
useEffect(()=>{
  checkWin();
  checkIfTie();
    if(player == 'X'){
      setPlayer('O')
    }
    else{
      setPlayer('X')
    }
}, [board])


useEffect(()=>{
 if(result.state != 'none'){
  alert(`Game Finished ! Winning Player ${result.winner}`);
  restartGame()
 }

},[result])



  const chooseSquare = (square)=>{
    setBoard(board.map((value, idx) => {
if(idx == square && value == ''){
  return  player
}

return value
    }))


  }


const checkWin = ()=>{
  Patterns.forEach((currentPattern)=>{
    const firstPlayer = board[currentPattern[0]];
    if(firstPlayer == "" ) return;


    let findWinningPattern = true;
    currentPattern.forEach((idx)=>{
      if(board[idx]!= firstPlayer){
        findWinningPattern = false
      }
    })

    if(findWinningPattern){
setResult({winner : player, state: "won"})
    }

  })
}


const checkIfTie = ()=>{
  let filled = true;
  board.forEach((square)=>{
    if(square == ""){
      filled = false 
    }
  })

  if(filled){
    setResult({winner: "No One", state: "Tie"});
  }
}

const restartGame =()=>{
  setBoard(['', '', '', '', '', '', '', '', ''])
  setPlayer('X')
}

  return (
    <div className='app'>
     <div className="board">
      <div className="row">
<Square value={board[0]} chooseSquare={()=> chooseSquare(0)}></Square>
<Square value={board[1]} chooseSquare={()=> chooseSquare(1)}></Square>
<Square value={board[2]} chooseSquare={()=> chooseSquare(2)}></Square>
      </div>
      <div className="row">
<Square value={board[3]} chooseSquare={()=>  chooseSquare(3)}></Square>
<Square value={board[4]} chooseSquare={()=>  chooseSquare(4)}></Square>
<Square value={board[5]} chooseSquare={()=>  chooseSquare(5)}></Square>
      </div>
      <div className="row">
<Square value={board[6]} chooseSquare={()=>  chooseSquare(6)}></Square>
<Square value={board[7]} chooseSquare={()=>  chooseSquare(7)}></Square>
<Square value={board[8]} chooseSquare={()=>  chooseSquare(8)}></Square>
      </div>
     </div>
    </div>
  )
}



export default App
