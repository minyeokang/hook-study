import React from 'react'

const Content = ({isDark}) => {
  return (
    <div className="content" style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black'
    }}>
        <p>have a nice day</p>
    </div>
  )
}

export default Content