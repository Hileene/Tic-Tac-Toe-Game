import React, { useState } from 'react'
import Board from '../Board/Board'
import './TicTacToe.css'

const playerX = 'X'
const playerO = 'O'

function TicTacToe() {
  /*Estlablish the state of the tiles */
  const [tiles, setTiles] = useState(Array(9).fill(null))
  const [playerTurn, setPlayerTurn] = useState(playerX)

  /* Handling the click depending on the player's turn */
  /*This arrow function will indicate which tile is being clicked */
  const handleTileClick = (index) => {
    /*Here it allows us to prevent adding another value in the tiles if there is one already*/
    if (tiles[index] !== null) {
      return
    }

    /*Place the current player's turn inside of the board when we click*/
    /*To achieve that make a copy of the tile array: "newTiles is equal to a copy of the tiles array*/
    const newTiles = [...tiles]
    /*Then within the newTiles array using the index, we're going to find the value that 's here */
    newTiles[index] = playerTurn
    /*Finally, we need to update the tiles*/
    setTiles(newTiles)

    /*To alternate between 'X' and 'O', we going to check the actual current player's turb*/
    if (playerTurn === playerX) {
      setPlayerTurn(playerO)
    } else {
      setPlayerTurn(playerX)
    }
  }

  return (
    <div>
      <h1>Tic Tac Toc</h1>
      <Board tiles={tiles} onTileClick={handleTileClick} />
    </div>
  )
}

export default TicTacToe
