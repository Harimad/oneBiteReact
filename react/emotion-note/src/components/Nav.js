import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={'/'}>homt</Link>
        </li>
        <li>
          <Link to={'/new'}>new</Link>
        </li>
        <li>
          <Link to={'/edit'}>edit</Link>
        </li>
        <li>
          <Link to={'/diary'}>diary</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
