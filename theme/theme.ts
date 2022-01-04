import { createTheme } from '@mui/material/styles';
import { customPalette, Palette } from './palette';
import { shadows, Shadows } from './shadow';
import { shape } from './radius';


export const theme = createTheme({
    palette: customPalette as Palette,
    shadows: shadows as Shadows,
    shape
});