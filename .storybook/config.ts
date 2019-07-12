import { addDecorator, configure } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { ThemeProvider } from 'styled-components';
import { withThemes } from 'storybook-styled-components';

import { theme } from '../src/theme';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

const themes = {
  'default': theme,
};

addDecorator(StoryRouter());
addDecorator(withThemes(themes));

configure(loadStories, module);
