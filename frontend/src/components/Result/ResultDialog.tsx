import {Box, Dialog, DialogTitle, Typography} from '@mui/material';
import Header from '../AppBar/Header';

export default function ResultDialog(props: {open: boolean, close: () => void}) {
  return (
    <Dialog onClose={() => props.close()} open={props.open} fullScreen>
      <Header />
      <DialogTitle>
        <Typography variant={'h5'} textAlign={'center'}>
          На основании ваших ответов мы модобрали для вас лучшие предложения
        </Typography>
      </DialogTitle>
      <Box sx={{}}>

      </Box>
    </Dialog>
  );
}