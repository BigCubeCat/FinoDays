import {Box, ThemeProvider} from '@mui/material';

import customTheme from '@/theme.ts';
import Header from '@/components/AppBar/Header.tsx';
import Main from '@/components/Main/Main.tsx';

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{width: '100vw'}}>
        <Header />
        <Main />
      </Box>
    </ThemeProvider>
  );
}
