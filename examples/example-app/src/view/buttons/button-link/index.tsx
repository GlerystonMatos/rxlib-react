import { faLink } from '@fortawesome/free-solid-svg-icons';
import { ButtonLink as ButtonLinkRx } from 'rxlib-react';

export default function Button() {
    return (
        <div className='px-5 mt-5'>
            <ButtonLinkRx
                texto='link'
                link='buttonlink'
                classStyle='btn-rxlib'
                fontAwesomeIcon={faLink} />
        </div>
    );
}