import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Hardcoded credentials
    const correctEmail = "admin@123.com";
    const correctPassword = "admin@123";

    console.log("Entered Email:", email);
    console.log("Entered Password:", password);
    console.log("Expected Email:", correctEmail);
    console.log("Expected Password:", correctPassword);

    // Check if the input matches the credentials
    if (email === correctEmail && password === correctPassword) {
      console.log("Login successful, navigating to dashboard");
      navigate("/dashboard"); // Redirect to the dashboard page
    } else {
      console.log("Login failed: Invalid credentials");
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
        value={email}
      />
      <TextField 
        label="Password" 
        type="password"
        fullWidth 
        margin="normal" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Login
      </Button>
      {error && <Typography color="error">{error}</Typography>}
    </Container>
  );
};

export default LoginPage;
