import React from 'react'
import { Bookmark } from "lucide-react";
function Card(props) {
  console.log(props.companyN)
  return (
    <div className="card">

        {/* TOP SECTION */}
        <div className="top">
          <img 
            src={props.logo} 
            alt="amazon logo" 
          />
          <button>
            Save <Bookmark size={14} />
          </button>
        </div>

        {/* CENTER SECTION */}
        <div className="center">
          <h3>{props.companyN} <span> {props.date}</span></h3>
          <h2>{props.postt}</h2>

          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>

          <button>Apply Now</button>
        </div>

      </div>
  )
}

export default Card