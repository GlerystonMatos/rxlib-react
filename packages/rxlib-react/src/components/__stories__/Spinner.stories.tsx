import Spinner from '../spinner';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    component: Spinner,
    title: 'rxlib-react/Spinner',
    argTypes: {
        classStyle: {
            control: 'radio',
            default: 'rxlib-spinner',
            options: ['rxlib-spinner', 'text-primary', 'text-secondary', 'text-success', 'text-danger', 'text-warning', 'text-info', 'text-light', 'text-dark'],
        },
    },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Padrao = Template.bind({});
Padrao.args = {
    classStyle: 'rxlib-spinner',
};

export const ComCSS = Template.bind({});
ComCSS.args = {
    classNameDiv: 'mt-3',
    classNameSpinner: 'ms-3',
    classStyle: 'rxlib-spinner',
};