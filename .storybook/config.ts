import { addDecorator, configure } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(StoryRouter())

configure(loadStories, module);
