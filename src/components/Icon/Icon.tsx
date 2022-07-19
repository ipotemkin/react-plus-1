import { FC } from 'react'
import { cn } from '@bem-react/classname'

const cnIcon = cn('Icon')

type IconProps = {
  src?: string
  size?: number
}

export const Icon: FC<IconProps> = ({ src = '', size = 36 }) => 
    <img className={cnIcon()} style={{ width: size }} src={src} alt="иконка" />
