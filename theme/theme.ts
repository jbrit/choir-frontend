import { createTheme } from '@mui/material/styles';
import { customPalette, Palette } from './palette';
import { shadows, Shadows } from './shadow';
import { shape } from './radius';
import { typography } from './typography';


export const theme = createTheme({
    palette: customPalette as Palette,
    shadows: shadows as Shadows,
    shape,
    typography: typography as {},
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            padding: '9px 29px',
            '&:hover': {
              boxShadow: 'none'
            }
          }
        }
      }
    }
});
