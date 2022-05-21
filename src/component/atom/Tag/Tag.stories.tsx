import { ComponentMeta, Story } from '@storybook/react';
import { Tag } from '.';

export default {
  title: 'atom/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: Story = (args) => <Tag {...args} />;

export const ExtraSmallPrimary = Template.bind({});
ExtraSmallPrimary.args = { children: <span className='tag-xs-primary'>tag-xs-primary</span> };

export const ExtraSmallPink = Template.bind({});
ExtraSmallPink.args = { children: <span className='tag-xs-pink'>tag-xs-pink</span> };
