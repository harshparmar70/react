import React from 'react'
import { useContext } from 'react';
import { ThemeDataContext } from '../context/ThemeContext';

const Button = () => {

    const [theme ,settheme] =useContext(ThemeDataContext)
    const changeTheme = () => {
        console.log('change theme');
        settheme('dark')
        
    }
  return (
    <div>
        <button onClick={changeTheme}>
            Change Theme {theme}
        </button>
    </div>
  )
}

export default Button