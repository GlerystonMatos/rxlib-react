import ButtonTableOrder from '../buttons/button-table-order';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    component: ButtonTableOrder,
    title: 'rxlib-react/ButtonTableOrder',
} as ComponentMeta<typeof ButtonTableOrder>;

const Template: ComponentStory<typeof ButtonTableOrder> = (args) => <ButtonTableOrder {...args} />;

function handleOrder(e: React.FormEvent<HTMLButtonElement>) {
    alert(e.currentTarget.id);
}

export const OrdemAsc = Template.bind({});
OrdemAsc.args = {
    campoSelecionado: 'campoSelecionado',
    colunaOrdemTabelaAtual: {
        campo: 'campo',
        ordem: 'asc',
    },
    onClick: (e: React.FormEvent<HTMLButtonElement>) => handleOrder(e),
};

export const OrdemAscActive = Template.bind({});
OrdemAscActive.args = {
    campoSelecionado: 'campo',
    colunaOrdemTabelaAtual: {
        campo: 'campo',
        ordem: 'asc',
    },
    onClick: (e: React.FormEvent<HTMLButtonElement>) => handleOrder(e),
};

export const OrdemDesc = Template.bind({});
OrdemDesc.args = {
    campoSelecionado: 'campoSelecionado',
    colunaOrdemTabelaAtual: {
        campo: 'campo',
        ordem: 'desc',
    },
    onClick: (e: React.FormEvent<HTMLButtonElement>) => handleOrder(e),
};

export const OrdemDescActive = Template.bind({});
OrdemDescActive.args = {
    campoSelecionado: 'campo',
    colunaOrdemTabelaAtual: {
        campo: 'campo',
        ordem: 'desc',
    },
    onClick: (e: React.FormEvent<HTMLButtonElement>) => handleOrder(e),
};