import { FC, ReactNode } from 'react'
import { cn } from '@bem-react/classname'

import './AddQM.css'


const cnAddQM = cn('AddQM')

type AddQMProps = {
    children?: ReactNode
    tooltip?: string
}

export const AddQM: FC<AddQMProps> = (
    { children, tooltip = '' }
) =>  {
    if (!children) return null
    
    return (
        <div className={cnAddQM()}>
            {children}
        <span className={cnAddQM('QM')} title={tooltip}><b>?</b></span>
        </div>
    )
}
