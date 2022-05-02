import { faSortAmountDownAlt, faSortAmountUpAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/button-table-order.css';
import '../../../style/rxlib.css';

export type OrdemTabela = 'asc' | 'desc';

export interface ColunaOrdemTabela {
    campo: string;
    ordem: OrdemTabela;
}

export interface ButtonTableOrderProps {
    campoSelecionado: string;
    colunaOrdemTabelaAtual: ColunaOrdemTabela;
    onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
}

export default function ButtonTableOrder({
    onClick,
    campoSelecionado,
    colunaOrdemTabelaAtual,
}: ButtonTableOrderProps) {
    return (
        <button className='btn btn-link rxlib-btn-order-table' type='button' id={campoSelecionado} onClick={onClick}>
            {
                (colunaOrdemTabelaAtual.campo === campoSelecionado)
                    ? (colunaOrdemTabelaAtual.ordem === 'asc')
                        ? <FontAwesomeIcon icon={faSortAmountDownAlt} className='active' />
                        : <FontAwesomeIcon icon={faSortAmountUpAlt} className='active' />
                    : (colunaOrdemTabelaAtual.ordem === 'asc')
                        ? <FontAwesomeIcon icon={faSortAmountDownAlt} />
                        : <FontAwesomeIcon icon={faSortAmountUpAlt} />
            }
        </button>
    );
}