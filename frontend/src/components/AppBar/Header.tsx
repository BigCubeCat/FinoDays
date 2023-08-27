import {AppBar, Typography, Toolbar, IconButton, Box} from '@mui/material';

export default function Header() {
  return (
    <Box>
      <AppBar position={'static'}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2}}
          ></IconButton>
          <Box sx={{m: 2}}>
            <Typography variant="h5">ПСБ+</Typography>
            <Typography variant="caption" className={'Logo'}>
              Сильный помощник для сильных людей
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
