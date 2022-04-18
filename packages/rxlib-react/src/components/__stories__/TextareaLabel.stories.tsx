import React from 'react';
import TextareaLabel from '../textarea-label';
import ButtonsCrud from '../buttons/buttons-crud';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    component: TextareaLabel,
    title: 'rxlib-react/TextareaLabel',
} as ComponentMeta<typeof TextareaLabel>;

const Template: ComponentStory<typeof TextareaLabel> = (args) => (
    <form action='/'>
        <TextareaLabel {...args} />
        <ButtonsCrud
            visualizar={false}
            carregando={false}
            styleButton='btn-rxlib'
            linkCancelarVoltar='/?path=/story/rxlib-react-textarealabel--auto-focus' />
    </form>
);

export const Padrao = Template.bind({});
Padrao.args = {
    id: 'id',
    name: 'nome',
    maxLength: 50,
    label: 'label',
    readOnly: false,
    defaultValue: '',
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const MaisLinhas = Template.bind({});
MaisLinhas.args = {
    id: 'id',
    rows: 6,
    name: 'nome',
    maxLength: 50,
    label: 'label',
    readOnly: false,
    defaultValue: '',
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const SomenteLeitura = Template.bind({});
SomenteLeitura.args = {
    id: 'id',
    name: 'nome',
    maxLength: 50,
    label: 'label',
    readOnly: true,
    defaultValue: '',
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const AutoFocus = Template.bind({});
AutoFocus.args = {
    id: 'id',
    name: 'nome',
    maxLength: 50,
    label: 'label',
    readOnly: false,
    autoFocus: true,
    defaultValue: '',
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const Required = Template.bind({});
Required.args = {
    id: 'id',
    name: 'nome',
    maxLength: 50,
    label: 'label',
    required: true,
    readOnly: false,
    autoFocus: true,
    defaultValue: '',
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const ComCSS = Template.bind({});
ComCSS.args = {
    id: 'id',
    name: 'nome',
    maxLength: 50,
    label: 'label',
    required: true,
    readOnly: false,
    autoFocus: true,
    defaultValue: '',
    className: 'fs-1',
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
    id: 'id',
    name: 'nome',
    maxLength: 50,
    label: 'label',
    required: true,
    readOnly: false,
    autoFocus: true,
    placeholder: 'place holder',
    defaultValue: 'default value',
    referencia: React.createRef(),
};

export const SizeLinha = Template.bind({});
SizeLinha.args = {
    id: 'id',
    name: 'nome',
    maxLength: 50,
    size: 'linha',
    label: 'label',
    required: true,
    readOnly: false,
    autoFocus: true,
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const SizeColuna = Template.bind({});
SizeColuna.args = {
    id: 'id',
    name: 'nome',
    maxLength: 50,
    size: 'coluna',
    label: 'label',
    required: true,
    readOnly: false,
    autoFocus: true,
    placeholder: 'place holder',
    referencia: React.createRef(),
};