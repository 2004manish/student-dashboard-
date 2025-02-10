import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Ensure firebase.js is correctly set up

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect after successful login
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "100px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField 
        label="Email" 
        type="email"
        fullWidth 
        margin="normal" 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <TextField 
        label="Password" 
        type="password"
        fullWidth 
        margin="normal" 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Login
      </Button>
      {error && <Typography color="error">{error}</Typography>}
    </Container>
  );
};

export default LoginPage;
