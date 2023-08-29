import { Dialog, DialogTitle} from '@mui/material';
import Header from '../AppBar/Header';

export default function ThxDialog(props: {open: boolean, close: () => void}) {
  return (
    <Dialog onClose={() => props.close()} open={props.open} fullScreen>
      <Header />
      <DialogTitle>
        Спасибо за оставленную заявку!
      </DialogTitle>
      В указанное время с Вами свяжется менеджер для обсуждения персональных условий, расчет калькулятора предварительный.
    </Dialog>
  );
}