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

const AppStateContext = React.createContext()
const AppDispatchContext = React.createContext()

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
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

function useAppState() {
  const context = React.useContext(AppStateContext)
  if (!context) {
    throw new Error('useAppState must be used within the AppContextProvider')
  }
  return context
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext)
  if (!context) {
    throw new Error('useAppDispatch must be used within the AppStateProvider')
  }
  return context
}

export {AppContextProvider, useAppState, useAppDispatch, selectColor}
