import { createContext } from "react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, teal } from '@mui/material/colors';

export const ThemeContext = createContext({
    darkMode: false,
});

function Theme() {
    const theme = createTheme({
        palette: {
            mode: "light",
            primary: {
                light: deepPurple[200],
                main: deepPurple[400],
                dark: deepPurple[800]
            },
            secondary: {
                light: teal[100],
                main: teal[300],
                dark: teal[800]
            },
            background: {
                default: deepPurple[900]
            },
        },
        components: {
            MuiPaper: {
                defaultProps: {
                    elevation: 5
                }
            },
        },
    });
    return responsiveFontSizes(theme);
};

export default Theme;