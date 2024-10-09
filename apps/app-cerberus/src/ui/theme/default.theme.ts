import { createTheme } from '@mui/material/styles';

const WHITE = '#ffffff';

const DARK_BLUE = '#1976d2';
const LIGHT_GRAY = '#BDBDBD';


const DARK_TEXT = '#212121'; // Dark color for text

export const defaultTheme = createTheme({
    palette: {
        primary: {
            main: DARK_BLUE,
        },
        secondary: {
            main: LIGHT_GRAY,
        },
        text: {
            primary: DARK_TEXT, // Dark text for visibility on light backgrounds
            secondary: '#757575', // Optional: lighter grey for secondary text
        },
        background: {
            default: LIGHT_GRAY,
            paper: WHITE,
        },
    },
});
