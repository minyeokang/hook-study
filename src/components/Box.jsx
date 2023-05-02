import { useEffect } from "react";
import { useState } from "react";

const Box = ({createBoxStyle}) => {
    const [style, setStyle] = useState({})
useEffect(()=>{
    console.log('testing')
    setStyle(createBoxStyle())
},[createBoxStyle])
  return (
    <div>
      <p>increase box</p>
   
      <div style={style}></div>
    </div>
  );
};

export default Box;
