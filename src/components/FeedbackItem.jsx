import { useContext } from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa'
import Card from "./shared/Card"
import FeedbackContext from '../context/FeedbackContext'
function FeedbackItem({data}) {
 const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    <Card>
        <div className="num-display">{data.rating}</div>
        <button className='close' onClick={() => deleteFeedback(data.id)}>
          <FaTimes color='purple'/>
        </button>
        <button className="edit" onClick={() => editFeedback(data)}>
          <FaEdit color='purple'/>
        </button>
        <div className="text-display">{data.text}</div>
    </Card>
  )
}

export default FeedbackItem

