import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
function FeedbackStats() {
  const {Feedback} = useContext(FeedbackContext)
    let average = Feedback.reduce((acc, cur)=> {
        return acc + cur.rating
    }, 0)/ Feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '') // round up the value to 1 decimal places and remove value of .0 
    // average = Math.round(average) // round up the value to whole number
  return (
    <div className="feedback-stats">
      <h4>{Feedback.length}Review</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
