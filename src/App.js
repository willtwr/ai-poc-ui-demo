import React from 'react';
import Home from 'pages/Home';
import theme from 'theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;