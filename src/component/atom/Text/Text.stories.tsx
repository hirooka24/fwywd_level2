import { ComponentMeta, Story } from '@storybook/react';
import { Text } from './Text';

export default {
  title: 'atom/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: Story = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {};
