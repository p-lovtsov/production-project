import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quo? Consectetur et quibusdam repellat illum ipsum sequi adipisci ratione numquam?',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quo? Consectetur et quibusdam repellat illum ipsum sequi adipisci ratione numquam?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
