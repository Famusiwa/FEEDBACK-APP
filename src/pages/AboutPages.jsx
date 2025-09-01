import Card from "../components/shared/Card"
import { Link } from "react-router-dom"
function AboutPages() {
  return (
    <Card>
        <div className="about">
            <h1>About this Page</h1>
            <p>This is a React App to leave feedback for a product and services</p>
            <p>Version 1.00</p>

            <p>
                <Link to='/'>Back to Home
                </Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPages
 