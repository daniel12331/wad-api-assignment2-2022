import React , {useState} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import toaster from 'toastify-react';
import { toast } from "react-toastify";
import { useNavigate} from 'react-router-dom';

const LoginPage = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setcPassword] = useState('')

  const { register, login} = useAuth()
  const nav = useNavigate()
   props.funcNav(false);

  

  async function handleRegister(e) {
    e.preventDefault()

    if (password !== cpassword){
      toaster.error('Password do not match!')
      console.log(`passwords dont match ${password}`)
    }
      else {
    try{
   await register(email,password)
   props.funcNav(true);
   nav("/")
    }
    catch {
      toast.error('Failed to create an account')
      console.log('failed to create an account login')

    }
  }
  }
  async function handleLogin(e) {
    e.preventDefault()

    try{
   await login(email,password)
   props.funcNav(true);
   nav("/")
    }
    catch {
      toast.error('Failed to sign in')
      console.log('failed to create an account login')

    }
  
  }
  
const intialState = {
  isMember: true,
}
    const [values, setValues] = useState(intialState)

    const toggleMember = () => {
      setValues({...values, isMember: !values.isMember});
      console.log(values.isMember )
  }
    
  return (
    <Container component="main" maxWidth="xs">
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'primary' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
      {values.isMember?'Sign In':'Register'}
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }} >
      {!values.isMember &&(
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Full Name"
          name="name"
          autoComplete="name"
          autoFocus
          onChange={(e) => setName(e.target.value)}
        />)} 
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
              {!values.isMember &&(

        <TextField
          margin="normal"
          required
          fullWidth
          name="confirm passsword"
          label="Confirm passsword"
          type="password"
          id="confirm passsword"
          autoComplete="current-password"
          onChange={(e) => setcPassword(e.target.value)}
        />)} 
           {values.isMember?
           <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleLogin}
        >Sign In
        </Button>
        :
        <Button
          type='submit'
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleRegister}
        >Register
        </Button>}
        
        <Grid container>
          <Grid item>
            <Link variant="body2" onClick={toggleMember}>
            {values.isMember?'Not a member yet?':'Already a member?'}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Container>
    );
};
export default LoginPage;