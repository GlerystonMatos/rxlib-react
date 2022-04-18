import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/rxlib.css';
import './textarea-label.css';

export type TextareaLabelSize = 'linha' | 'coluna';

export interface TextareaLabelProps {
    id: string;
    name: string;
    rows?: number;
    label: string;
    maxLength: number;
    readOnly: boolean;
    className?: string;
    required?: boolean;
    autoFocus?: boolean;
    placeholder: string;
    defaultValue: string;
    size?: TextareaLabelSize;
    referencia: React.LegacyRef<HTMLTextAreaElement>;
}

export default function TextareaLabel({
    id,
    name,
    rows,
    size,
    label,
    readOnly,
    required,
    maxLength,
    className,
    autoFocus,
    referencia,
    placeholder,
    defaultValue,
}: TextareaLabelProps) {
    let textareaSize: string = 'linha';
    if (size !== undefined) {
        textareaSize = size;
    }

    let classNameTextarea: string = 'form-control';
    if ((className) && (className !== '')) {
        classNameTextarea = className + ' ' + classNameTextarea;
    }

    switch (textareaSize) {
        case 'linha':
            classNameTextarea += ' rxlib-textarea-label-linha';
            break;
        case 'coluna':
            classNameTextarea += ' rxlib-textarea-label-coluna';
            break;
    }

    let textareaRequired: boolean = true;
    if (required !== undefined) {
        textareaRequired = required;
    }

    function configurarTextarea(): React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
        let textareaProps: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> = {
            id: id,
            name: name,
            rows: rows,
            minLength: 5,
            ref: referencia,
            readOnly: readOnly,
            maxLength: maxLength,
            autoFocus: autoFocus,
            placeholder: placeholder,
            defaultValue: defaultValue,
            required: textareaRequired,
            className: classNameTextarea,
        };

        return textareaProps;
    }

    return (
        <>
            <label htmlFor={id} className='form-label'>{label}</label>
            <textarea {...configurarTextarea()} />
        </>
    );
}