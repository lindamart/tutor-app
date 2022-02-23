import React, { useEffect, useState } from 'react'
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
       <div className="marquee-outer">
      <div className="marquee-inner">
        <p>School is Cool!</p>
        <img src="//www.html.am/images/html-codes/marquees/fish-swimming.gif" width="94" height="88" alt="Swimming fish"/>
      </div>
        </div>
        <div className="marquee-outer">
      <div className="marquee-inner-2">
        <p>Find your tutor!</p>
        <img src="//www.html.am/images/html-codes/marquees/fish-swimming.gif" width="94" height="88" alt="Swimming fish"/>
      </div>
      <div className="marquee-inner-3">
        <p>Today is a good day!</p>
        <img src="//www.html.am/images/html-codes/marquees/fish-swimming.gif" width="94" height="88" alt="Swimming fish"/>
      </div>
        </div>
      <select value={subject} onChange={(e) => { setSubject(e.target.value) }}>
        <option value="none">Please select a Subject</option>
        <option value="javascript">JavaScript</option>
        <option value="css">CSS</option>
        <option value="apis">APIs</option>
        <option value="mern">MERN</option>
        <option value="sql">SQL</option>
        <option value="react">React</option>
      </select>
      <div>
        {tutors.map((tutor) => {
          return <div>{tutor.name}</div>
          
        })}
      </div>
      
    </div>
    
  )
}


// {/* <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//      NEED TUTOR NAME, DESCRIPTION 
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card> */}