import React from 'react'

export default function Board2({assignDice, playerOneTurn, playerTwoState}) {
  return (
    <div className='board-container'>
        <div style={{ pointerEvents: playerOneTurn ? "none" : "auto" }} className="board" id="board2">
            <img className="tile" id="1" onClick={assignDice} src={playerTwoState[0].source}></img>
            <img className="tile" id="2" onClick={assignDice} src={playerTwoState[1].source}></img>
            <img className="tile" id="3" onClick={assignDice} src={playerTwoState[2].source}></img>
            <img className="tile" id="4" onClick={assignDice} src={playerTwoState[3].source}></img>
            <img className="tile" id="5" onClick={assignDice} src={playerTwoState[4].source}></img>
            <img className="tile" id="6" onClick={assignDice} src={playerTwoState[5].source}></img>
            <img className="tile" id="7" onClick={assignDice} src={playerTwoState[6].source}></img>
            <img className="tile" id="8" onClick={assignDice} src={playerTwoState[7].source}></img>
            <img className="tile" id="9" onClick={assignDice} src={playerTwoState[8].source}></img>
        </div>
    </div>
  )
}
