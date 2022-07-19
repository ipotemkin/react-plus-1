import { FC } from 'react'
import { cn } from '@bem-react/classname'
import { Icon } from './Icon'

import './IconWithLabel.css'
import { getIconNames } from './utils/getIcon'


const cnIconWithLabel = cn('IconWithLabel')

type IconWithLabelProps = {
  src?: string
  size?: number
  label?: string
  labelSize?: number
  iconName?: getIconNames
}

export const IconWithLabel: FC<IconWithLabelProps> = (
    { src = '', iconName, size = 36, label = 'No label',  labelSize = 18 }
) => <div className={cnIconWithLabel()}>
    <Icon src={src} name={iconName} size={size} />
    <span style={{ fontSize: `${labelSize}px` }}>{label}</span>
</div>
