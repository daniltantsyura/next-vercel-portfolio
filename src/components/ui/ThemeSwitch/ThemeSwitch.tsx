'use client';

import { Suspense } from "react";
import { ThemeSwitchUI } from "./ThemeSwitch.ui";
import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import { useTheme } from "@/src/providers/ThemeProvider/ThemeProvider";

type Props = {
    sx: SxProps<Theme>;
}

export default function ThemeSwitch({sx}: Props) {
    const themeContext = useTheme();

    return (
        <Suspense>
            <ThemeSwitchUI sx={sx} checked={themeContext.isDark} onChange={themeContext.toggleTheme}/>
        </Suspense>
    );
}