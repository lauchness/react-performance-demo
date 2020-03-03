import React from 'react'
import {useAppDispatch, selectColor} from '../AppContext'
import {animated, useSpring} from 'react-spring'

const Color = ({color}) => {
  const dispatch = useAppDispatch()

  const ratio = Math.random()

  const springProps = useSpring({opacity: ratio})

  return (
    <div className="color-grid__color-object">
      <animated.button
        onClick={() => dispatch(selectColor(color))}
        type="button"
        className="color-grid__color-object-color"
        style={{backgroundColor: color, ...springProps}}
      />
      <div className="color-grid__color-object-title">{color}</div>
    </div>
  )
}

export default React.memo(Color)
