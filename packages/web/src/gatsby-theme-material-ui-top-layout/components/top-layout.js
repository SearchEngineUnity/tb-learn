import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, responsiveFontSizes, createTheme } from '@mui/material/styles';
import { useCustomTheme } from '../useCustomTheme';

export default function TopLayout({ children }) {
  const customTheme = createTheme(useCustomTheme());
  const responsiveCustomTheme = responsiveFontSizes(customTheme);

  return (
    <ThemeProvider theme={responsiveCustomTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
