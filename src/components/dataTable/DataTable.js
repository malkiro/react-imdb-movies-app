import React from 'react'
import "./DataTable.css"
import StarRate from "../../components/starRatingButton/StarRatingButton"

export default function DataTable({img,rank,title,year,rating}) {
  return (
    <div className="Wraper">       
        <img src={img} alt="move image logo" style={{width:'45px'}}/>
        <div style={{width:'65%', paddingLeft:'20px'}}>
        <span>{rank}. </span>
        <span><a href="#">{title}</a></span>
        <span> (</span>
        <span>{year}</span>
        <span>)</span>
        </div>
        
        <div style={{width:'30%', paddingLeft:'10px', display:'flex', alignItems:'center'}}>
        <StarRate className='ratestar' ></StarRate>
        <span style={{paddingLeft:'10px'}}> {rating}</span>
        </div>
    </div>

  )
}

