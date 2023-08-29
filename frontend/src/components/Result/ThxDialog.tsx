import {Box, Dialog, DialogTitle, Typography} from '@mui/material';
import Header from '../AppBar/Header';

export default function ThxDialog(props: {open: boolean, close: (() => void)}) {
  return (
    <Dialog onClose={() => props.close()} open={props.open} fullScreen>
      <Header />
      <Box sx={{m: 4}}>
        <DialogTitle>
          <Typography variant={'h5'}>
            Спасибо за оставленную заявку!
          </Typography>
          <Typography variant={'h6'} sx={{marginTop: 3}}>
            В указанное время с Вами свяжется менеджер для обсуждения персональных условий, расчет калькулятора
            предварительный.
          </Typography>
        </DialogTitle>
      </Box>
    </Dialog>
  );
}
