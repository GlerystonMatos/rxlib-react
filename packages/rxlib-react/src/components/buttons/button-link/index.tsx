import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style/rxlib.css';
import '../style/button.css';

export interface ButtonLinkProps {
    link: string;
    texto: string;
    className?: string;
    abrirNovaJanela?: boolean;
    fontAwesomeIcon?: IconDefinition;
}

export default function ButtonLink({
    link,
    texto,
    className,
    abrirNovaJanela,
    fontAwesomeIcon,
}: ButtonLinkProps) {
    let classNameButton = 'btn btn-warning btn-block rxlib-btn';
    if ((className) && (className !== '')) {
        classNameButton = className + ' ' + classNameButton;
    }

    return (
        <>
            {
                (fontAwesomeIcon)
                    ? abrirNovaJanela
                        ? <a href={link} className={classNameButton} target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={fontAwesomeIcon} />
                        </a>
                        : <a href={link} className={classNameButton}>
                            <FontAwesomeIcon icon={fontAwesomeIcon} />
                        </a>
                    : abrirNovaJanela
                        ? <a href={link} className={classNameButton} target='_blank' rel='noopener noreferrer'>
                            {texto}
                        </a>
                        : <a href={link} className={classNameButton}>
                            {texto}
                        </a>
            }
        </>
    );
}