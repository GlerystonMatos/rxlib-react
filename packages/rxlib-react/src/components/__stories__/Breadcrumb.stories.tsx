import Breadcrumb from '../breadcrumb';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    component: Breadcrumb,
    title: 'rxlib-react/Breadcrumb',
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

export const UmItem = Template.bind({});
UmItem.args = {
    itens: [{
        link: '',
        texto: 'Primeiro Item',
    }],
};

export const DoisItens = Template.bind({});
DoisItens.args = {
    itens: [
        {
            link: '/?path=/story/rxlib-react-breadcrumb--um-item',
            texto: 'Primeiro Item',
        },
        {
            link: '',
            texto: 'Segundo Item',
        }
    ],
};