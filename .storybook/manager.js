import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://netanel-mazuz.dev/icon.svg',
    brandTitle: 'Netanel Mazuz Components',
    brandUrl: 'https://netanel-mazuz.dev',
  },
});
