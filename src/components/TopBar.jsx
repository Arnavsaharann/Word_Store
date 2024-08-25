import React, { useContext, useState } from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import InfoIcon from '@mui/icons-material/Info';
import ListIcon from '@mui/icons-material/List';
import { Link as RouterLink } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';
import { UserContext } from '../context/UserContext';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary.main,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const TopBar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const { user, setUser } = useContext(UserContext);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = async () => {
        try {
            await auth.signOut();
            setUser(null);
            handleClose();  // Close the menu after logout
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        WORDS
                    </Typography>
                    {user ? (
                        <>
                            <Typography aria-label="Logged in user">
                                {user.email.split('@')[0]}
                            </Typography>
                            <div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem component={RouterLink} to="/" onClick={handleClose}>
                                        <InfoIcon style={{ marginRight: '3px' }} />
                                        About
                                    </MenuItem>
                                    <MenuItem component={RouterLink} to="/wordlist" onClick={handleClose}>
                                        <ListIcon style={{ marginRight: '3px' }} />
                                        Word List
                                    </MenuItem>
                                    <MenuItem onClick={logout}>
                                        <ExitToAppIcon style={{ marginRight: '3px' }} />
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </div>
                        </>
                    ) : (
                        <Typography
                            component={RouterLink}
                            to="/signin"
                            style={{ color: 'inherit', textDecoration: 'inherit' }}
                        >
                            Sign In
                        </Typography>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default TopBar;
