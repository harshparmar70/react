import React from 'react'
import 'remixicon/fonts/remixicon.css'
import rightcardcontent from './rightcardcontent'
const rightcard = (props) => {
    return (
        <div className='h-full w-80 bg-red-300 rounded-4xl overflow-hidden relative shrink-0'>
            <img className='h-full object-cover' src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            {props.users.map(function () {
                return'nach'
            })}
        </div>
    )
}

export default rightcard
