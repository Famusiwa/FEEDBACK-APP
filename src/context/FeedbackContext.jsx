import {createContext, useState, useEffect} from 'react'
import Swal from "sweetalert2"
const FeedbackContext = createContext()

export function FeedbackProvider({children}) {
    const [isLoading, setIsLoading] = useState(true)
    const [Feedback, setFeedback] = useState([])

    useEffect(() => {
      const timer = setTimeout(() => {
        fetchFeedback()
        setIsLoading(false)
      }, 1000)
      return () => clearTimeout(timer);
    }, [])

    const fetchFeedback = async () =>{
      const response = await fetch(`/feedback?_sort=id&_order=desc`) // proxy on vite.config.js
      const data = await response.json()
      setFeedback(data)
      setIsLoading(false)
    }

    const [FeedbackEdit, setFeedbackEdit] = useState({
      data: {},
      edit: false
    })

    // Add Feedback
    const addFeedback = async (newFeedback) => {
       const response = await fetch(`feedback`, {
        method: 'post',
        header: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newFeedback)
       })
       const addData = await response.json()
        setFeedback([addData, ...Feedback]);
    }
    //Update Feedback
    const updateFeedback = async (id, updData) => {
      const response = await fetch(`/feedback/${id}`, {
        method: 'put',
        header: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updData)
       })
       const updateData = await response.json()
        setFeedback(
          Feedback.map((data) => (data.id === id ? { ...data, ...updateData}: data))
        )
    }
    // Delete Feedback
    const deleteFeedback =async (id) => {
      await fetch(`/feedback/${id}`, {method: 'delete'})
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            setFeedback(Feedback.filter((data) => data.id !== id )) // Perform delete action
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
          }
        });
    }
    const editFeedback = (data) => {
      setFeedbackEdit({
        data,
        edit: true
      })
    }
  return (
    <FeedbackContext.Provider
         value={{
          Feedback,
          FeedbackEdit,
          isLoading,
          deleteFeedback,
          addFeedback,
          editFeedback,
          updateFeedback
        }}
    >
        {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
