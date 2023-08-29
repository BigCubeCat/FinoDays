import {IconButton, InputAdornment, TextField} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

interface IProps {
  label: string;
  value: number;
  setValue: (value: number) => void;
  modeChange: () => void;
}

export default function AccurateInput(props: IProps) {
  const changeValue = () => {
    props.setValue(props.value);
    props.modeChange();
  };
  return (
    <TextField
      fullWidth
      value={props.value}
      label={props.label}
      onChange={(e) => props.setValue(Number(e.target.value))}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={() => props.modeChange()}>
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={() => changeValue()}>
              <DoneIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
