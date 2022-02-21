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
      <div>
        {tutors.map((tutor) => {
          return <div>{tutor.name}</div>
          
        })}
      </div>
      
    </div>
    
  )
}


// Hero Image **************************************************************************
// const Hero = (props) => {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
  
//   const style = {
//     'position': 'fixed',
//     'top': 0, 
//     'left': 0,
//     'min-width': '100%',
//     'min-height': '100%'
//   }
  
//   return(
//     <div style={style}>
//       <img src={`https://unsplash.it/${width}/${height}?image=${props.number}`} style={style}/>
//     </div>
//   )
// }

// const App = () => {
//   return(
//     <div>
//       <Hero name='hero' number={1054} />
//     </div>
//   )
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );


// Card with button ***********************************************************
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