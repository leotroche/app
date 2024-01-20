import { useContext } from 'react'
import { AudioContext } from '../context/AudioContext'

export function useAudioContext() {
  const { audioOff, setAudioOff } = useContext(AudioContext)
  return { audioOff, setAudioOff }
}
