// import React, { useContext } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
// import Chip from '@mui/material/Chip';
// import Divider from '@mui/material/Divider';
// import { makeStyles } from '@mui/styles';
// import { UserContext } from '../context/UserContext';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

// const useStyles = makeStyles((theme) => ({
//     paper1: {
//         marginTop: theme.spacing(2),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     main: {
//         padding: theme.spacing(1),
//     },
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: 'justify',
//     },
//     paper2: {
//         width: '96%',
//         boxSizing: 'border-box',
//         marginTop: theme.spacing(2),
//         padding: theme.spacing(1),
//         textAlign: 'justify',
//         border: '2px solid black',
//     },
//     buttonGroup: {
//         width: '100%',
//         display: 'flex',
//         justifyContent: 'space-around',
//         marginTop: theme.spacing(2),
//         border: '1px solid black',
//         padding: theme.spacing(0.75),
//         borderRadius: '4px',
//     },
//     highlight: {
//         fontWeight: 'bold',
//     },
// }));

// const Desc = () => {
//     const classes = useStyles();
//     return (
//         <>
//             <Typography
//                 className={classes.highlight}
//                 variant="h4"
//                 color="secondary"
//             >
//                 Dictionary <span style={{ color: '#ac1900' }}>+</span> Notes
//             </Typography>
//             <Typography color="textPrimary">
//                 We google dozens of words every week, but how many of them can
//                 you really remember after a while? Probably just a handful. This
//                 does not come as a surprise because the human brain needs
//                 deliberate practice to remember things in the longer run. But the
//                 task of going to another app to note down these words looks
//                 tedious.
//             </Typography>

//             <Typography style={{ marginTop: '5px' }} color="textPrimary">
//                 This is where <span className={classes.highlight}>WORDS</span>{' '}
//                 jumps in. An all-in-one solution that lets you search for words
//                 and save them to your personal list with the touch of a button.
//             </Typography>
//         </>
//     );
// };

// const About = () => {
//     const classes = useStyles();
//     const { user } = useContext(UserContext);

//     return (
//         <Container component="main" maxWidth="sm" className={classes.main}>
//             <div className={classes.paper1}>
//                 <Paper elevation={0} className={classes.paper}>
//                     <Desc />
//                     {user === null && (
//                         <>
//                             <Typography style={{ marginTop: '5px' }}>
//                                 Let's get started!
//                             </Typography>
//                             <div className={classes.buttonGroup}>
//                                 <RouterLink
//                                     to="/signup"
//                                     style={{ textDecoration: 'inherit' }}
//                                 >
//                                     <Button
//                                         variant="outlined"
//                                         size="large"
//                                         color="secondary"
//                                     >
//                                         Sign Up
//                                     </Button>
//                                 </RouterLink>
//                                 <RouterLink
//                                     to="/signin"
//                                     style={{ textDecoration: 'inherit' }}
//                                 >
//                                     <Button
//                                         variant="outlined"
//                                         size="large"
//                                         color="secondary"
//                                     >
//                                         Sign In
//                                     </Button>
//                                 </RouterLink>
//                             </div>
//                         </>
//                     )}
//                 </Paper>

//                 <Paper elevation={0} className={classes.paper2}>
//                     <Typography variant="body1" color="textPrimary">
//                         Developed by
//                         <span style={{ color: '#e65100' }}>
//                             {' '}
//                             Arnav Saharan{' '}
//                         </span>
//                         <br />
//                         <Divider />
//                         React <br />
//                         Firebase <br />
//                         Material UI <br />
//                     </Typography>

//                     <Divider />
//                     <div style={{ marginTop: '5px' }}>
//                         <a
//                             style={{ textDecoration: 'none' }}
//                             target="_blank"
//                             href="https://github.com/arnavsaharann"
//                             rel="noopener noreferrer"
//                         >
//                             <Chip
//                                 size="small"
//                                 variant="outlined"
//                                 label="GitHub"
//                                 color="primary"
//                                 icon={<GitHubIcon />}
//                             />
//                         </a>
//                     </div>

