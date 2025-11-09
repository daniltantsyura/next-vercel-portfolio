'use client';

import { createTheme } from "@mui/material";
import { Roboto } from "next/font/google";
import { breackpoints, commonComponents, typography } from "./common";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap'
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Классический синий MUI - для кнопок, ссылок, акцентов
    },
    secondary: {
      main: '#dc004e', // Теплый розовый/красный - для второстепенных акцентов
    },
    background: {
      default: '#ffffff', // Чистый белый фон
      paper: '#f5f5f5',   // Слегка серый фон для карточек
    },
    text: {
      primary: '#212121', // Почти черный для основного текста
      secondary: '#757575', // Серый для второстепенного текста
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          transition: 'opacity 0.3s',
          ":hover": {
            opacity: '0.7'
          },

        }
      }
    },
    ...commonComponents
  },
  breakpoints: { ...breackpoints },
  typography: { ...typography },
});

export { roboto };