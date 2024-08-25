// import React, { useState, useContext } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
// import { makeStyles } from '@mui/styles';
// import { Link as RouterLink, Navigate } from 'react-router-dom'; 

// import { UserContext } from '../context/UserContext';  
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; 
// import { auth } from '../firebase/firebaseConfig'; 

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%', 
//         marginTop: theme.spacing(3), 
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2), 
//     },
//     backdrop: {
//         zIndex: theme.zIndex.drawer + 1, 
//         color: '#fff',
//     },
// }));

// export default function SignUp() {
//     const classes = useStyles();
//     const { user, setUser } = useContext(UserContext);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [open, setOpen] = useState(false);

//     const handleSignUp = async () => {
//         setOpen(true);
//         try {
//             const res = await auth.createUserWithEmailAndPassword(email, password);
//             setUser({ email: res.user.email, uid: res.user.uid });
//             toast.success('Signed up successfully', {
//                 hideProgressBar: true,
//                 autoClose: 4000,
//             });
//         } catch (err) {
//             console.error('Error in signing up user:', err);
//             toast.error(err.message, {
//                 hideProgressBar: true,
//                 autoClose: 4000,
//             });
//         } finally {
//             setOpen(false);
//         }
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         handleSignUp();
//     };

//     if (user) {
//         return <Navigate to="/wordlist" />;
//     }

//     return (
//         <Container component="main" maxWidth="xs">
//             <Backdrop className={classes.backdrop} open={open}>
//                 <CircularProgress color="secondary" />
//             </Backdrop>
//             <ToastContainer />
//             <CssBaseline />
//             <div className={classes.paper}>
//                 <Avatar className={classes.avatar}>
//                     <LockOutlinedIcon />
//                 </Avatar>
//                 <Typography component="h1" variant="h5">
//                     Sign Up
//                 </Typography>
//                 <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 autoComplete="fname"
//                                 name="firstName"
//                                 variant="outlined"
//                                 required
//                                 fullWidth
//                                 id="firstName"
//                                 label="First Name"
//                                 autoFocus
//                                 value={firstName}
//                                 onChange={(e) => setFirstName(e.target.value)}
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 variant="outlined"
//                                 required
//                                 fullWidth
//                                 id="lastName"
//                                 label="Last Name"
//                                 name="lastName"
//                                 autoComplete="lname"
//                                 value={lastName}
//                                 onChange={(e) => setLastName(e.target.value)}
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <TextField
//                                 variant="outlined"
//                                 required
//                                 fullWidth
//                                 id="email"
//                                 label="Email Address"
//                                 name="email"
//                                 autoComplete="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <TextField
//                                 variant="outlined"
//                                 required
//                                 fullWidth
//                                 name="password"
//                                 label="Password"
//                                 type="password"
//                                 id="password"
//                                 autoComplete="current-password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </Grid>
//                     </Grid>
//                     <Button
//                         type="submit"
//                         fullWidth
//                         variant="contained"
//                         color="primary"
//                         className={classes.submit}
//                     >
//                         Sign Up
//                     </Button>
//                     <Grid container justifyContent="center">
//                         <Grid item>
//                             <Link
//                                 component={RouterLink}
//                                 to="/signin"
//                                 variant="body2"
//                                 color="secondary"
//                             >
//                                 Already have an account? Sign in
//                             </Link>
//                         </Grid>
//                     </Grid>
//                 </form>
//             </div>
//         </Container>
//     );
// }
import React, { useState, useContext } from 'react';
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
import { createUserWithEmailAndPassword } from 'firebase/auth';

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

export default function SignUp() {
    const classes = useStyles();
    const { user, setUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [open, setOpen] = useState(false);

    const handleSignUp = async () => {
        setOpen(true);
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            setUser({ email: res.user.email, uid: res.user.uid });
            toast.success('Signed up successfully', {
                hideProgressBar: true,
                autoClose: 4000,
            });
        } catch (err) {
            console.error('Error in signing up user:', err);
            toast.error(err.message, {
                hideProgressBar: true,
                autoClose: 4000,
            });
        } finally {
            setOpen(false);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSignUp();
    };

    if (user) {
        return <Navigate to="/wordlist" />;
    }

    return (
        <Container component="main" maxWidth="xs">
            <Backdrop className={classes.backdrop} open={open}>
                <CircularProgress color="secondary" />
            </Backdrop>
            <ToastContainer />
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Grid>
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
                        Sign Up
                    </Button>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Link
                                component={RouterLink}
                                to="/signin"
                                variant="body2"
                                color="secondary"
                            >
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
