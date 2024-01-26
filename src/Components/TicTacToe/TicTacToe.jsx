import React, { useState, useEffect } from 'react'
import Board from '../Board/Board'
import './TicTacToe.css'
import GameOver from '../GameOver/GameOver'
import GameState from '../GameState'

const playerX = 'X'
const playerO = 'O'

/*Here we defining an object thatcontains the winning combo and 'strikeClass' that we should show*/
const winninCombinations = [
  //Rows
  // This array is going to be the index of the 3 tiles that we should check for a winnin combination
  { combo: [0, 3, 6], strikeClass: 'strike-row-1' },
  { combo: [1, 4, 7], strikeClass: 'strike-row-2' },
  { combo: [2, 5, 8], strikeClass: 'strike-row-3' },

  //Columns
  { combo: [0, 1, 2], strikeClass: 'strike-column-1' },
  { combo: [3, 4, 5], strikeClass: 'strike-column-2' },
  { combo: [6, 7, 8], strikeClass: 'strike-column-3' },

  //Diagonals
  { combo: [0, 4, 8], strikeClass: 'strike-diagonal-1' },
  { combo: [6, 4, 2], strikeClass: 'strike-diagonal-2' },
]

function checkWinner(tiles, setStrikeClass, setGameState) {
  for (const { combo, strikeClass } of winninCombinations) {
    const tileValue1 = tiles[combo[0]]
    const tileValue2 = tiles[combo[1]]
    const tileValue3 = tiles[combo[2]]

    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      setStrikeClass(strikeClass)
      if (tileValue1 === playerX) {
        setGameState(GameState.playerXWins)
      } else {
        setGameState(GameState.playerOWins)
      }
      return
    }
  }
  //Here , we are using the "every" method which is going to be looping over every single tile
  const areAllTilesFilledIn = tiles.every((tiles) => tiles !== null)
  if (areAllTilesFilledIn) {
    setGameState(GameState.draw)
  }
}

function TicTacToe() {
  /*Estlablish the state of the tiles */
  const [tiles, setTiles] = useState(Array(9).fill(null))
  const [playerTurn, setPlayerTurn] = useState(playerX)
  const [strikeClass, setStrikeClass] = useState()
  const [gameState, setGameState] = useState(GameState.inProgress)

  /* Handling the click depending on the player's turn */
  /*This arrow function will indicate which tile is being clicked */
  const handleTileClick = (index) => {
    if (gameState !== GameState.inProgress) {
      return
    }
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

  /*Here we are going to check for a winner*/
  /*Our dependency list is going to include the 'tiles'. Everytime the tile change
  we are going to call 'checkWinner'*/
  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState)
  }, [tiles])

  return (
    <div>
      <h1>Tic Tac Toc</h1>
      <Board
        playerTurn={playerTurn}
        tiles={tiles}
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
      />
      <GameOver gameState={gameState} />
    </div>
  )
}

export default TicTacToe
