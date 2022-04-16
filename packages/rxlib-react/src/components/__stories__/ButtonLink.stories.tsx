import ButtonLink from '../buttons/button-link';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    component: ButtonLink,
    title: 'rxlib-react/ButtonLink',
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => <ButtonLink {...args} />;

export const Padrao = Template.bind({});
Padrao.args = {
    texto: 'button-link',
    abrirNovaJanela: false,
    link: '/?path=/story/rxlib-react-buttonlink--padrao',
};

export const ComCSS = Template.bind({});
ComCSS.args = {
    className: 'mt-5',
    texto: 'button-link',
    abrirNovaJanela: false,
    link: '/?path=/story/rxlib-react-buttonlink--com-css',
};

export const AbrirNovaJanela = Template.bind({});
AbrirNovaJanela.args = {
    texto: 'button-link',
    abrirNovaJanela: true,
    link: '/?path=/story/rxlib-react-buttonlink--abrir-nova-janela',
};

export const FontAwesome = Template.bind({});
FontAwesome.args = {
    texto: 'button-link',
    abrirNovaJanela: false,
    fontAwesomeIcon: faLink,
    link: '/?path=/story/rxlib-react-buttonlink--font-awesome',
};