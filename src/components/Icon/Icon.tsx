import { FC } from 'react'
import { cn } from '@bem-react/classname'

import { getIcon, getIconNames } from './utils/getIcon'

const cnIcon = cn('Icon')



type IconProps = {
  src?: string
  name?: getIconNames
  size?: number
}

export const Icon: FC<IconProps> = ({ src = '', name = null, size = 36 }) => {
    let iconSrc: string = src
    if (name) {
        const iconTemp = getIcon(name)
        if (iconTemp) iconSrc = iconTemp
    }
    
    return (
        <img className={cnIcon()} style={{ width: size }} src={iconSrc} alt="иконка" />
    )
}
