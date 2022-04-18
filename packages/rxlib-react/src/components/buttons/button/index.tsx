import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../../spinner';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style/rxlib.css';
import '../style/button.css';

export type ButtonType = 'button' | 'submit';
export type ButtonClassStyle = 'btn-rxlib' | 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-info' | 'btn-light' | 'btn-dark';

export interface ButtonProps {
    texto: string;
    type: ButtonType;
    className?: string;
    carregando?: boolean;
    onClick?: () => void;
    classNameDivSpinner?: string;
    classStyle: ButtonClassStyle;
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
    classStyle = 'btn-rxlib',
}: ButtonProps) {
    let classNameButton: string = 'btn btn-block rxlib-btn ' + classStyle;
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
                    : <button type={type} onClick={onClick} className={classNameButton}>
                        {
                            (fontAwesomeIcon)
                                ? <FontAwesomeIcon icon={fontAwesomeIcon} />
                                : texto
                        }
                    </button>
            }
        </>
    );
}