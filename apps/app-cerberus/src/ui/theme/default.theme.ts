import { createTheme } from '@mui/material/styles';

const WHITE = '#ffffff';
const DARK_BLUE = '#1565c0';
const LIGHT_BLUE = '#e3f2fd';
const SOFT_GRAY = '#f5f5f5';
const DARK_TEXT = '#1b1b1b';
const LIGHT_TEXT = '#757575';
const ACCENT_COLOR = '#ff7043';

export const defaultTheme = createTheme({
    palette: {
        primary: {
            main: DARK_BLUE,
            contrastText: WHITE,
        },
        secondary: {
            main: LIGHT_BLUE,
            contrastText: DARK_TEXT,
        },
        text: {
            primary: DARK_TEXT,
            secondary: LIGHT_TEXT,
        },
        background: {
            default: SOFT_GRAY,
            paper: WHITE,
        },
        action: {
            hover: ACCENT_COLOR,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 8,
                },
                contained: {
                    backgroundColor: ACCENT_COLOR,
                    color: WHITE,
                    '&:hover': {
                        backgroundColor: '#ff5722',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: DARK_BLUE,
                    color: WHITE,
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h6: {
                    color: WHITE,
                },
            },
        },
    },
});
