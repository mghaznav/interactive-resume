import { createContext, useState, useEffect } from "react";

export const ScreenContext = createContext({
  screenHeight: 0,
  screenWidth: 0
});

export default function ScreenContextProvider({children}) {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
      console.log('Called')
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ctxValue = {
    screenHeight: screenHeight,
    screenWidth: screenWidth
  }

  return (
    <ScreenContext.Provider value={ctxValue}>
      {children}
    </ScreenContext.Provider>
  )

}