import { FC } from 'react'
import { cn } from '@bem-react/classname'

import './Button.css'

const cnButton = cn('Button')

type ButtonProps = {
  text?: String
}

export const Button: FC<ButtonProps> = ({ text = "Кнопка" }) => <><button className={cnButton()}>{text}</button></>
