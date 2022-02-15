import React, { useState } from 'react'

export default function TutorDemo() {
  const[subject, setSubject]=useState("none")
  return (
    <div>
      <select value={subject} onChange={(e)=>{setSubject(e.target.value)}}>
        <option value="none">Please select a Subject</option>
        <option value="javascript">JavaScript</option>
        <option value="css">CSS</option>
        <option value="apis">APIs</option>
        <option value="mern">MERN</option>
        <option value="sql">SQL</option>
        <option value="react">React</option>
      </select>
    </div>
  )
}
