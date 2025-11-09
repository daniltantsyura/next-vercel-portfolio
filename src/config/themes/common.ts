import { Height } from "@mui/icons-material"
import { Theme } from "@mui/material"
import { Montserrat, Nunito } from "next/font/google"

const nunito = Nunito({
    subsets: ['latin', 'cyrillic'],
    display: 'swap'
})

export const commonComponents = {
    MuiCssBaseline: {
        styleOverrides: (theme: Theme) => ({
            body: {
                '&::-webkit-scrollbar': {
                    width: '10px',
                    height: '10px'
                },
                '&::-webkit-scrollbar-track': {
                    background: theme.palette.background.paper,
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: theme.palette.primary.light,
                    border: `3px solid ${theme.palette.background.paper}`,
                    borderRadius: '20px'
                },
                '&::selection': {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText
                }
            },

        }),
    },
}

export const breackpoints = {
    values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        mobile: 390,
        tablet: 770,
        laptop: 1024,
    },
}

export const typography = {
    fontFamily: nunito.style.fontFamily
}