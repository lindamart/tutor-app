import React from 'react'

// YouTube video visual setup for Video card
export default function YouTubeVideo({link}) {
  return (
    <iframe width="100%" height="100%" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  )
}
