import { useMuteContext } from '../../hooks/useMuteContext'

import { OutlineButton } from '../../components/OutlineButton'
import { AudioOffIcon } from './AudioOffIcon'
import { AudioOnIcon } from './AudioOnIcon'

export function AudioToggleButton(props) {
  const { isMuted, setIsMuted } = useMuteContext()

  return (
    <div {...props}>
      <OutlineButton
        icon={isMuted ? AudioOffIcon : AudioOnIcon}
        onClick={() => setIsMuted(!isMuted)}
      />
    </div>
  )
}
