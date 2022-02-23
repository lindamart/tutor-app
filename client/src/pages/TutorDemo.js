import React, { useEffect, useState } from 'react'
import TutorCard from '../components/TutorCard'
// import Card from 'react-bootstrap/Card'

export default function TutorDemo() {
  const [subject, setSubject] = useState("none")
  const [tutors, setTutors] = useState([])
  useEffect(() => {
    const updateTutors = async () => {
      const response = await fetch("/api/tutor")
      const data = await response.json()
      setTutors(data)
    }
    updateTutors()
  }, [])
    
  return (
    <div>
      <select value={subject} onChange={(e) => {
        console.log(e.target.value)
        setSubject(e.target.value) }}>
        <option value="none">Please select a Subject</option>
        <option value="javascript">JavaScript</option>
        <option value="css">CSS</option>
        <option value="apis">APIs</option>
        <option value="mern">MERN</option>
        <option value="sql">SQL</option>
        <option value="react">React</option>
      </select>
      <div className='tutorList'>
        {tutors.filter((tutor) => {
          return tutor.subject === subject
        }).map((tutor) => {
          return <TutorCard tutor={tutor}/>
          
        })}
      </div>
      
    </div>
    
  )
}
