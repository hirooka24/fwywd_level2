import { ComponentMeta, Story } from '@storybook/react';
import { Logo, LogoProps } from '.';
import LogoImage from '~/img/Logo-white.png';

export default {
  title: 'atom/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = { src: LogoImage, alt: 'logo image' };
