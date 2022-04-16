import Button from '../buttons/button';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    component: Button,
    title: 'rxlib-react/Button',
    argTypes: {
        type: {
            control: 'radio',
            default: 'button',
            options: ['button', 'submit'],
        },
        classStyle: {
            control: 'radio',
            default: 'btn-rxlib',
            options: ['btn-rxlib', 'btn-primary', 'btn-secondary', 'btn-success', 'btn-danger', 'btn-warning', 'btn-info', 'btn-light', 'btn-dark'],
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

function click() {
    alert('Click');
}

export const Padrao = Template.bind({});
Padrao.args = {
    type: 'button',
    texto: 'button',
    carregando: false,
    classStyle: 'btn-rxlib',
};

export const PadraoComCSS = Template.bind({});
PadraoComCSS.args = {
    type: 'button',
    texto: 'button',
    carregando: false,
    className: 'mt-5',
    classStyle: 'btn-rxlib',
};

export const Carregando = Template.bind({});
Carregando.args = {
    type: 'button',
    texto: 'button',
    carregando: true,
    classStyle: 'btn-rxlib',
};

export const CarregandoComCSS = Template.bind({});
CarregandoComCSS.args = {
    type: 'button',
    texto: 'button',
    carregando: true,
    classStyle: 'btn-rxlib',
    classNameDivSpinner: 'mt-5',
};

export const OnClick = Template.bind({});
OnClick.args = {
    type: 'button',
    texto: 'button',
    carregando: false,
    onClick: () => click(),
    classStyle: 'btn-rxlib',
};

export const FontAwesome = Template.bind({});
FontAwesome.args = {
    type: 'button',
    texto: 'button',
    carregando: false,
    classStyle: 'btn-rxlib',
    fontAwesomeIcon: faWrench,
};