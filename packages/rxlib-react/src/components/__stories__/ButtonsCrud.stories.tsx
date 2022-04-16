import ButtonsCrud from '../buttons/buttons-crud';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    component: ButtonsCrud,
    title: 'rxlib-react/ButtonsCrud',
    argTypes: {
        styleButton: {
            control: 'radio',
            default: 'btn-rxlib',
            options: ['btn-rxlib', 'btn-primary', 'btn-secondary', 'btn-success', 'btn-danger', 'btn-warning', 'btn-info', 'btn-light', 'btn-dark'],
        },
    },
} as ComponentMeta<typeof ButtonsCrud>;

const Template: ComponentStory<typeof ButtonsCrud> = (args) => <ButtonsCrud {...args} />;

function salvar() {
    alert('Salvar');
}

function cancelarVoltar() {
    alert('CancelarVoltar');
}

export const Padrao = Template.bind({});
Padrao.args = {
    visualizar: false,
    carregando: false,
    styleButton: 'btn-rxlib',
    linkCancelarVoltar: '/?path=/story/rxlib-react-buttonscrud--padrao',
};

export const Visualizar = Template.bind({});
Visualizar.args = {
    visualizar: true,
    carregando: false,
    styleButton: 'btn-rxlib',
    linkCancelarVoltar: '/?path=/story/rxlib-react-buttonscrud--visualizar',
};

export const Carregando = Template.bind({});
Carregando.args = {
    carregando: true,
    visualizar: false,
    styleButton: 'btn-rxlib',
    linkCancelarVoltar: '/?path=/story/rxlib-react-buttonscrud--carregando',
};

export const OnSalvar = Template.bind({});
OnSalvar.args = {
    visualizar: false,
    carregando: false,
    onSalvar: () => salvar(),
    styleButton: 'btn-rxlib',
    linkCancelarVoltar: '/?path=/story/rxlib-react-buttonscrud--on-salvar',
};

export const OnCancelarVoltar = Template.bind({});
OnCancelarVoltar.args = {
    visualizar: false,
    carregando: false,
    styleButton: 'btn-rxlib',
    onCancelarVoltar: () => cancelarVoltar(),
};