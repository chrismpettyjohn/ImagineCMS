'use client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider as MuiProvider } from '@mui/material/styles';
import { defaultTheme } from './default.theme';
import { ReactNode } from 'react';
import { CssBaseline } from '@mui/material';

export interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <MuiProvider theme={defaultTheme}>
            <CssBaseline />
            {children}
        </MuiProvider>
    )
}