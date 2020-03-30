import React from 'react'

export default React.createContext({
  flights: [],
  user: null,
  getFlights: () => {},
  deleteFlight: () => {},
  setUser: () => {},
})