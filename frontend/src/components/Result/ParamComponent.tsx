import {
  Box, Typography
} from '@mui/material';

export default function ParamComponent(props: {to: number, caption: string}) {
  return (
    <Box>
      <Typography variant={'h6'}>
        До {props.to}
      </Typography>
      <Typography variant={'caption'}>
        {props.caption}
      </Typography>
    </Box>
  );
}