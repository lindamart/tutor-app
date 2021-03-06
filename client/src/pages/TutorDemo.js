// Imports
import React, { useEffect, useState } from 'react'
import TutorCard from '../components/TutorCard'
import VideoCard from '../components/VideoCard'
import GameCard from '../components/GameCard'

// Tutor
export default function TutorDemo() {
  const [subject, setSubject] = useState("none")
  const [resource, setResource] = useState("tutors")
  const [tutors, setTutors] = useState([])
  useEffect(() => {
    const updateTutors = async () => {
      const response = await fetch("/api/tutor")
      const data = await response.json()
      setTutors(data)
    }
    updateTutors()
  }, [])

  // Videos
  const [videos, setVideos] = useState([])
  useEffect(() => {
    const updateVideos = async () => {
      const response = await fetch("/api/video")
      const data = await response.json()
      setVideos(data)
    }
    updateVideos()
  }, [])



  // Games
  const [games, setGames] = useState([])
  useEffect(() => {
    const updateGames = async () => {
      const response = await fetch("/api/game")
      const data = await response.json()
      setGames(data)
    }
    updateGames()
  }, [])

  const subjectTutors = tutors.filter((tutor) => {
    return tutor.subject === subject
  })

  const subjectVideos = videos.filter((video) => {
    return video.subject === subject
  })

  const subjectGames = games.filter((game) => {
    return game.subject === subject
  })

  useEffect(() => {
    const subjectResources = {
      videos: subjectVideos,
      tutors: subjectTutors,
      games: subjectGames
    }
    if (subjectResources[resource].length === 0) {
      setResource("tutors")
    }
  }, [resource, subjectVideos, subjectTutors, subjectGames])

  // Option Dropdown
  return (
    <div>
      <select value={subject} onChange={(e) => {
        console.log(e.target.value)
        setSubject(e.target.value)
      }}>
        <option value="none">Please select a Subject</option>
        <option value="javascript">JavaScript</option>
        <option value="css">CSS</option>
        <option value="apis">APIs</option>
        <option value="mern">MERN</option>
        <option value="sql">SQL</option>
        <option value="react">React</option>
      </select>
      {/* Button Selection once tutors populated */}
      {subjectTutors.length > 0 && <button onClick={() => { setResource("tutors") }}>Tutors</button>}
      {subjectVideos.length > 0 && <button onClick={() => { setResource("videos") }}>Videos</button>}
      {subjectGames.length > 0 && <button onClick={() => { setResource("games") }}>Games</button>}

      {/* Tutor/Video/Games to card */}
      {resource === "tutors" && <div className='tutor list'>
        {subjectTutors.map((tutor) => {
          return <TutorCard tutor={tutor} />
        })}
      </div>}
      {resource === "videos" && <div className='video list'>
        {subjectVideos.map((video) => {
          return <VideoCard video={video} />
        })}
      </div>}
      {resource === "games" && <div className='game list'>
        {subjectGames.map((game) => {
          return <GameCard game={game} />
        })}
      </div>}
    </div>
  )
}
