import {Box, ThemeProvider} from '@mui/material';

import customTheme from '@/theme.ts';
import Header from '@/components/AppBar/Header.tsx';
import Main from '@/components/Main/Main.tsx';

export default function App() {
  return (
    <Box sx={{width: '100vw'}}>
      <ThemeProvider theme={customTheme}>
        <Header />
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Main />
        </Box>
      </ThemeProvider>
    </Box>
  );
}
