import React from 'react';
import { ButtonsCrud, InputLabel as InputLabelRx } from 'rxlib-react';

export default function InputLabel() {
    return (
        <div className='mx-3 mt-3'>
            <form action='/inputlabel'>
                <InputLabelRx
                    id='id'
                    name='nome'
                    type='text'
                    label='label'
                    maxLength={50}
                    readOnly={false}
                    placeholder='place holder'
                    referencia={React.createRef()} />
                <ButtonsCrud
                    visualizar={false}
                    carregando={false}
                    styleButton='btn-rxlib'
                    linkCancelarVoltar='inputlabel' />
            </form>
        </div>
    );
}