//                     <div style={{ marginTop: '5px' }}>
//                         <a
//                             style={{ textDecoration: 'none' }}
//                             target="_blank"
//                             href="https://www.linkedin.com/in/arnav-saharan-a53134264/"
//                             rel="noopener noreferrer"
//                         >
//                             <Chip
//                                 size="small"
//                                 variant="outlined"
//                                 label="LinkedIn"
//                                 color="primary"
//                                 icon={<LinkedInIcon />}
//                             />
//                         </a>
//                     </div>
//                 </Paper>
//             </div>
//         </Container>
//     );
// };

// export default About;
import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles';
import { UserContext } from '../context/UserContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = makeStyles((theme) => ({
    paper1: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    main: {
        padding: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'justify',
    },
    paper2: {
        width: '96%',
        boxSizing: 'border-box',
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
        textAlign: 'justify',
        border: '2px solid black',
    },
    buttonGroup: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: theme.spacing(2),
        border: '1px solid black',
        padding: theme.spacing(0.75),
        borderRadius: '4px',
    },
    highlight: {
        fontWeight: 'bold',
    },
}));

const Desc = () => {
    const classes = useStyles();
    return (
        <>
            <Typography
                className={classes.highlight}
                variant="h4"
                color="secondary"
            >
                Dictionary <span style={{ color: '#ac1900' }}>+</span> Notes
            </Typography>
            <Typography color="textPrimary">
                We google dozens of words every week, but how many of them can
                you really remember after a while? Probably just a handful. This
                does not come as a surprise because the human brain needs
                deliberate practice to remember things in the longer run. But the
                task of going to another app to note down these words looks
                tedious.
            </Typography>

            <Typography style={{ marginTop: '5px' }} color="textPrimary">
                This is where <span className={classes.highlight}>WORDS</span>{' '}
                jumps in. An all-in-one solution that lets you search for words
                and save them to your personal list with the touch of a button.
            </Typography>
        </>
    );
};

const About = () => {
    const classes = useStyles();
    const { user } = useContext(UserContext);

    return (
        <Container component="main" maxWidth="sm" className={classes.main}>
            <div className={classes.paper1}>
                <Paper elevation={0} className={classes.paper}>
                    <Desc />
                    {user === null && (
                        <>
                            <Typography style={{ marginTop: '5px' }}>
                                Let's get started!
                            </Typography>
                            <div className={classes.buttonGroup}>
                                <RouterLink
                                    to="/signup"
                                    style={{ textDecoration: 'inherit' }}
                                >
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        color="secondary"
                                    >
                                        Sign Up
                                    </Button>
                                </RouterLink>
                                <RouterLink
                                    to="/signin"
                                    style={{ textDecoration: 'inherit' }}
                                >
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        color="secondary"
                                    >
                                        Sign In
                                    </Button>
                                </RouterLink>
                            </div>
                        </>
                    )}
                </Paper>

                <Paper elevation={0} className={classes.paper2}>
                    <Typography variant="body1" color="textPrimary">
                        Developed by
                        <span style={{ color: '#e65100' }}>
                            {' '}
                            Arnav Saharan{' '}
                        </span>
                    </Typography>
                    <Divider />
                    <Typography variant="body2" color="textPrimary">
                        React <br />
                        Firebase <br />
                        Material UI <br />
                    </Typography>
                    <Divider />
                    <div style={{ marginTop: '5px' }}>
                        <a
                            style={{ textDecoration: 'none' }}
                            target="_blank"
                            href="https://github.com/arnavsaharann"
                            rel="noopener noreferrer"
                        >
                            <Chip
                                size="small"
                                variant="outlined"
                                label="GitHub"
                                color="primary"
                                icon={<GitHubIcon />}
                            />
                        </a>
                    </div>

                    <div style={{ marginTop: '5px' }}>
                        <a
                            style={{ textDecoration: 'none' }}
                            target="_blank"
                            href="https://www.linkedin.com/in/arnav-saharan-a53134264/"
                            rel="noopener noreferrer"
                        >
                            <Chip
                                size="small"
                                variant="outlined"
                                label="LinkedIn"
                                color="primary"
                                icon={<LinkedInIcon />}
                            />
                        </a>
                    </div>
                </Paper>
            </div>
        </Container>
    );
};

export default About;
