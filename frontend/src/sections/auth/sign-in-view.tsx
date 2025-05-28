import { useState } from 'react';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useRouter } from 'src/routes/hooks';

// fake APIs (replace with real API calls)
const sendOtpApi = async (phone: string) =>
  new Promise((res) => setTimeout(res, 500));

const verifyOtpApi = async (phone: string, otp: string) =>
  new Promise<{ status: 'hasAccount' | 'noAccount' }>((res) =>
    setTimeout(() =>
      res({
        status: phone.endsWith('1') ? 'hasAccount' : 'noAccount',
      }), 500)
  );

export function SignInView() {
  const router = useRouter();

  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    if (!phone.startsWith('09') || phone.length !== 11) {
      setError('شماره تماس معتبر نیست.');
      return;
    }
    setError('');
    setLoading(true);
    await sendOtpApi(phone);
    setLoading(false);
    setStep('otp');
  };

  const handleVerifyOtp = async () => {
    if (otp.length < 4) {
      setError('کد تایید نامعتبر است.');
      return;
    }
    setError('');
    setLoading(true);
    const result = await verifyOtpApi(phone, otp);
    setLoading(false);

    if (result.status === 'hasAccount') {
      router.push('/dashboard');
    } else {
      router.push(`/signup`);
    }
  };

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
        <Typography variant="h5">ورود | ثبت نام</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          flexDirection: 'column',
        }}
      >
        {error && (
          <Alert severity="warning" sx={{ width: '100%', mb: 2 }}>
            {error}
          </Alert>
        )}

        {step === 'phone' ? (
          <>
            <TextField
              fullWidth
              name="phoneNumber"
              label="شماره تماس"
              placeholder="مثلاً 09121234567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              onClick={handleSendOtp}
              disabled={loading}
            >
              {loading ? 'در حال ارسال...' : 'دریافت کد تایید'}
            </Button>
          </>
        ) : (
          <>
            <TextField
              fullWidth
              name="otp"
              label="کد تایید"
              placeholder="مثلاً 1234"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
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
              onClick={handleVerifyOtp}
              disabled={loading}
            >
              {loading ? 'در حال بررسی...' : 'تایید کد'}
            </Button>
          </>
        )}
      </Box>
    </>
  );
}
