import React from 'react'

// Card Setup for Games
export default function GameCard({ game }) {
  return (
    <div className='game card'>
      <div className='cardHeader'>
        <div>{game.title}</div>
      </div>
      <div className='cardBody'>{game.link}</div>
      <div className='cardFooter'>{game.subject}</div>
    </div>
  )
}