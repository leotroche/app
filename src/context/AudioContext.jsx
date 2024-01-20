import { createContext, useState } from 'react'

export const AudioContext = createContext({})

export function AudioContextProvider({ children }) {
  const [audioOff, setAudioOff] = useState(true)

  return <AudioContext.Provider value={{ audioOff, setAudioOff }}>{children}</AudioContext.Provider>
}
