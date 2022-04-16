import { ButtonsCrud as ButtonsCrudRx } from 'rxlib-react';

export default function ButtonsCrud() {
    return (
        <div className='px-5 mt-5'>
            <ButtonsCrudRx
                visualizar={false}
                carregando={false}
                styleButton='btn-rxlib'
                linkCancelarVoltar='buttonscrud' />
        </div>
    );
}