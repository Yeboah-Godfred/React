import React from 'react'

const Footer = () => {
  const today = new Date()
  const FooterStyle = {
        backgroundColor : 'blue',
        color : 'white',
        padding : '10px'
    }
  return (
    <footer style={FooterStyle}>
        Copyright &copy; {today.getFullYear()}
    </footer>
  )
}

export default Footer
