import React from 'react'
import {colors} from '../../globalStyles'
import './styles.css'

const ProfileEditor = props => {
  const {favouriteColor, setFavouriteColor} = props

  const mapColors = Object.keys(colors).map(color => (
    <option key={color} value={color.toLowerCase()}>
      {colors[color]}
    </option>
  ))

  const handleSelect = event => {
    if (!(event && event.target)) {
      return
    }

    setFavouriteColor(event.target.value)
  }

  return (
    <>
      <div className="form-group">
        <label htmlFor="colors">Select Your Favourite Colour</label>
        <select id="colors" value={favouriteColor} onChange={handleSelect}>
          {mapColors}
        </select>
      </div>
      <div className="big-stupid-letters" style={{color: favouriteColor}}>
        {favouriteColor}
      </div>
    </>
  )
}

export default ProfileEditor
