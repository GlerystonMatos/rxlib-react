import ButtonTableOrder, { ColunaOrdemTabela, OrdemTabela } from '../buttons/button-table-order';
import { formatarPorTipo, obterIdButton, TipoFormatacao } from '../../utils/utilitarios';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button, { ButtonType } from '../buttons/button';
import { CSVLink } from 'react-csv';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/rxlib.css';
import './table.css';

export type FunctionGetId = (id: string) => void;
export type TipoColunaTabela = TipoFormatacao | 'download' | 'personalizado';
export type FunctionFormatarPorTipoPersonalizado = (type: string, value: string) => string;

type HeaderCsv = {
    key: string;
    label: string;
}

type ColunaTabela = {
    nome: string;
    campo: string;
    entidadePai?: string;
    entidadeAvo?: string;
    tipo: TipoColunaTabela;
    tipoPersonalizado?: string;
    fontAwesomeIconDownload?: IconDefinition;
}

export type ConfiguracoesTabela = {
    mensagemPadrao: string;
    colunas: ColunaTabela[];
}

export type AcoesTabelaPersonalizadas = {
    nome: string;
    link?: string;
    campo?: string;
    entidadePai?: string;
    entidadeAvo?: string;
    onClick?: FunctionGetId;
    fontAwesomeIcon?: IconDefinition;
}

export interface TableProps {
    campoId: string;
    linkEdicao?: string;
    csvFilename?: string;
    linkExclusao?: string;
    tableDetalhe: boolean;
    usarOrdenacao?: boolean;
    onEditar?: FunctionGetId;
    linkVisualizacao?: string;
    classColunaAcoes?: string;
    tipoBotaoAcao: ButtonType;
    onExcluir?: FunctionGetId;
    usarExportacaoCsv?: boolean;
    onVisualizar?: FunctionGetId;
    configuracoes: ConfiguracoesTabela;
    fonteDados: [{ [key: string]: string; }];
    acoesPersonalizadas?: AcoesTabelaPersonalizadas[];
    formatarPorTipoPersonalizado?: FunctionFormatarPorTipoPersonalizado;
}

