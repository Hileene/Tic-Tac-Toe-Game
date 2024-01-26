import React from 'react'
import './Reset.css'
import GameState from '../GameState'

function Reset({ gameState, onReset }) {
  // This allow the reset button to only appear when the game is over
  if (gameState === GameState.inProgress) {
    return
  }
  return (
    <button onClick={onReset} className="reset-button">
      Reset
    </button>
  )
}

export default Reset
