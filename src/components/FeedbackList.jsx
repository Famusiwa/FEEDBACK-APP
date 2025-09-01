import { useContext} from "react"
import FeedbackItem from "./FeedbackItem"
import Spinner from "./shared/Spinner"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackList() {
  
  const { Feedback, isLoading  } = useContext(FeedbackContext)
    if(!isLoading && (!Feedback || Feedback.length === 0)){
        return <p>No Feeback Yet</p>
    }
   
    return isLoading ? (
    <Spinner />
  ) : ( 
    <div className="feedback-list">  
      {Feedback.map((data) => (
          <FeedbackItem key={data.id} data = {data} />
      ))}
      
    </div>)
  
}

export default FeedbackList

