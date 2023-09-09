import React from 'react'

const Welcome = () => {
    const randomName = () => {
        const names = ['afi', 'ama', 'naa']
        const int = Math.floor(Math.random() * 3)
        return names[int]
      }
    const welcomeStyle = {
        backgroundColor : 'blue',
        color : 'white',
        padding : '10px'
    }
  return (
    <div style={welcomeStyle}>
      <h2>Welcome {randomName()}</h2>
    </div>
  )
}

export default Welcome
