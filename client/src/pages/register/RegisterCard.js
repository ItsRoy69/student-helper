import React from 'react'
import './RegisterCard.css'

const TeamFinder = ({ setModal }) => {
  return (
    <button  className="joinbutton" onClick={()=>setModal(true)}>
      <h2>Register</h2>
    </button>
  )
}

export default TeamFinder
