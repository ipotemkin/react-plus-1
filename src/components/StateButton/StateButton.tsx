import { FC } from 'react'
import { cn } from '@bem-react/classname'

import './StateButton.css'

// import icon from './assets/icon.svg'

const cnStateButton = cn('StateButton')

type StateButtonSizes = 's' | 'm' | 'l' | 'xl'

type StateButtonStates = 'normal' | 'action' | 'raised' |
  'outlined' | 'outlined-info' | 'outlined-danger' |
  'flat' | 'flat-info' | 'flat-danger' | 'flat-secondary'

type StateButtonProps = {
  text?: string
  state?: StateButtonStates
  size?: StateButtonSizes
}

export const StateButton: FC<StateButtonProps> = ({
  text = '', state = 'normal', size = 'm'
}) => {  
  // вот это хотелсь бы исключить и опираться на стили в css
  let iconColor = 'black'
  if (state.includes('action')) iconColor = 'white'
  else if (state.includes('info')) iconColor = 'cornflowerblue'
  else if (state.includes('danger')) iconColor = 'red'
  else if (state.includes('secondary')) iconColor = 'lightgray'

  return (
      <button className={cnStateButton({ type: state, size: size })}>
        <svg fill={iconColor} width="36px" height="36px" viewBox="0 0 64 64" data-name="Material Expand" id="Material_Expand" xmlns="http://www.w3.org/2000/svg"><path d="M32,18A14,14,0,1,0,46,32,14.015,14.015,0,0,0,32,18Zm0,24A10,10,0,1,1,42,32,10.011,10.011,0,0,1,32,42Z"/><path d="M60,25H52.837a21.838,21.838,0,0,0-1.153-2.784l5.065-5.066a2,2,0,0,0,0-2.828L49.678,7.251a2,2,0,0,0-2.828,0l-5.065,5.064A21.871,21.871,0,0,0,39,11.163V4a2,2,0,0,0-2-2H27a2,2,0,0,0-2,2v7.163a21.871,21.871,0,0,0-2.785,1.152L17.15,7.251a2,2,0,0,0-2.828,0L7.251,14.322a2,2,0,0,0,0,2.828l5.065,5.066A21.838,21.838,0,0,0,11.163,25H4a2,2,0,0,0-2,2V37a2,2,0,0,0,2,2h7.163a21.918,21.918,0,0,0,1.152,2.784L7.251,46.85a2,2,0,0,0,0,2.828l7.071,7.071a2,2,0,0,0,2.828,0l5.066-5.065A21.838,21.838,0,0,0,25,52.837V60a2,2,0,0,0,2,2H37a2,2,0,0,0,2-2V52.837a21.838,21.838,0,0,0,2.784-1.153l5.066,5.065a2,2,0,0,0,2.828,0l7.071-7.071a2,2,0,0,0,0-2.828l-5.064-5.066A21.918,21.918,0,0,0,52.837,39H60a2,2,0,0,0,2-2V27A2,2,0,0,0,60,25ZM58,35H51.345a2,2,0,0,0-1.937,1.5,17.879,17.879,0,0,1-1.915,4.626,2,2,0,0,0,.308,2.432l4.706,4.706-4.243,4.243L43.558,47.8a2,2,0,0,0-2.431-.309A17.876,17.876,0,0,1,36.5,49.408,2,2,0,0,0,35,51.345V58H29V51.345a2,2,0,0,0-1.5-1.937,17.876,17.876,0,0,1-4.627-1.916,2,2,0,0,0-2.431.309l-4.706,4.706-4.243-4.243L16.2,43.558a2,2,0,0,0,.308-2.432A17.879,17.879,0,0,1,14.592,36.5,2,2,0,0,0,12.655,35H6V29h6.655a2,2,0,0,0,1.937-1.5,17.876,17.876,0,0,1,1.916-4.627,2,2,0,0,0-.309-2.431l-4.706-4.706,4.243-4.243L20.442,16.2a2,2,0,0,0,2.432.308A17.842,17.842,0,0,1,27.5,14.592,2,2,0,0,0,29,12.655V6h6v6.655a2,2,0,0,0,1.5,1.937,17.842,17.842,0,0,1,4.626,1.915,2,2,0,0,0,2.432-.308l4.706-4.706,4.243,4.243L47.8,20.442a2,2,0,0,0-.309,2.431A17.876,17.876,0,0,1,49.408,27.5,2,2,0,0,0,51.345,29H58Z"/><rect height="4" width="4" x="26" y="30"/><rect height="4" width="4" x="34" y="30"/></svg>
        {/* <img className={cnStateButton('Icon')} src={icon} alt="иконка" /> */}
        {text}
      </button>
  )
}
