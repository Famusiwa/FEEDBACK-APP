function Header({text= 'Feedback UI', bgColor ='rgba(0,0,0,0.4)', textColor = '#ff6a95'}){ //ES6 Default Parameter
  const headerstyling = {
        backgroundColor: bgColor,
        color: textColor
         
    }
    return (
      <header style={headerstyling}>
        <div className="container">
          <h2>{text}</h2>
        </div>
      </header>
    )
  }
//   Header.defaultProps = {
//     text: 'Hello Client',
//   } 

  export default Header




  
  //TypeScript Alternative
        
  // type HeaderProps = {
  //   text?: string;
  //   bgColor?: string;
  //   textColor?: string;
  // };

  // const Header: React.FC<HeaderProps> = ({
  //   text = 'Feedback UI',
  //   bgColor = 'rgba(0,0,0,0.4)',
  //   textColor = '#ff6a95',
  // }) => {
  //   const headerStyling: React.CSSProperties = {
  //     backgroundColor: bgColor,
  //     color: textColor,
  //   };

  //   return (
  //     <header style={headerStyling}>
  //       <div className="container">
  //         <h2>{text}</h2>
  //       </div>
  //     </header>
  //   );
  // };

  // export default Header;

          