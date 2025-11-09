'use client';

import { createTheme } from "@mui/material";
import { breackpoints, commonComponents, typography } from "./common";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9', // Светло-голубой - отлично читается на темном фоне
        },
        secondary: {
            main: '#f48fb1', // Светло-розовый
        },
        background: {
            default: '#121212', // Глубокий темно-серый (почти черный)
            paper: '#1e1e1e',   // Чуть светлее для "бумажных" поверхностей (карточки)
        },
        text: {
            primary: '#ffffff', // Белый для основного текста
            secondary: '#aaaaaa', // Светло-серый для второстепенного
        },
    },
    components: {
        MuiLink: {
            variants: [
                {
                    props: { variant: 'h1' },
                    style: ({ theme }) => ({
                        color: theme.palette.primary.dark,
                        filter: 'brightness(125%)',
                        ':hover': {
                            filter: 'brightness(150%)',

                        }
                    })
                },
                {
                    props: { variant: 'inherit' },
                    style: ({ theme }) => ({
                        color: theme.palette.primary.light
                    })
                }
            ],
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                    transition: 'opacity 0.3s, filter 0.3s',
                    ":hover": {
                    }
                }
            }
        },
        ...commonComponents
    },
    breakpoints: { ...breackpoints },
    typography: { ...typography }
});