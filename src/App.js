import React from 'react';
import Home from 'pages/Home';
import Theme from 'theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const theme = Theme();
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