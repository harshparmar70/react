import { useState } from "react"
import { createContext } from "react"

export const ThemeDataContext = createContext()

const ThemeContext = (prop) => {

    const [theme, settheme] = useState('light')
  return (
    <div>
        <ThemeDataContext.Provider value={[theme,settheme]}>
            {prop.children}
        </ThemeDataContext.Provider>
        
    </div>
  )
}

export default ThemeContext