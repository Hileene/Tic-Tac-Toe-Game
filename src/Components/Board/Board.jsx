import React from 'react'
import Tile from '../Tile/Tile'
import Strike from '../Strike/Strike'
import './Board.css'

function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
  return (
    <div className="board">
      <div className="row">
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(0)}
          value={tiles[0]}
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(1)}
          value={tiles[1]}
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(2)}
          value={tiles[2]}
        />
      </div>
      <div className="row">
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(3)}
          value={tiles[3]}
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(4)}
          value={tiles[4]}
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(5)}
          value={tiles[5]}
        />
      </div>
      <div className="row">
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(6)}
          value={tiles[6]}
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(7)}
          value={tiles[7]}
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(8)}
          value={tiles[8]}
        />
      </div>

      <Strike strikeClass={strikeClass} />
    </div>
  )
}

export default Board
