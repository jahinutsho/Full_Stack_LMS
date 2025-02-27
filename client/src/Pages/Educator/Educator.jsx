import React from 'react'
import { Outlet } from 'react-router-dom'


const Educator = () => {
  return (
    <div>
      <Outlet />
      <h1>Educator</h1>
      <p>Welcome to the educator dashboard</p>
    </div>
  )
}

export default Educator