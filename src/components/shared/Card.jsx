
const Card = ({children, reverse =false}) => {
    //Conditional className
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div> // Conditional ClassName
  )

// return(
//     //Conditional Styles
//     <div className="card" style={{
//         backgroundColor: reverse ?'rgba(0,0,0,0.4)'  : '#fff',
//         color: reverse ? '#fff' : '#000',
//     }}>{children}</div>
// )
}

export default Card
