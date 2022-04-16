import { faLink } from '@fortawesome/free-solid-svg-icons';
import { ButtonLink as ButtonLinkRx } from 'rxlib-react';

export default function Button() {
    return (
        <div className='px-5 mt-5'>
            <ButtonLinkRx
                texto='link'
                link='buttonlink'
                fontAwesomeIcon={faLink} />
        </div>
    );
}