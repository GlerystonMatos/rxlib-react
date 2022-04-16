import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import Spinner from '../../spinner';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style/rxlib.css';
import './button.css';

export interface ButtonProps {
    texto: string;
    className?: string;
    carregando?: boolean;
    onClick?: () => void;
    type: 'button' | 'submit';
    classNameDivSpinner?: string;
    fontAwesomeIconName?: IconName;
}

export default function Button({
    texto,
    onClick,
    className,
    carregando,
    type = 'button',
    classNameDivSpinner,
    fontAwesomeIconName,
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
                    : (fontAwesomeIconName)
                        ? <button type={type} onClick={onClick} className={classNameButton}>
                            <FontAwesomeIcon icon={fontAwesomeIconName} />
                        </button>
                        : <button type={type} onClick={onClick} className={classNameButton}>
                            {texto}
                        </button>
            }
        </>
    );
}