import React, { useContext, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';
import { Link as RouterLink, Navigate } from 'react-router-dom';

import { UserContext } from '../context/UserContext'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { auth } from '../firebase/firebaseConfig'; 
import { signInWithEmailAndPassword } from 'firebase/auth'; // <-- Import this separately

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', 
        marginTop: theme.spacing(3), 
    },
    submit: {
        margin: theme.spacing(3, 0, 2), 
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1, 
        color: '#fff',
    },
}));

export default function SignIn() {
    const classes = useStyles();
    const context = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);

    const signIn = async () => {
        setOpen(true); 
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            setOpen(false); 
            context.setUser({ email: res.user.email, uid: res.user.uid });
            toast.success('Signed in successfully', {
                hideProgressBar: true,
                autoClose: 4000,
            });
        } catch (err) {
            setOpen(false); 
            console.error('Error signing in user:', err);
            toast.error(err.message, {
                hideProgressBar: true,
                autoClose: 4000,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn();
    };

    if (context.user?.uid) {
        return <Navigate to="/wordlist" />;
    }

    return (
        <Container component="main" maxWidth="xs">
            <Backdrop className={classes.backdrop} open={open}>
                <CircularProgress color="secondary" />
            </Backdrop>
            <CssBaseline />
            <ToastContainer />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Link
                                component={RouterLink}
                                to="/signup"
                                variant="body2"
                                color="secondary"
                            >
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
