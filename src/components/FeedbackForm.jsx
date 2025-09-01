import { useState, useContext, useEffect } from "react"
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"
import FeedbackContext from "../context/FeedbackContext"
function FeedbackForm() {
  const {addFeedback, FeedbackEdit, updateFeedback} = useContext(FeedbackContext)
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    useEffect( () => {
      if(FeedbackEdit.edit === true){
        setBtnDisabled(false),
        setText(FeedbackEdit.data.text),
        setRating(FeedbackEdit.data.rating)
      }
    }, [FeedbackEdit])

    const handleTextChange = (e) => {
      if(text === ''){
        setBtnDisabled(true)
        setMessage(null)
      }
      else if(text !== '' && text.trim().length <= 10){
        setMessage('Text must be at least 10 characters')
        setBtnDisabled(true)
      }
      else{
        setBtnDisabled(false)
        setMessage(null)
      }
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      if(text.trim().length > 10){
        const newFeedback = {
          text,
          rating
        }
        if(FeedbackEdit.edit === true){
          updateFeedback(FeedbackEdit.data.id, newFeedback)
        }else{
          addFeedback(newFeedback);
        }
       
        
        setText('')
        
      }
      
      
    }
    
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3>How would you rate your service with us</h3>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
            <input type="text" onChange={handleTextChange} value={text} placeholder="Write a review" />
            <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
