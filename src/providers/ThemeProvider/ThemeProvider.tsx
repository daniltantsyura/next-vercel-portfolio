'use client';

import { darkTheme } from "@/src/config/themes/darkTheme";
import { lightTheme } from "@/src/config/themes/lightTheme";
import { setCookie } from "@/src/utils/client/cookies.client";
import { CssBaseline, GlobalStyles, ThemeProvider, useMediaQuery } from "@mui/material";
import { PropsWithChildren, Suspense, useContext, createContext, useState } from "react";

interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}

type Props = {
    cookieTheme: string;
} & PropsWithChildren;

const ThemeContext = createContext<ThemeContextType>({
    isDark: false,
    toggleTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);



export default function MuiThemeProvider({ cookieTheme, children }: Props) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [isDark, setIsDark] = useState(false);
    const [isSavedSetted, changeSetted] = useState(false);

    const savedTheme = cookieTheme;
    if (savedTheme && !isSavedSetted) {
        setIsDark(savedTheme === 'dark');
        changeSetted(true);
    } else if (!isSavedSetted) {
        setIsDark(prefersDarkMode);
        changeSetted(true);
    }


    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        setCookie('hospital-theme', newTheme ? 'dark' : 'light');
    };

    const currentTheme = isDark ? darkTheme : lightTheme;

    const themeWithTransitions = {
        ...currentTheme,
        transitions: {
            ...currentTheme.transitions,
            duration: {
                ...currentTheme.transitions?.duration,
                standard: 300, // Увеличиваем время стандартных переходов
            },
        },
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            <ThemeProvider theme={themeWithTransitions}>
                <Suspense>
                    <CssBaseline />
                </Suspense>

                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}