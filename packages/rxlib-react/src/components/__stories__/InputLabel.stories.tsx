import React from 'react';
import InputLabel from '../input-label';
import ButtonsCrud from '../buttons/buttons-crud';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    component: InputLabel,
    title: 'rxlib-react/InputLabel',
    argTypes: {
        size: {
            control: 'radio',
            default: 'linha',
            options: ['linha', 'coluna'],
        },
        accept: {
            control: 'radio',
            options: ['audio/*', 'video/*', 'image/*'],
        },
        type: {
            default: 'text',
            control: 'radio',
            options: ['text', 'password', 'date', 'email', 'number', 'file'],
        },
        mask: {
            control: 'radio',
            options: ['cpf', 'cnpj', 'cep', 'telefone', 'currency', 'number'],
        },
    },
} as ComponentMeta<typeof InputLabel>;

const Template: ComponentStory<typeof InputLabel> = (args) => (
    <form action='/'>
        <InputLabel {...args} />
        <ButtonsCrud
            visualizar={false}
            carregando={false}
            styleButton='btn-rxlib'
            linkCancelarVoltar='/?path=/story/rxlib-react-inputlabel--text' />
    </form>
);

function onChange(e: React.FormEvent<HTMLInputElement>) {
    alert(e.currentTarget.value);
}

function showFileName(file: File) {
    alert(file.name);
}

export const TypeText = Template.bind({});
TypeText.args = {
    id: 'id',
    name: 'nome',
    type: 'text',
    maxLength: 50,
    label: 'label',
    readOnly: false,
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const TypePassword = Template.bind({});
TypePassword.args = {
    id: 'id',
    name: 'nome',
    maxLength: 50,
    label: 'label',
    readOnly: false,
    type: 'password',
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const TypeDate = Template.bind({});
TypeDate.args = {
    id: 'id',
    name: 'nome',
    type: 'date',
    maxLength: 50,
    label: 'label',
    readOnly: false,
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const TypeEmail = Template.bind({});
TypeEmail.args = {
    id: 'id',
    name: 'nome',
    type: 'email',
    maxLength: 50,
    label: 'label',
    readOnly: false,
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const TypeNumber = Template.bind({});
TypeNumber.args = {
    id: 'id',
    name: 'nome',
    maxLength: 50,
    type: 'number',
    label: 'label',
    readOnly: false,
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const TypeFile = Template.bind({});
TypeFile.args = {
    id: 'id',
    name: 'nome',
    type: 'file',
    maxLength: 50,
    label: 'label',
    readOnly: false,
    placeholder: 'place holder',
    referencia: React.createRef(),
    setFile: (file: File) => showFileName(file),
};

export const MaskCPF = Template.bind({});
MaskCPF.args = {
    id: 'id',
    mask: 'cpf',
    name: 'nome',
    type: 'text',
    maxLength: 50,
    label: 'label',
    readOnly: false,
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const MaskCNPJ = Template.bind({});
MaskCNPJ.args = {
    id: 'id',
    mask: 'cnpj',
    name: 'nome',
    type: 'text',
    maxLength: 50,
    label: 'label',
    readOnly: false,
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const MaskCEP = Template.bind({});
MaskCEP.args = {
    id: 'id',
    mask: 'cep',
    name: 'nome',
    type: 'text',
    maxLength: 50,
    label: 'label',
    readOnly: false,
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const MaskTelefone = Template.bind({});
MaskTelefone.args = {
    id: 'id',
    name: 'nome',
    type: 'text',
    maxLength: 50,
    label: 'label',
    readOnly: false,
    mask: 'telefone',
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const MaskCurrency = Template.bind({});
MaskCurrency.args = {
    id: 'id',
    name: 'nome',
    type: 'text',
    maxLength: 50,
    label: 'label',
    readOnly: false,
    mask: 'currency',
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const MaskNumber = Template.bind({});
MaskNumber.args = {
    id: 'id',
    name: 'nome',
    type: 'text',
    maxLength: 50,
    label: 'label',
    mask: 'number',
    readOnly: false,
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const SizeLinha = Template.bind({});
SizeLinha.args = {
    id: 'id',
    name: 'nome',
    type: 'text',
    maxLength: 50,
    size: 'linha',
    label: 'label',
    readOnly: false,
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const SizeColuna = Template.bind({});
SizeColuna.args = {
    id: 'id',
    name: 'nome',
    type: 'text',
    maxLength: 50,
    size: 'coluna',
    label: 'label',
    readOnly: false,
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const AcceptAudio = Template.bind({});
AcceptAudio.args = {
    id: 'id',
    name: 'nome',
    type: 'file',
    maxLength: 50,
    label: 'label',
    readOnly: false,
    accept: 'audio/*',
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const AcceptVideo = Template.bind({});
AcceptVideo.args = {
    id: 'id',
    name: 'nome',
    type: 'file',
    maxLength: 50,
    label: 'label',
    readOnly: false,
    accept: 'video/*',
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const AcceptImage = Template.bind({});
AcceptImage.args = {
    id: 'id',
    name: 'nome',
    type: 'file',
    maxLength: 50,
    label: 'label',
    readOnly: false,
    accept: 'image/*',
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const SomenteLeitura = Template.bind({});
SomenteLeitura.args = {
    id: 'id',
    name: 'nome',
    type: 'text',
    maxLength: 50,
    label: 'label',
    readOnly: true,
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const OnChange = Template.bind({});
OnChange.args = {
    id: 'id',
    name: 'nome',
    type: 'text',
    maxLength: 50,
    label: 'label',
    readOnly: false,
    placeholder: 'place holder',
    referencia: React.createRef(),
    onChange: (e: React.FormEvent<HTMLInputElement>) => onChange(e),
};

export const ComCSS = Template.bind({});
ComCSS.args = {
    id: 'id',
    name: 'nome',
    type: 'text',
    maxLength: 50,
    label: 'label',
    readOnly: false,
    className: 'fs-1',
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const Required = Template.bind({});
Required.args = {
    id: 'id',
    name: 'nome',
    type: 'text',
    maxLength: 50,
    label: 'label',
    required: true,
    readOnly: false,
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const AutoFocus = Template.bind({});
AutoFocus.args = {
    id: 'id',
    name: 'nome',
    type: 'text',
    maxLength: 50,
    label: 'label',
    required: true,
    readOnly: false,
    autoFocus: true,
    placeholder: 'place holder',
    referencia: React.createRef(),
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
    id: 'id',
    name: 'nome',
    type: 'text',
    maxLength: 50,
    label: 'label',
    required: true,
    readOnly: false,
    autoFocus: true,
    placeholder: 'place holder',
    defaultValue: 'default value',
    referencia: React.createRef(),
};

export const Limpar = Template.bind({});
Limpar.args = {
    id: 'id',
    name: 'nome',
    type: 'text',
    limpar: true,
    maxLength: 50,
    label: 'label',
    required: true,
    readOnly: false,
    autoFocus: true,
    placeholder: 'place holder',
    defaultValue: 'defaultValue',
    referencia: React.createRef(),
};