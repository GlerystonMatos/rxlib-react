import React from 'react';
import { Checkbox as CheckboxRx } from 'rxlib-react';

export default function Checkbox() {
    return (
        <div className='mx-3 mt-3'>
            <CheckboxRx
            text='text'
            name='name'
            value='false'
            disabled={false}
            defaultChecked={false}
            referencia={React.createRef()} />
        </div>
    );
}