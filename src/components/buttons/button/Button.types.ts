/* rxlib-react - Button v1.0.0 */

import { MouseEventHandler } from 'react'

export interface ButtonProps {
    text?: string,
    primary?: boolean,
    disabled?: boolean,
    size?: 'small' | 'medium' | 'large',
    onClick?: MouseEventHandler<HTMLButtonElement>
}