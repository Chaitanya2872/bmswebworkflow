
// import React from "react";
// import {
//   Container,
//   Paper,
//   Box,
//   Typography,
//   Button,
//   TextField,
//   Divider,
//   InputAdornment,
// } from "@mui/material";
// import { Google, Apple, Email, Lock } from "@mui/icons-material";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import sampleimage from "../assets/sampleimage.png.jpg";

// // Props for receiving login handler
// interface SignInPageProps {
//   onLogin: () => void;
// }

// // Types for form inputs
// interface SignInFormInputs {
//   email: string;
//   password: string;
// }

// // Validation schema using Yup
// const schema = yup.object({
//   email: yup.string().email("Invalid email").required("Email is required"),
//   password: yup
//     .string()
//     .min(6, "Min 6 characters")
//     .required("Password is required"),
// });

// const SignInPage: React.FC<SignInPageProps> = ({ onLogin }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<SignInFormInputs>({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit: SubmitHandler<SignInFormInputs> = (data) => {
//     console.log("Signing in:", data);
//     // Call parent login handler on successful submission
//     onLogin();
//   };

//   const handleGoogleLogin = () => {
//     // Redirect to your backend's Google OAuth endpoint
//     window.location.href = "https://bmsserviceworkflow.onrender.com/auth/google";
//   };

//   return (
//     <>
//       <Container maxWidth="md" sx={{ mt: 4 }}>
//         <Paper
//           elevation={3}
//           sx={{
//             borderRadius: 5,
//             display: "flex",
//             overflow: "hidden",
//             backgroundColor: "#fff",
//             minHeight: "500px",
//           }}
//         >
//           {/* Left Image */}
//           <Box
//             sx={{
//               flex: 1,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               bgcolor: "#f4f4f4",
//               p: 2,
//             }}
//           >
//             <img
//               src={sampleimage}
//               alt="Sign In Visual"
//               style={{ maxWidth: "100%", maxHeight: "100%" }}
//             />
//           </Box>

//           {/* Form */}
//           <Box sx={{ flex: 1.2, p: 4 }}>
//             <Typography variant="h4" gutterBottom>
//               Sign in
//             </Typography>

//             <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
//               <Button
//                 variant="outlined"
//                 fullWidth
//                 startIcon={<Google />}
//                 onClick={handleGoogleLogin}
//               >
//                 Google
//               </Button>
//               <Button variant="outlined" fullWidth startIcon={<Apple />}>
//                 Apple
//               </Button>
//             </Box>

//             <Divider sx={{ mb: 3 }}>or continue with email</Divider>

//             <form onSubmit={handleSubmit(onSubmit)} noValidate>
//               <TextField
//                 label="Email"
//                 fullWidth
//                 margin="normal"
//                 {...register("email")}
//                 error={!!errors.email}
//                 helperText={errors.email?.message}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Email />
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               <TextField
//                 label="Password"
//                 type="password"
//                 fullWidth
//                 margin="normal"
//                 {...register("password")}
//                 error={!!errors.password}
//                 helperText={errors.password?.message}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Lock />
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               <Button
//                 type="submit"
//                 variant="contained"
//                 fullWidth
//                 sx={{ mt: 3 }}
//                 size="large"
//               >
//                 Start Trading
//               </Button>
//             </form>

//             <Typography variant="body2" align="right" sx={{ mt: 2 }}>
//               Don’t have an account? <Button size="small">Sign up</Button>
//             </Typography>
//           </Box>
//         </Paper>
//       </Container>
//     </>
//   );
// };

// export default SignInPage;
import React from "react";
import {
  Container,
  Paper,
  Box,
  Typography,
  Button,
  TextField,
  Divider,
  InputAdornment,
} from "@mui/material";
import { Google, Apple, Email, Lock } from "@mui/icons-material";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import sampleimage from "../assets/sampleimage.png.jpg";
import { useNavigate } from "react-router-dom"; // ✅ for redirection

// Props for receiving login handler
interface SignInPageProps {
  onLogin: () => void;
}

// Types for form inputs
interface SignInFormInputs {
  email: string;
  password: string;
}

// Validation schema using Yup
const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Min 6 characters")
    .required("Password is required"),
});

const SignInPage: React.FC<SignInPageProps> = ({ onLogin }) => {
  const navigate = useNavigate(); // ✅ initialize navigation

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SignInFormInputs> = (data) => {
    console.log("Signing in:", data);

    // ✅ Simulate login success
    localStorage.setItem("authToken", "fake-token");

    // ✅ Update app state
    onLogin();

    // ✅ Redirect to dashboard
    navigate("/dashboard");
  };

  const handleGoogleLogin = () => {
    // Redirect to your backend's Google OAuth endpoint
    window.location.href = "https://bmsserviceworkflow.onrender.com/auth/google";
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper
        elevation={3}
        sx={{
          borderRadius: 5,
          display: "flex",
          overflow: "hidden",
          backgroundColor: "#fff",
          minHeight: "500px",
        }}
      >
        {/* Left Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#f4f4f4",
            p: 2,
          }}
        >
          <img
            src={sampleimage}
            alt="Sign In Visual"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </Box>

        {/* Right Form Section */}
        <Box sx={{ flex: 1.2, p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Sign in
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<Google />}
              onClick={handleGoogleLogin}
            >
              Google
            </Button>
            <Button variant="outlined" fullWidth startIcon={<Apple />}>
              Apple
            </Button>
          </Box>

          <Divider sx={{ mb: 3 }}>or continue with email</Divider>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3 }}
              size="large"
            >
              Start Trading
            </Button>
          </form>

          <Typography variant="body2" align="right" sx={{ mt: 2 }}>
            Don’t have an account?{" "}
            <Button size="small" onClick={() => navigate("/signup")}>
              Sign up
            </Button>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignInPage;
