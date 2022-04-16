import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../../spinner';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style/rxlib.css';
import '../style/button.css';

export interface ButtonProps {
    texto: string;
    className?: string;
    carregando?: boolean;
    onClick?: () => void;
    type: 'button' | 'submit';
    classNameDivSpinner?: string;
    fontAwesomeIcon?: IconDefinition;
    classStyle: 'btn-rxlib' | 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-info' | 'btn-light' | 'btn-dark';
}

export default function Button({
    texto,
    onClick,
    className,
    carregando,
    type = 'button',
    fontAwesomeIcon,
    classNameDivSpinner,
    classStyle = 'btn-rxlib',
}: ButtonProps) {
    let classNameButton = 'btn btn-block rxlib-btn ' + classStyle;
    if ((className) && (className !== '')) {
        classNameButton = className + ' ' + classNameButton;
    }

    return (
        <>
            {
                (carregando)
                    ? <Spinner
                        classStyle='rxlib-spinner'
                        classNameDiv={classNameDivSpinner} />
                    : (fontAwesomeIcon)
                        ? <button type={type} onClick={onClick} className={classNameButton}>
                            <FontAwesomeIcon icon={fontAwesomeIcon} />
                        </button>
                        : <button type={type} onClick={onClick} className={classNameButton}>
                            {texto}
                        </button>
            }
        </>
    );
}