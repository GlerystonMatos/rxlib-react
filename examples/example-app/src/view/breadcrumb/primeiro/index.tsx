import { Breadcrumb, BreadcrumbItem } from 'rxlib-react';

export default function BreadcrumbPrimeiro() {
    const breadcrumbs: BreadcrumbItem[] = [
        { texto: 'Primeiro Item', link: '' },
        { texto: 'Segundo Item', link: '/breadcrumbsegundo' },
    ];

    return (
        <>
            <Breadcrumb
                itens={breadcrumbs} />
            <h3 className='ms-3'>Primeiro</h3>
        </>
    );
}