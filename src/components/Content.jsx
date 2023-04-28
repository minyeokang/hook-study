import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext'

const Content = () => {
    const {isDark} = useContext(ThemeContext)
    const user = useContext(UserContext)
  return (
    <div className="content" style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black'
    }}>
        <p>have a nice day {user}</p>
    </div>
  )
}

export default Content