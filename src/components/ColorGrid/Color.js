import React from 'react'
import {useAppDispatch, selectColor} from '../AppContext'

const Color = ({color}) => {
  const dispatch = useAppDispatch()

  console.log('color rendered')

  return (
    <div className="color-grid__color-object">
      <button
        onClick={() => dispatch(selectColor(color))}
        type="button"
        className="color-grid__color-object-color"
        style={{backgroundColor: color}}
      />
      <div className="color-grid__color-object-title">{color}</div>
    </div>
  )
}

export default React.memo(Color)
