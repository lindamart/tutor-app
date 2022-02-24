import React from 'react'

export default function TutorCard({ tutor }) {
  const firstName = tutor.name.split(" ")[0]
  const lastName = tutor.name.split(" ")[1]
  return (
    <div className='tutor card'>
      <div className='cardHeader'>
        <div>{firstName}</div>
        <div>{lastName}</div>
      </div>
      <div className='cardBody'>{tutor.description}</div>
      <div className='cardFooter'>{tutor.subject}</div>
    </div>

  )
}
