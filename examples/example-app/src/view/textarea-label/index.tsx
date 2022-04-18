import React from 'react';
import { ButtonsCrud, TextareaLabel as TextareaLabelRx } from 'rxlib-react';

export default function TextareaLabel() {
    return (
        <div className='mx-3 mt-3'>
            <form action='/inputlabel'>
                <TextareaLabelRx
                    id='id'
                    name='nome'
                    label='label'
                    maxLength={50}
                    defaultValue=''
                    readOnly={false}
                    autoFocus={true}
                    placeholder='place holder'
                    referencia={React.createRef()} />
                <ButtonsCrud
                    visualizar={false}
                    carregando={false}
                    styleButton='btn-rxlib'
                    linkCancelarVoltar='textarealabel' />
            </form>
        </div>
    );
}