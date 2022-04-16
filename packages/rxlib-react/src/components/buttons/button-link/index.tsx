import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style/rxlib.css';
import '../style/button.css';

export interface ButtonLinkProps {
    link: string;
    texto: string;
    className?: string;
    abrirNovaJanela?: boolean;
    fontAwesomeIcon?: IconDefinition;
    classStyle: 'btn-rxlib' | 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-info' | 'btn-light' | 'btn-dark';
}

export default function ButtonLink({
    link,
    texto,
    className,
    classStyle,
    abrirNovaJanela,
    fontAwesomeIcon,
}: ButtonLinkProps) {
    let classNameButton = 'btn btn-block rxlib-btn ' + classStyle;
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