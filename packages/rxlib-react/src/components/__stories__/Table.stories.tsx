import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table, { AcoesTabelaPersonalizadas, ConfiguracoesTabela } from '../table';
import { faBugSlash, faCircleNodes, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';

export default {
    component: Table,
    title: 'rxlib-react/Table',
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
    <form action='/?path=/story/rxlib-react-table--com-botoes-submit'>
        <div className='container-fluid'>
            <div className='row'>
                <Table {...args} />
            </div>
        </div>
    </form>
);

const configuracoesTabela: ConfiguracoesTabela = {
    mensagemPadrao: 'Não foram encontrados resultados para a consulta.',
    colunas: [
        { nome: 'Coluna01', campo: 'coluna01', tipo: 'string' },
        { nome: 'Coluna02', campo: 'coluna02', tipo: 'boolean' },
        { nome: 'Coluna03', campo: 'coluna03', tipo: 'date' },
        { nome: 'Coluna04', campo: 'coluna04', tipo: 'status' },
        { nome: 'Coluna05', campo: 'coluna05', tipo: 'currency' },
        { nome: 'Coluna06', campo: 'coluna06', tipo: 'download', fontAwesomeIconDownload: faCloudArrowDown },
        { nome: 'Coluna07', campo: 'coluna07', tipo: 'personalizado', tipoPersonalizado: 'tipoPersonalizado' },
        { nome: 'Coluna09', campo: 'coluna09', entidadePai: 'coluna08', tipo: 'string' },
        { nome: 'Coluna10', campo: 'coluna10', entidadePai: 'coluna08', tipo: 'boolean' },
        { nome: 'Coluna12', campo: 'coluna12', entidadePai: 'coluna11', entidadeAvo: 'coluna08', tipo: 'string' },
        { nome: 'Coluna13', campo: 'coluna13', entidadePai: 'coluna11', entidadeAvo: 'coluna08', tipo: 'status' },
    ],
};

const fonteDados: any = [
    {
        id: 1,
        coluna01: 'Linha 01',
        coluna02: 'true',
        coluna03: '2022-04-26T19:49:00',
        coluna04: '0',
        coluna05: '15.25',
        coluna06: 'https://raw.githubusercontent.com/rxcrud/rxlib-react/main/images/rxlib-react.png',
        coluna07: 'A',
        coluna08: {
            coluna09: 'Filho 01',
            coluna10: 'false',
            coluna11: {
                coluna12: 'Neto 01',
                coluna13: '1',
            },
        },
    },
    {
        id: 2,
        coluna01: 'Linha 02',
        coluna02: 'false',
        coluna03: '2022-04-27T17:37:00',
        coluna04: '1',
        coluna05: '1000.25',
        coluna06: 'https://raw.githubusercontent.com/rxcrud/rxlib-react/main/images/rxlib-react.png',
        coluna07: 'B',
        coluna08: {
            coluna09: 'Filho 02',
            coluna10: 'true',
            coluna11: {
                coluna12: 'Neto 02',
                coluna13: '0',
            },
        },
    },
];

const acoesPersonalizadasLink: AcoesTabelaPersonalizadas[] = [
    {
        nome: 'Bug',
        fontAwesomeIcon: faBugSlash,
        link: '/?path=/story/rxlib-react-table--acoes-personalizadas',
    },
    {
        nome: 'Circle Nodes',
        fontAwesomeIcon: faCircleNodes,
        link: '/?path=/story/rxlib-react-table--acoes-personalizadas',
    },
];

const acoesPersonalizadasButton: AcoesTabelaPersonalizadas[] = [
    {
        nome: 'Bug',
        campo: 'coluna09',
        entidadePai: 'coluna08',
        onClick: hancleClickButton,
        fontAwesomeIcon: faBugSlash,
    },
    {
        campo: 'coluna12',
        nome: 'Circle Nodes',
        entidadePai: 'coluna11',
        entidadeAvo: 'coluna08',
        onClick: hancleClickButton,
        fontAwesomeIcon: faCircleNodes,
    },
];

function formatarPorTipoPersonalizado(type: string, value: string) {
    switch (type) {
        case 'tipoPersonalizado':
            return 'Valor ' + value;
        default:
            return value;
    }
}

function hancleClickButton(id: string) {
    alert(id);
}

export const ComDados = Template.bind({});
ComDados.args = {
    campoId: 'id',
    tableDetalhe: false,
    fonteDados: fonteDados,
    tipoBotaoAcao: 'button',
    configuracoes: configuracoesTabela,
    formatarPorTipoPersonalizado: formatarPorTipoPersonalizado,
};

export const SemDados = Template.bind({});
SemDados.args = {
    campoId: 'id',
    fonteDados: [],
    tableDetalhe: false,
    tipoBotaoAcao: 'button',
    configuracoes: configuracoesTabela,
    formatarPorTipoPersonalizado: formatarPorTipoPersonalizado,
};

export const ComLinks = Template.bind({});
ComLinks.args = {
    campoId: 'id',
    tableDetalhe: false,
    fonteDados: fonteDados,
    tipoBotaoAcao: 'button',
    configuracoes: configuracoesTabela,
    linkEdicao: '/?path=/story/rxlib-react-table--com-links',
    linkExclusao: '/?path=/story/rxlib-react-table--com-links',
    formatarPorTipoPersonalizado: formatarPorTipoPersonalizado,
    linkVisualizacao: '/?path=/story/rxlib-react-table--com-links',
};

export const ComBotoesButton = Template.bind({});
ComBotoesButton.args = {
    campoId: 'id',
    tableDetalhe: false,
    fonteDados: fonteDados,
    tipoBotaoAcao: 'button',
    onEditar: hancleClickButton,
    onExcluir: hancleClickButton,
    onVisualizar: hancleClickButton,
    configuracoes: configuracoesTabela,
    formatarPorTipoPersonalizado: formatarPorTipoPersonalizado,
};

export const ComBotoesSubmit = Template.bind({});
ComBotoesSubmit.args = {
    campoId: 'id',
    tableDetalhe: false,
    fonteDados: fonteDados,
    tipoBotaoAcao: 'submit',
    onEditar: hancleClickButton,
    onExcluir: hancleClickButton,
    onVisualizar: hancleClickButton,
    configuracoes: configuracoesTabela,
    formatarPorTipoPersonalizado: formatarPorTipoPersonalizado,
};

export const ComOrdenacao = Template.bind({});
ComOrdenacao.args = {
    campoId: 'id',
    tableDetalhe: false,
    usarOrdenacao: true,
    fonteDados: fonteDados,
    tipoBotaoAcao: 'button',
    configuracoes: configuracoesTabela,
    formatarPorTipoPersonalizado: formatarPorTipoPersonalizado,
};

export const AcoesPersonalizadasLink = Template.bind({});
AcoesPersonalizadasLink.args = {
    campoId: 'id',
    tableDetalhe: false,
    fonteDados: fonteDados,
    tipoBotaoAcao: 'button',
    configuracoes: configuracoesTabela,
    acoesPersonalizadas: acoesPersonalizadasLink,
    formatarPorTipoPersonalizado: formatarPorTipoPersonalizado,
};

export const AcoesPersonalizadasButton = Template.bind({});
AcoesPersonalizadasButton.args = {
    campoId: 'id',
    tableDetalhe: false,
    fonteDados: fonteDados,
    tipoBotaoAcao: 'button',
    configuracoes: configuracoesTabela,
    acoesPersonalizadas: acoesPersonalizadasButton,
    formatarPorTipoPersonalizado: formatarPorTipoPersonalizado,
};

export const ComExportacaoCsv = Template.bind({});
ComExportacaoCsv.args = {
    campoId: 'id',
    tableDetalhe: false,
    fonteDados: fonteDados,
    usarExportacaoCsv: true,
    tipoBotaoAcao: 'button',
    csvFilename: 'exportacao',
    configuracoes: configuracoesTabela,
    formatarPorTipoPersonalizado: formatarPorTipoPersonalizado,
};

export const ComCSSColunaAcoes = Template.bind({});
ComCSSColunaAcoes.args = {
    campoId: 'id',
    tableDetalhe: false,
    fonteDados: fonteDados,
    tipoBotaoAcao: 'button',
    classColunaAcoes: 'fs-1',
    configuracoes: configuracoesTabela,
    linkEdicao: '/?path=/story/rxlib-react-table--com-links',
    linkExclusao: '/?path=/story/rxlib-react-table--com-links',
    formatarPorTipoPersonalizado: formatarPorTipoPersonalizado,
    linkVisualizacao: '/?path=/story/rxlib-react-table--com-links',
};

export const Detalhe = Template.bind({});
Detalhe.args = {
    campoId: 'id',
    tableDetalhe: true,
    fonteDados: fonteDados,
    tipoBotaoAcao: 'button',
    configuracoes: configuracoesTabela,
    formatarPorTipoPersonalizado: formatarPorTipoPersonalizado,
};