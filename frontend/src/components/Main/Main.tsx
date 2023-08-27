import {Box} from '@mui/material';
import UserForm from '@/components/UserForm/UserForm.tsx';

export default function Main() {
  return (
    <Box
      sx={{
        marginTop: 5,
      }}
    >
      <UserForm />
    </Box>
  );
}
