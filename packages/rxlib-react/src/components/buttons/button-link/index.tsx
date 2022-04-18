import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonClassStyle } from '../button';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style/rxlib.css';
import '../style/button.css';

export interface ButtonLinkProps {
    link: string;
    texto: string;
    className?: string;
    abrirNovaJanela?: boolean;
    classStyle: ButtonClassStyle;
    fontAwesomeIcon?: IconDefinition;
}

export default function ButtonLink({
    link,
    texto,
    className,
    classStyle,
    abrirNovaJanela,
    fontAwesomeIcon,
}: ButtonLinkProps) {
    let classNameButton: string = 'btn btn-block rxlib-btn ' + classStyle;
    if ((className) && (className !== '')) {
        classNameButton = className + ' ' + classNameButton;
    }

    function configurarLink(): React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
        let linkProps: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> = {
            href: link,
            className: classNameButton,
        };

        if (abrirNovaJanela) {
            linkProps.target = '_blank';
            linkProps.rel = 'noopener noreferrer';
        }

        return linkProps;
    }

    return (
        <a {...configurarLink()}>
            {
                (fontAwesomeIcon)
                    ? <FontAwesomeIcon icon={fontAwesomeIcon} />
                    : texto
            }
        </a>
    );
}