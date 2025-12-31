import React from 'react'

const Navbar = (props) => {
    function changeTheme (){
        console.log(props.theme);
        
        props.settheme('dark')
    }
  return (
    
    <div>
        <p>{props.theme}</p>
        <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar