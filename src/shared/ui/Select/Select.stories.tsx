import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Select } from './Select';
import 'app/styles/index.scss';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'label',
  options: [
    {value: '1', content: 'Первый'},
    {value: '2', content: 'Второй'},
  ]
};
