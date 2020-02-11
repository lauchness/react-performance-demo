import React from 'react'
import {Link} from 'react-router-dom'
import HeartIcon from './HeartIcon'
import './styles.css'

const links = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Profile',
    path: '/profile',
  },
]

const NavBar = props => {
  const {favouriteColor} = props

  return (
    <nav className="nav-container">
      <HeartIcon fillColor={favouriteColor} />
      {links.map(link => (
        <Link key={link.path} to={link.path}>
          {link.title}
        </Link>
      ))}
    </nav>
  )
}

export default NavBar
