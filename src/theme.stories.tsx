import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

interface Props {
  variant: 'primary' | 'secondary' | 'tertiary' | 'complementary';
}

const Box = styled.div<Props>`
  padding: 8px;
  border: 1px solid black;
  background-color: ${p => {
    switch (p.variant) {
      case 'primary': return p.theme.primary;
      case 'secondary': return p.theme.secondary;
      case 'tertiary': return p.theme.tertiary;
      case 'complementary': return p.theme.complementary
    }
  }}
`

const Text = styled.div<Props>`
  color: ${p => {
    switch (p.variant) {
      case 'primary': return p.theme.textPrimary;
      case 'secondary': return p.theme.textSecondary;
      case 'tertiary': return p.theme.textTertiary;
      case 'complementary': return p.theme.complementary;
    }
  }}
`

storiesOf('theme', module)
  .add('primary color and primary text', () => ( 
    <Box variant="primary">
      <Text variant="primary">
        Primary text on primary background
      </Text>
    </Box>
  ))
  .add('secondary color and secondary text', () => (
    <Box variant="secondary">
      <Text variant="secondary">
        Secondary text on secondary background
      </Text>
    </Box>
  ))
  .add('tertiary color and tertiary text', () => (
    <Box variant="tertiary">
      <Text variant="tertiary">
        Tertiary text on tertiary background
      </Text>
    </Box>
  ))
  .add('primary color and complementary text', () => (
    <Box variant="primary">
      <Text variant="complementary">
        Complementary text on primary background
      </Text>
    </Box>
  ));
    
