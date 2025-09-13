// app/theme.ts
import { createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Vazirmatn, sans-serif',
  focusRing: 'auto',
  scale: 0.95,
  fontSmoothing: true,
  colors: {
    primary: ['#e2f5ff', '#bbd6fe', '#90c7fa', '#6ba1e2', '#4a85bf',
      '#356ba8', '#2a5b89', '#1f4a6a', '#153951', '#153300'],
    secondary: ['#ebf7ff', '#c3dafd', '#a0c5e9', '#7fa8dd', '#568dc4',
      '#3b6ba2', '#265170', '#163a4f', '#0c283b', '#00000a'],
    gray: ['#ffffff', '#f9f9f9', '#f2f2f2', '#e6e6e6', '#dcdcdc',
      '#cccccc', '#bfbfbf', '#a6a6a6', '#919191', '#787878'],
  },
});