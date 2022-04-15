import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/rxlib.css';
import './breadcrumb.css';

export interface BreadcrumbItem {
    link: string;
    texto: string;
}

export interface BreadcrumbProps {
    itens: BreadcrumbItem[];
}

export default function Breadcrumb({
    itens,
}: BreadcrumbProps) {
    return (
        <nav aria-label='breadcrumb' className='rxlib-breadcrumb'>
            <ol className='breadcrumb pt-2 ps-3'>
                {
                    itens.map(item =>
                        item.link === ''
                            ? <li key={item.texto} className='breadcrumb-item active' aria-current='page'>{item.texto}</li>
                            : <li key={item.texto} className='breadcrumb-item'><a href={item.link}>{item.texto}</a></li>)
                }
            </ol>
        </nav>
    );
}