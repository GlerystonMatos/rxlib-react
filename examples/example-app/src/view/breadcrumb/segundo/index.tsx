import { Breadcrumb, BreadcrumbItem } from 'rxlib-react';

export default function BreadcrumbSegundo() {
    const breadcrumbs: BreadcrumbItem[] = [
        { texto: 'Primeiro Item', link: '/breadcrumbprimeiro' },
        { texto: 'Segundo Item', link: '' },
    ];

    return (
        <>
            <Breadcrumb
                itens={breadcrumbs} />
            <h3 className='ms-3'>Segundo</h3>
        </>
    );
}