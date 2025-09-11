// theme.ts
import { createTheme, rem } from '@mantine/core';

// Helper function to create a full 10-shade array from a single color.
// This keeps our theme compatible with Mantine's structure without manual repetition.
const createColorArray = (color: string): [string, ...string[]] => Array(10).fill(color) as [string, ...string[]];
// --- Parked Colors for Future Use ---// Secondary Color: #a95163 (Temporarily disabled for MVP)
export const theme = createTheme({
  /** ---------------------------------
   *          COLORS
   * This palette is intentionally limited to enforce the Brutalist style.
   *--------------------------------- */
  colors: {
    // This is the line you'll change
    // Using the helper function for a simplified, uniform gray palette.
    gray: createColorArray('#212121'),
    
    primary: createColorArray('#ff1a9c'),
    accent: createColorArray('#ffd23f'),
  },

  /** ---------------------------------
   *          TYPOGRAPHY
   *--------------------------------- */
  fontFamily: 'Vazirmatn Mono, Courier New, monospace',
  headings: {
    fontFamily: 'Kufam, sans-serif',
    fontWeight: '900',
  },
  fontSizes: {
    sm: rem(16), md: rem(20), lg: rem(24), xl: rem(32), '2xl': rem(48),
  },
  
  /** ---------------------------------
   *          SIZING & LAYOUT
   *--------------------------------- */
  spacing: {
    sm: rem(8), md: rem(16), lg: rem(24), xl: rem(32), '2xl': rem(64),
  },
  radius: {
    none: rem(0),
  },
  defaultRadius: 'none',

  /** ---------------------------------
   *          EFFECTS
   *--------------------------------- */
  shadows: {
    // BRUTALIST RULE: Shadows are not used for depth. They are solid, offset shapes
    // used to add structural emphasis. Therefore, they must have zero blur and
    // 100% opacity. The color should always be pure black (#000000).
   'hard-ltr-sm': '4px 4px 0px #000000',
   'hard-rtl-sm': '-4px 4px 0px #000000',
   'hard-ltr-md': '8px 8px 0px #000000',
   'hard-rtl-md': '-8px 8px 0px #000000',
  },
            
  /** ---------------------------------
   *          DEFAULT COMPONENT STYLES
   *--------------------------------- */
  components: {
    Text: {
      defaultProps: {
        c: 'gray.5', // Default text or body is Dark Gray for readability.
      },
    },
    Title: {
      defaultProps: {
        c: 'gray.6', // Titles or Headings are Black.
      },
    },
    Button: {  
      defaultProps: {
        radius: 'none',
        c: 'gray.9', // Button text is Pure Black for high contrast.
      },
      styles: (theme) => ({
        root: {
          // BRUTALIST RULE: Borders are structural and must be pure black.
          // In dark mode, they should be pure white.
          border: `${rem(2)} solid ${theme.black}`,
          backgroundColor: theme.white,
          '&:hover': {
            backgroundColor: theme.colors.accent[0],
          },
        },  
      }), 
    },   
    Card: {
      defaultProps: {
        radius: 'none',
        withBorder: true,
      },
      // The `styles` property can be a function that receives the theme, props, and context (like `dir`).
      styles: (theme, props, { dir }) => ({
        root: {
          // BRUTALIST RULE: Borders are structural and must be pure black.
          borderColor: theme.black,
          borderWidth: rem(2),
          // RTL-AWARE SHADOW:
          // We check the direction (`dir`). If it's 'rtl', we use the RTL shadow.
          // Otherwise, we default to the LTR shadow.
          boxShadow: dir === 'rtl' ? theme.shadows['hard-rtl-sm'] : theme.shadows['hard-ltr-sm'],
        },
     }),
    },
  },
});
