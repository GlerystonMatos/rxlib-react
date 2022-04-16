import { Button as ButtonRx } from 'rxlib-react';

export default function Button() {
    return (
        <div className='px-5 mt-5'>
            <ButtonRx
                type='button'
                texto='button'
                classStyle='btn-rxlib' />
        </div>
    );
}