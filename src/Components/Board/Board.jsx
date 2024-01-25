import React from 'react'
import Tiles from '../Tile/Tile'
import Strike from '../Strike/Strike'
import './Board.css'

function Board() {
  return (
    <div>
        <Tiles/>
        <Tiles/>
        <Tiles/>
        <Tiles/>
        <Tiles/>
        <Tiles/>
        <Tiles/>
        <Tiles/>
        <Tiles/>
        <Strike/>
    </div>
  )
}

export default Board