import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Box from "./Box";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useCallback } from "react";

const Page = () => {
  const {isDark, setIsDark} = useContext(ThemeContext)
  const [size, setSize] = useState(100);
  const createBoxStyle = useCallback(()=> {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  },[size]) 
  return (
    <>
      <div className="page">
        <Header  />
        <input type="number" value={size} onChange={(e)=>setSize(e.target.value)} />
        <button onClick={()=>{setIsDark(!isDark)}}>change theme</button>
        <Box createBoxStyle={createBoxStyle} />
        <Content />
        <Footer />
      </div>
    </>
  );
};

export default Page;
