import React from 'react';
import { Container, Grid, Paper, Box, Typography, Button, TextField, Divider } from '@mui/material';
import { Google, Apple, Email, Lock } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import sampleimage from './assets/sampleimage.png.jpg'
import * as yup from 'yup';


const schema = yup.object({
  email: yup.string().email('Invalid email').required(),
  password: yup.string().min(6, 'Min 6 characters').required(),
}).required();

export default function SignInPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    console.log('Signing in:', data);
  };
  const handleGoogleLogin=()=>{
    window.location.href="https://bmsserviceworkflow.onrender.com/auth/google";
  };
  

  return (
    <Container maxWidth="md" sx={{ mt: 1 }}>
      <Paper sx={{ borderRadius: 5, overflow: 'hidden', display: 'flex',backgroundColor:'smoke' }}>
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f9f9f9' }}>
          <img src={sampleimage} alt="Signup" style={{ maxWidth: '100%',height:"100%"}} />
        </Box>

        <Box sx={{ flex: 1.2, p: 5 }}>
          <Typography variant="h4" gutterBottom>Sign in</Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Button variant="outlined" sx={{color:'black'}} onClick={handleGoogleLogin} fullWidth startIcon={<Google />}></Button>
            <Button variant="outlined" sx={{color:'black'}} fullWidth startIcon={<Apple />}></Button>
          </Box>

          <Divider sx={{ mb: 3 }}>or continue with email address</Divider>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              {...register('email')}
              label="Email address"
              fullWidth margin="small"
              error={!!errors.email}
              helperText={errors.email?.message}
              InputProps={{ startAdornment: <Email sx={{ mr: 1 }} /> }}
            />
            <TextField
              {...register('password')}
              label="Password"
              type="password" sx={{ mb: 1 }}
              fullWidth margin="normal"
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{ startAdornment: <Lock sx={{ mr: 1 }} /> }}
            />
            <Button type="submit" variant="contained" fullWidth size="large" sx={{ mt: 3 }}>
              Start trading
            </Button>
          </form>

          <Typography variant="body2" align="right" sx={{ mt: 2 }}>
            Don’t have an account? <Button size="small">Sign up</Button>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
