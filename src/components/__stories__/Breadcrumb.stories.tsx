import React from 'react';
import { Story, Meta } from '@storybook/react';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import { BreadcrumbProps } from '../breadcrumb/Breadcrumb.types';

export default {
    component: Breadcrumb,
    title: 'rxlib-react/Breadcrumb',
} as Meta<typeof Breadcrumb>;

const Template: Story<BreadcrumbProps> = (args) => <Breadcrumb {...args} />;

export const UmItem = Template.bind({});
UmItem.args = {
    itens: [
        {
            link: '',
            texto: 'Primeiro Item',
        }
    ],
};

export const DoisItens = Template.bind({});
DoisItens.args = {
    itens: [
        {
            link: 'http://localhost:6006/?path=/story/rxlib-react-breadcrumb--um-item',
            texto: 'Primeiro Item',
        },
        {
            link: '',
            texto: 'Segundo Item',
        }
    ],
};