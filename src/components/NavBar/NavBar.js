import React from 'react'
import {Link} from 'react-router-dom'
import {useAppContext} from '../AppContext'
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
  const [{selectedColor}] = useAppContext()

  return (
    <nav className="nav-container">
      <HeartIcon fillColor={selectedColor} />
      {links.map(link => (
        <Link key={link.path} to={link.path}>
          {link.title}
        </Link>
      ))}
    </nav>
  )
}

export default NavBar
