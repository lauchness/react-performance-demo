import React from 'react'
import {colors} from '../../globalStyles'

const mappedColors = Object.keys(colors).map((color, index) => ({
  color,
  index,
}))

const initialState = {
  selectedColor: '',
  colors: mappedColors,
}

const AppContext = React.createContext()

/**
 * Actions
 */
const SELECT_COLOR = 'SELECT_COLOR'

const selectColor = selectedColor => ({
  type: SELECT_COLOR,
  payload: {
    selectedColor,
  },
})

/**
 * Reducer
 */

function appReducer(state, action) {
  const {type, payload} = action
  switch (type) {
    case SELECT_COLOR: {
      const {selectedColor} = payload
      return {
        ...state,
        selectedColor,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

/**
 * Provider
 */
function AppContextProvider({children}) {
  const [state, dispatch] = React.useReducer(appReducer, initialState)
  const value = [state, dispatch]
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

function useAppContext() {
  const context = React.useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within the AppContextProvider')
  }
  return context
}

export {AppContextProvider, useAppContext, selectColor}
