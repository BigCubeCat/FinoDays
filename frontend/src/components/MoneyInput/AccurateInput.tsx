import {IconButton, InputAdornment, TextField} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

interface IProps {
  label: string;
  value: number;
  setValue: (value: number) => void;
  modeChange: () => void;
}

export default function AccurateInput(props: IProps) {
  return (
    <TextField
      fullWidth
      value={props.value}
      label={props.label}
      onChange={(e) => props.setValue(Number(e.target.value))}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={() => props.modeChange()}>
              <DoneIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
