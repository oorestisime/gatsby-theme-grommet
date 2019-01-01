import { deepFreeze } from 'grommet/utils';
import { grommet } from 'grommet/themes';
import { createGlobalStyle } from 'styled-components';
import 'typeface-montserrat';

export const GlobalTheme = createGlobalStyle`
  body {
    margin: 0;
  }
`;
export const customTheme = deepFreeze(grommet, {
  global: {
    font: {
      family: 'Montserrat, Arial, sans-serif',
    },
  },
});
