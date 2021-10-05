import React, { useContext, useReducer } from 'react'

const StateContext = React.createContext()

const useStateContext = () => useContext(StateContext)

// STORE
const initialState = {
  roster: {
    players: [],
    loading: true,
    sortBy: 'totalpoints'
  },
  calendar: {
    games: [],
    nextGame: null,
    loading: true
  },
  ui: {
    calendarListRef: null,
    isLogged: false
  }
}

const ADD_PLAYERS = 'ADD_PLAYERS'
const ADD_CALENDAR = 'ADD_CALENDAR'
const GET_CALENDAR_LIST_REF = 'GET_CALENDAR_LIST_REF'
const SET_LOADING = 'SET_LOADING'
const CHANGE_PLAYERS_SORT_VALUE = 'CHANGE_PLAYERS_SORT_VALUE'
const SET_LOGGED = 'SET_LOGGED'

const addPlayers = (players) => {
  return {
    type: ADD_PLAYERS,
    payload: {
      players
    }
  }
}

const addCalendar = ({ games, nextGame }) => {
  return {
    type: ADD_CALENDAR,
    payload: {
      games,
      nextGame
    }
  }
}

const getCalendarListRef = calendarListRef => {
  return {
    type: GET_CALENDAR_LIST_REF,
    payload: {
      calendarListRef
    }
  }
}

const changePlayersSortValue = (value) => {
  return {
    type: CHANGE_PLAYERS_SORT_VALUE,
    payload: {
      sortBy: value
    }
  }
}

const setLoading = (screen, loading) => {
  return {
    type: SET_LOADING,
    payload: {
      screen,
      loading
    }
  }
}

const setLogged = (isLogged) => {
  return {
    type: SET_LOGGED,
    payload: {
      isLogged
    }
  }
}

// REDUCERS
const stateReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_PLAYERS: {
      const { players } = payload
      return { ...state, roster: { players, loading: false } }
    }
    case ADD_CALENDAR: {
      const { games, nextGame } = payload
      return { ...state, calendar: { games, nextGame, loading: false } }
    }
    case GET_CALENDAR_LIST_REF: {
      const { calendarListRef } = payload
      return { ...state, ui: { ...state.ui, calendarListRef: calendarListRef } }
    }
    case CHANGE_PLAYERS_SORT_VALUE: {
      const { sortBy } = payload
      return { ...state, roster: { ...state.roster, sortBy } }
    }
    case SET_LOADING: {
      const { loading, screen } = payload
      switch (screen) {
        case 'Home': {
          return { ...state, roster: { ...state.roster, loading } }
        }
        case 'Calendar': {
          return { ...state, calendar: { ...state.calendar, loading } }
        }
      }
      return state
    }
    case SET_LOGGED: {
      const { isLogged } = payload
      return { ...state, ui: { ...state.ui, isLogged } }
    }
    default:
      return state
  }
}

const StateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  const value = { state, dispatch }

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  )
}

export {
  useStateContext, addPlayers, addCalendar, getCalendarListRef,
  changePlayersSortValue, setLoading, setLogged
}
export default StateContextProvider
