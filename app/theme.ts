import { MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
  colors: {
    primary: [
      '#e2f5ff', // 0. Lightest shade of primary
      '#bbd6fe', // 1.
      '#90c7fa', // 2.
      '#6ba1e2', // 3.
      '#4a85bf', // 4.
      '#356ba8', // 5.
      '#2a5b89', // 6.
      '#1f4a6a', // 7.
      '#153951', // 8. Darkest shade of primary
      '#153300', // 9.
    ],
    secondary: [
      '#ebf7ff', // 0. Lightest shade of secondary
      '#c3dafd', // 1.
      '#a0c5e9', // 2.
      '#7fa8dd', // 3.
      '#568dc4', // 4.
      '#3b6ba2', // 5.
      '#265170', // 6.
      '#163a4f', // 7.
      '#0c283b', // 8. Darkest shade of secondary
      '#00000a', // 9.
    ],
    gray: [
      '#ffffff', // 0.
      '#f9f9f9', // 1.
      '#f2f2f2', // 2.
      '#e6e6e6', // 3.
      '#dcdcdc', // 4.
      '#cccccc', // 5.
      '#bfbfbf', // 6.
      '#a6a6a6', // 7.
      '#919191', // 8.
      '#787878', // 9.Darkest shade of gray
    ],
    // Add other colors as needed
  },
  focusRing: 'auto',
  scale: 0.95,
  fontSmoothing: true,
};

export default theme;
