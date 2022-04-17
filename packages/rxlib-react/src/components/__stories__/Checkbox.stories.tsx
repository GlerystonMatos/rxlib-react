import React from 'react';
import Checkbox from '../checkbox';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    component: Checkbox,
    title: 'rxlib-react/Checkbox',
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

function onChange(e: React.FormEvent<HTMLInputElement>) {
    alert(e.currentTarget.value);
}

function onClick(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    alert(e.currentTarget.checked);
}

export const Desmarcado = Template.bind({});
Desmarcado.args = {
    text: 'text',
    name: 'name',
    value: 'false',
    disabled: false,
    defaultChecked: false,
    referencia: React.createRef(),
};

export const Marcado = Template.bind({});
Marcado.args = {
    text: 'text',
    name: 'name',
    value: 'true',
    disabled: false,
    defaultChecked: true,
    referencia: React.createRef(),
};

export const Desabilitado = Template.bind({});
Desabilitado.args = {
    text: 'text',
    name: 'name',
    value: 'true',
    disabled: true,
    defaultChecked: true,
    referencia: React.createRef(),
};

export const OnChange = Template.bind({});
OnChange.args = {
    text: 'text',
    name: 'name',
    value: 'valor',
    disabled: false,
    defaultChecked: false,
    referencia: React.createRef(),
    onChange: (e: React.FormEvent<HTMLInputElement>) => onChange(e),
};

export const OnClick = Template.bind({});
OnClick.args = {
    text: 'text',
    name: 'name',
    value: 'valor',
    disabled: false,
    defaultChecked: false,
    referencia: React.createRef(),
    onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => onClick(e),
};