import React from 'react'
import YouTubeVideo from './YouTubeVideo'

// Card Setup for Videos
export default function VideoCard({ video }) {
  return (
    <div className='video card'>
      <div className='cardHeader'>
        <div>{video.title}</div>
      </div>
      <div className='cardBody'>
        <YouTubeVideo link={video.link}/>
      </div>
      <div className='cardFooter'>{video.subject}</div>
    </div>
  )
}
