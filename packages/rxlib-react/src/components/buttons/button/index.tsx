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
}

export default function Button({
    texto,
    onClick,
    className,
    carregando,
    type = 'button',
    fontAwesomeIcon,
    classNameDivSpinner,
}: ButtonProps) {
    let classNameButton = 'btn btn-warning btn-block rxlib-btn';
    if ((className) && (className !== '')) {
        classNameButton = className + ' ' + classNameButton;
    }

    return (
        <>
            {
                (carregando)
                    ? <Spinner
                        type='rxlib-spinner'
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