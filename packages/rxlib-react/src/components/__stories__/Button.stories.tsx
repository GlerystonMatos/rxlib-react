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
};

export const PadraoComCSS = Template.bind({});
PadraoComCSS.args = {
    type: 'button',
    texto: 'button',
    carregando: false,
    className: 'mt-5',
};

export const Carregando = Template.bind({});
Carregando.args = {
    type: 'button',
    texto: 'button',
    carregando: true,
};

export const CarregandoComCSS = Template.bind({});
CarregandoComCSS.args = {
    type: 'button',
    texto: 'button',
    carregando: true,
    classNameDivSpinner: 'mt-5',
};

export const OnClick = Template.bind({});
OnClick.args = {
    type: 'button',
    texto: 'button',
    carregando: false,
    onClick: () => click(),
};

export const FontAwesome = Template.bind({});
FontAwesome.args = {
    type: 'button',
    texto: 'button',
    carregando: false,
    fontAwesomeIconName: faWrench,
};