export default function Table({
    campoId,
    onEditar,
    onExcluir,
    linkEdicao,
    fonteDados,
    csvFilename,
    linkExclusao,
    tableDetalhe,
    onVisualizar,
    usarOrdenacao,
    tipoBotaoAcao,
    configuracoes,
    linkVisualizacao,
    classColunaAcoes,
    usarExportacaoCsv,
    acoesPersonalizadas,
    formatarPorTipoPersonalizado,
}: TableProps) {
    const [colunaOrdemTabela, setColunaOrdemTabela] = useState<ColunaOrdemTabela>({
        campo: '',
        ordem: 'asc',
    });

    function obterCampoObjeto(fonteDados: any, campo?: string, campoPai?: string, campoAvo?: string): string {
        if ((campoAvo) && (campoPai) && (campo)) {
            let avo = fonteDados[campoAvo];
            return avo[campoPai][campo];
        } else if ((campoPai) && (campo)) {
            let pai = fonteDados[campoPai];
            return pai[campo];
        } else if (campo) {
            console.log(campo)
            console.log(fonteDados[campo])
            return fonteDados[campo];
        } else {
            return '';
        }
    }

    function handleEditar(e: React.FormEvent<HTMLButtonElement>) {
        if (onEditar)
            onEditar(obterIdButton(e));
    }

    function handleVisualizar(e: React.FormEvent<HTMLButtonElement>) {
        if (onVisualizar)
            onVisualizar(obterIdButton(e));
    }

    function handleExcluir(e: React.FormEvent<HTMLButtonElement>) {
        if (onExcluir)
            onExcluir(obterIdButton(e));
    }

    function handleClick(e: React.FormEvent<HTMLButtonElement>, onClick?: FunctionGetId) {
        if (onClick)
            onClick(obterIdButton(e));
    }

    function handleOrder(e: React.FormEvent<HTMLButtonElement>) {
        let ordem: OrdemTabela = 'asc';
        let campo: string = obterIdButton(e);

        if (colunaOrdemTabela.campo === campo) {
            switch (colunaOrdemTabela.ordem) {
                case 'asc':
                    ordem = 'desc';
                    break;
                case 'desc':
                    ordem = 'asc';
                    break;
            }
        }

        setColunaOrdemTabela({
            campo: campo,
            ordem: ordem,
        });

        if (campo !== '') {
            fonteDados.sort(function (a, b) {
                const coluna = configuracoes.colunas.find(coluna => coluna.campo === campo);
                if (coluna) {
                    let campoA: string = formatarPorTipoCampo(coluna.tipo, obterCampoObjeto(a, coluna.campo, coluna.entidadePai, coluna.entidadeAvo), coluna.tipoPersonalizado);
                    let campoB: string = formatarPorTipoCampo(coluna.tipo, obterCampoObjeto(b, coluna.campo, coluna.entidadePai, coluna.entidadeAvo), coluna.tipoPersonalizado);
                    return verificarOrdem(ordem, campoA.toUpperCase(), campoB.toUpperCase());
                } else {
                    return 0;
                }
            });
        }
    }

    function verificarOrdem(ordem: string, a: string, b: string): number {
        if (ordem === 'asc') {
            if (a > b) {
                return 1;
            }
            if (a < b) {
                return -1;
            }
            return 0;
        } else if (ordem === 'desc') {
            if (a < b) {
                return 1;
            }
            if (a > b) {
                return -1;
            }
            return 0;
        } else {
            return 0;
        }
    }

    function getGeadersCsv(): HeaderCsv[] {
        let headers: HeaderCsv[] = [];

        configuracoes.colunas.map(coluna =>
            (coluna.entidadeAvo && coluna.entidadePai && coluna.campo)
                ? headers.push({
                    key: coluna.entidadeAvo + '.' + coluna.entidadePai + '.' + coluna.campo,
                    label: coluna.nome,
                })
                : (coluna.entidadePai && coluna.campo)
                    ? headers.push({
                        key: coluna.entidadePai + '.' + coluna.campo,
                        label: coluna.nome,
                    })
                    : headers.push({
                        key: coluna.campo,
                        label: coluna.nome,
                    })
        );

        return headers;
    }

    function formatarPorTipoCampo(tipo: TipoColunaTabela, valor: string, tipoPersonalizado?: string): string {
        if ((tipo === 'personalizado') && (formatarPorTipoPersonalizado) && (tipoPersonalizado)) {
            return formatarPorTipoPersonalizado(tipoPersonalizado, valor);
        } else {
            return formatarPorTipo((tipo as TipoFormatacao), valor);
        }
    }

    return (
        <>
            <table className='table table-striped rxlib-table-overflow'>
                <thead>
                    <tr key='colunas'>
                        {
                            configuracoes.colunas.map((coluna, index) =>
                                (index === 0)
                                    ? <th key={coluna.nome} scope='col'>
                                        {coluna.nome}
                                        {
                                            ((usarOrdenacao) && (coluna.tipo !== 'download'))
                                                ? <ButtonTableOrder
                                                    onClick={handleOrder}
                                                    campoSelecionado={coluna.campo}
                                                    colunaOrdemTabelaAtual={colunaOrdemTabela} />
                                                : ''
                                        }
                                    </th>
                                    : <th key={coluna.nome} scope='col' className='rxlib-coluna-tabela'>
                                        {coluna.nome}
                                        {
                                            ((usarOrdenacao) && (coluna.tipo !== 'download'))
                                                ? <ButtonTableOrder
                                                    onClick={handleOrder}
                                                    campoSelecionado={coluna.campo}
                                                    colunaOrdemTabelaAtual={colunaOrdemTabela} />
                                                : ''
                                        }
                                    </th>
                            )
                        }
                        <th scope='col' className={
                            ((acoesPersonalizadas) && (acoesPersonalizadas.length > 0))
                                ? tableDetalhe
                                    ? acoesPersonalizadas.length === 1
                                        ? 'rxlib-coluna-acoes-detalhe-personalizadas-1'
                                        : acoesPersonalizadas.length === 2
                                            ? 'rxlib-coluna-acoes-detalhe-personalizadas-2'
                                            : 'rxlib-coluna-acoes-detalhe-personalizadas-3'
                                    : acoesPersonalizadas.length === 1
                                        ? 'rxlib-coluna-acoes-personalizadas-1'
                                        : acoesPersonalizadas.length === 2
                                            ? 'rxlib-coluna-acoes-personalizadas-2'
                                            : 'rxlib-coluna-acoes-personalizadas-3'
                                : tableDetalhe
                                    ? 'rxlib-coluna-acoes-detalhe'
                                    : 'rxlib-coluna-acoes'
                        }></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ((fonteDados.length > 0) && (!!fonteDados[0][campoId]))
                            ? fonteDados.map((item, index) => (
                                <tr key={index}>
                                    {
                                        configuracoes.colunas.map((coluna, index) =>
                                            coluna.tipo === 'download'
                                                ? <td key={index} className={(index === 0) ? '' : 'rxlib-coluna-tabela'}>
                                                    <a href={obterCampoObjeto(item, coluna.campo, coluna.entidadePai, coluna.entidadeAvo)}
                                                        download={coluna.campo} target='_blank' rel='noopener noreferrer' title={coluna.nome}>
                                                        {
                                                            coluna.fontAwesomeIconDownload
                                                                ? <FontAwesomeIcon icon={coluna.fontAwesomeIconDownload} />
                                                                : ''
                                                        }
                                                    </a>
                                                </td>
                                                : <td key={index} className={(index === 0) ? '' : 'rxlib-coluna-tabela'}>
                                                    {formatarPorTipoCampo(coluna.tipo, obterCampoObjeto(item, coluna.campo, coluna.entidadePai, coluna.entidadeAvo), coluna.tipoPersonalizado)}
                                                </td>
                                        )
                                    }
                                    <td key='acoes' className={classColunaAcoes}>
                                        {
                                            ((linkEdicao) && (linkEdicao !== ''))
                                                ? <a href={`${linkEdicao}/${item[campoId]}`} title='Editar'>
                                                    <FontAwesomeIcon icon={faEdit} className='me-3' />
                                                </a>
                                                : (!!onEditar)
                                                    ? <button className='btn btn-link rxlib-btn-link-table' type={tipoBotaoAcao}
                                                        id={item[campoId]} onClick={handleEditar} title='Editar'>
                                                        <FontAwesomeIcon icon={faEdit} className='me-3' />
                                                    </button>
                                                    : ''
                                        }
                                        {
                                            ((linkVisualizacao) && (linkVisualizacao !== ''))
                                                ? <a href={`${linkVisualizacao}/${item[campoId]}/view`} title='Visualizar'>
                                                    <FontAwesomeIcon icon={faEye} className='me-3' />
                                                </a>
                                                : (!!onVisualizar)
                                                    ? <button className='btn btn-link rxlib-btn-link-table' type={tipoBotaoAcao}
                                                        id={item[campoId]} onClick={handleVisualizar} title='Visualizar'>
                                                        <FontAwesomeIcon icon={faEye} className='me-3' />
                                                    </button>
                                                    : ''
                                        }
                                        {
                                            ((linkExclusao) && (linkExclusao !== ''))
                                                ? <a href={`${linkExclusao}/${item[campoId]}`} title='Excluir'>
                                                    <FontAwesomeIcon icon={faTrash} className='me-3' />
                                                </a>
                                                : (!!onExcluir)
                                                    ? <button className='btn btn-link rxlib-btn-link-table' type={tipoBotaoAcao}
                                                        id={item[campoId]} onClick={handleExcluir} title='Excluir'>
                                                        <FontAwesomeIcon icon={faTrash} className='me-3' />
                                                    </button>
                                                    : ''
                                        }
                                        {
                                            ((acoesPersonalizadas) && (acoesPersonalizadas.length > 0))
                                                ? acoesPersonalizadas.map((acao, index) =>
                                                    ((acao.link) && (acao.link !== ''))
                                                        ? <a key={index} href={`${acao.link}/${item[campoId]}`} title={acao.nome}>
                                                            {
                                                                (acao.fontAwesomeIcon)
                                                                    ? <FontAwesomeIcon icon={acao.fontAwesomeIcon} className='me-3' />
                                                                    : ''
                                                            }
                                                        </a>
                                                        : (!!acao.onClick)
                                                            ? <button key={index} className='btn btn-link rxlib-btn-link-table' type={tipoBotaoAcao}
                                                                onClick={(e) => handleClick(e, acao.onClick)} title={acao.nome}
                                                                id={obterCampoObjeto(item, acao.campo, acao.entidadePai, acao.entidadeAvo)}>
                                                                {
                                                                    (acao.fontAwesomeIcon)
                                                                        ? <FontAwesomeIcon icon={acao.fontAwesomeIcon} className='me-3' />
                                                                        : ''
                                                                }
                                                            </button>
                                                            : ''
                                                ) : ''
                                        }
                                    </td>
                                </tr>
                            ))
                            : <tr key='0'>
                                <td key='0' colSpan={configuracoes.colunas.length + 1}>{configuracoes.mensagemPadrao}</td>
                            </tr>
                    }
                </tbody>
            </table>
            {
                ((fonteDados.length > 0) && (!!fonteDados[0][campoId]) && (usarExportacaoCsv))
                    ? <CSVLink
                        data={fonteDados}
                        headers={getGeadersCsv()}
                        filename={csvFilename ? csvFilename : 'arquivo.csv'}>
                        <Button
                            type='button'
                            texto='Exportar CSV'
                            classStyle='btn-rxlib'
                            className='rxlib-btn-csv-table' />
                    </CSVLink>
                    : ''
            }
        </>
    );
}