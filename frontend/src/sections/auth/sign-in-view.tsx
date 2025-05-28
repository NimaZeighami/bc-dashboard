import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { Iconify } from 'src/components/iconify';


export function SignInView() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = useCallback(() => {
    router.push('/');
  }, [router]);

  const renderForm = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
      }}
    >
      <TextField
        fullWidth
        name="phoneNumber"
        label="شماره تماس"
        defaultValue="۰۹۱۲۱۲۳۴۵۶۷"
        sx={{ mb: 3 }}
        slotProps={{
          inputLabel: { shrink: true },
        }}
      />

      <Button
        fullWidth
        size="large"
        type="submit"
        color="primary"
        variant="contained"
        onClick={handleSignIn}
      >
        ورود | ثبت نام 
      </Button>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          gap: 1.5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 5,
        }}
      >
        <Typography variant="h5">ورود | ثبت نام </Typography>
      </Box>
      {renderForm}
    </>
  );
}
