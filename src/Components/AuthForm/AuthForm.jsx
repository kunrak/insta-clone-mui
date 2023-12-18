import { Box, Button, Grid, Link, Paper, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleAuth = () => {
        if (!inputs.email || !inputs.password) {
            alert('Please fill all the fields');
            return;
        }
        navigate('/');
    };

    return (
        <>
            {/* <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
                <Grid container direction="column" alignItems="center" spacing={2}>
                    <Grid item>
                        <Box
                            component="img"
                            src="/logo.png"
                            alt="Instagram"
                            sx={{ height: 96, cursor: 'pointer' }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            fullWidth
                            placeholder="Email"
                            size="small"
                            type="email"
                            value={inputs.email}
                            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            fullWidth
                            placeholder="Password"
                            size="small"
                            type="password"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </Grid>
                    {!isLogin && (
                        <Grid item>
                            <TextField
                                fullWidth
                                placeholder="Confirm Password"
                                size="small"
                                type="password"
                                value={inputs.confirmPassword}
                                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                            />
                        </Grid>
                    )}
                    <Grid item>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            size="medium"
                            onClick={handleAuth}
                        >
                            {isLogin ? 'Log In' : 'Sign Up'}
                        </Button>
                    </Grid>
                </Grid>
            </Paper> */}
            <Box border={"1px solid gray"} borderRadius={1} padding={2}>
                <Stack>
                    <img src="/logo.png" height={24} alt="Instagram" style={{ height: 96, cursor: 'pointer' }} />
                    <Stack spacing={2}>
                        <TextField id="outlined-basic" size="small" variant="outlined" placeholder='Email' type='email' value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
                        <TextField id="outlined-basic" size="small" variant="outlined" placeholder='Password' type='password' value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                        {!isLogin ? (
                            <TextField id="outlined-basic" size="small" variant="outlined" placeholder='Confirm Password' type='password' value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                        ) : null}
                    </Stack>
                    <Button variant='contained' onClick={handleAuth} sx={{ mt: 2 }}>
                        {isLogin ? 'Log In' : 'Sign Up'}
                    </Button>
                    <Stack direction="row" alignItems="center" justifyContent="center" mt={2}>
                        <Box border="1px solid gray" height="1px" flex={1}></Box>
                        <Typography variant="body2" mx={2}>OR</Typography>
                        <Box border="1px solid gray" height="1px" flex={1}></Box>
                    </Stack>
                    <Box mt={4} display="flex" alignItems="center" justifyContent={"center"} sx={{ cursor: "pointer" }}>
                        <img src="/google.png" height={22} alt="Instagram" />
                        <Typography mx={1} color="lightblue">Sign up with Google</Typography>
                    </Box>
                </Stack>
            </Box>
            <Box p={2} borderRadius={1} bgColor="black" border={"1px solid gray"}>
                <Grid container direction="row" alignItems="center" justifyContent="center">
                    <Typography variant="body2" sx={{ mr: 1 }}>
                        {isLogin ? "Don't have an account?" : 'Already have an account?'}
                    </Typography>
                    <Link
                        component="button"
                        variant="body2"
                        color="primary"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? 'Sign Up' : 'Log In'}
                    </Link>
                </Grid>
            </Box>
        </>
    );
}

export default AuthForm;