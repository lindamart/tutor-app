import React from 'react'
import gameIcon from "../assets/game_icon.svg"

// Card Setup for Games
export default function GameCard({ game }) {
  return (
    <div className='game card'>
      <div className='cardHeader'>
        <div>{game.title}</div>
      </div>
      <div className='cardBody flex-row justify-center'>
        <img className='pointer' src={gameIcon} alt={game.title} onClick={() => {window.open(game.link)}} />
      </div>
      <div className='cardFooter'>{game.subject}</div>
    </div>
  )
}
