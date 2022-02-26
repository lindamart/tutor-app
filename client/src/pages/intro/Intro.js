import { Link } from "react-router-dom"
import "./intro.css"

export default function intro() {
    return (
        <div className="header-waper">

            <div className='intro' id="intro">


                <h1>
                    Welcome to Turbo Tech Tutor Academy or Triple T Academy for short, where you can learn all things coding, Turbo style. </h1>
                    <h2>Here you have access to Turbo Tutors, cool "How to" videos, and fun and exciting games to help you learn!</h2>

                <div className="btncolor"><Link to="/resources" >Resources</Link></div>

            </div>


        </div>

    )
}
