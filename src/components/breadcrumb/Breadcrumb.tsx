/* rxlib-react - Breadcrumb v1.0.0 */

import React from 'react';
import '../../style/rxlib.css';
import '../../style/responsividade.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BreadcrumbProps } from './Breadcrumb.types';

function Breadcrumb(props: BreadcrumbProps) {
    return (
        <nav aria-label='breadcrumb' className='rxlib-breadcrumb'>
            <ol className='breadcrumb pt-2 ps-3'>
                {
                    props.itens.map(item =>
                        item.link === ''
                            ? <li key={item.texto} className='breadcrumb-item active' aria-current='page'>{item.texto}</li>
                            : <li key={item.texto} className='breadcrumb-item'><a href={item.link}>{item.texto}</a></li>
                    )
                }
            </ol>
        </nav>
    )
}

export default Breadcrumb;