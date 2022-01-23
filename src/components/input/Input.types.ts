/* rxlib-react - Input v1.0.0 */

import { ChangeEventHandler } from 'react'

export interface InputProps {
    id?: string,
    label?: string,
    error?: boolean,
    message?: string,
    success?: boolean,
    disabled?: boolean,
    placeholder?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
}