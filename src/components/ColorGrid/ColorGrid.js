import React from 'react'
import {useAppState} from '../AppContext'
import Color from './Color'
import './ColorGrid.css'

const ColorGrid = () => {
  const {colors} = useAppState()

  return (
    <div className="color-grid__container">
      <div className="color-grid__grid">
        {colors.map(({color, index}) => {
          return <Color color={color} key={index} />
        })}
      </div>
    </div>
  )
}

export default ColorGrid
