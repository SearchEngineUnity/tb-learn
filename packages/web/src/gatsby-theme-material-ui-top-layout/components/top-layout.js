import React from 'react';
import { deepmerge } from '@mui/utils';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { useCustomTheme } from '../useCustomTheme';

export default function TopLayout({ children, theme }) {
  const customTheme = useCustomTheme();

  let mergedTheme = deepmerge(theme, customTheme);
  mergedTheme = responsiveFontSizes(mergedTheme);

  return (
    <ThemeProvider theme={mergedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
