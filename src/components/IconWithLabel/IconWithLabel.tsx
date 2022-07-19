import { FC } from 'react'
import { cn } from '@bem-react/classname'
import { Icon } from '../Icon/Icon'

import './IconWithLabel.css'


const cnIconWithLabel = cn('IconWithLabel')

type IconWithLabelProps = {
  src?: string
  size?: number
  label?: string
  labelSize?: number
}

export const IconWithLabel: FC<IconWithLabelProps> = (
    { src = '', size = 36, label = 'No label',  labelSize = 18 }
) => <div className={cnIconWithLabel()}>
    <Icon src={src} size={size} />
    <span style={{ fontSize: `${labelSize}px` }}>{label}</span>
</div>
