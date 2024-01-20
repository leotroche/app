import { useAudioContext } from '../../hooks/useAudioContext'

import { OutlineButton } from '../../components/OutlineButton'
import { AudioOffIcon } from './AudioOffIcon'
import { AudioOnIcon } from './AudioOnIcon'

export function AudioToggleButton(props) {
  const { audioOff, setAudioOff } = useAudioContext()

  return (
    <div {...props}>
      <OutlineButton
        icon={audioOff ? AudioOffIcon : AudioOnIcon}
        onClick={() => setAudioOff(!audioOff)}
      />
    </div>
  )
}
