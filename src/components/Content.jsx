import { useContext, useState } from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext'

const Content = () => {
    const {isDark} = useContext(ThemeContext)
    const user = useContext(UserContext)

    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true)
    const location = useMemo(()=>{
        return { 
            country : isKorea ? 'korea' : 'thailand'
        }
    }, [isKorea])
   
    useEffect(()=>{
        console.log('test')
    },[location])
    
    

  return (
    <>
   
    <div className="content" style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black'
    }}>
        

    <p>increase number</p>
    <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
    <p>country: {location.country}</p>
    <button onClick={()=>setIsKorea(!isKorea)}>change</button>
        <p>have a nice day {user}</p>
    </div>
    </>
  )
}

export default Content