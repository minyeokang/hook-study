import { useState, useRef, useEffect } from 'react'

function Input() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()
  //useRef는 변수 저장할때 사용할 수 있음 (렌더링할때마다 업데이트 시키고싶지 않을 때)
  useEffect(()=>{
    inputRef.current.focus()
    console.log(inputRef.current.value)
  })
  //useEffect는 두번째 인자가 없으면 매번 재렌더링, 빈 배열이면 마운트 시 한번만, 디펜던시 들어가면 그 해당 값이 업데이트될때만. 
  const login = () => {
    alert(`hello ${inputRef.current.value}`)
    inputRef.current.value = ''
    inputRef.current.focus()
  }
  //useContext는 최상위 부모에서 일일이 하나씩 props로 안넘겨줘도 되게끔 하는 contextAPI 
  return (
    <>
      <div>
       <input ref={inputRef} type="text"placeholder='name' />
       <button onClick={login}></button>
      </div>
      <h1 className='hello'>Vite + React</h1>
      <div className="card">
        <button className='count-btn' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default Input
