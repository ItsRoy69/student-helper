import React from 'react'
import './RegisterCard.css'

const TeamFinder = ({ setModal }) => {
  return (
    <div className="joimidbannerbutton">
      <div onClick={()=>setModal(true)}>
        <h2>Register</h2>
      </div>
    </div>
  )
}

export default TeamFinder
