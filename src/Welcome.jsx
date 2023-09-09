import React from 'react'

const Welcome = () => {
    const randomName = () => {
        const names = ['afi', 'ama', 'naa']
        const int = Math.floor(Math.random() * 3)
        return names[int]
      }
  return (
    <div>
      <h2>Welcome {randomName()}</h2>
    </div>
  )
}

export default Welcome
