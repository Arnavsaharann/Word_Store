import React, { useState, useContext, useEffect } from 'react';
import Axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// React Router
import { Navigate } from 'react-router-dom';

// Context
import { UserContext } from '../context/UserContext';

// Firebase DB
import { db } from '../firebase/firebaseConfig';
import { collection, query, where, orderBy, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(0, 0, 2),
    },
    searchResult: {
        width: '100%',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    list: {
        width: '100%',
        backgroundColor: '#ddd',
        borderRadius: '4px',
        marginBottom: '25px',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '450px',
        overflow: 'auto',
    },
    listItem: {
        display: 'flex',
        flexDirection: 'column',
    },
    loadingAnimation: {
        marginTop: theme.spacing(16),
    },
    SearchLoadingAnimation: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));

const WordList = () => {
    const classes = useStyles();

    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingSearch, setLoadingSearch] = useState(false);

    const { user } = useContext(UserContext);

    useEffect(() => {
        console.log('useEffect start');
        setLoading(true);

        if (!user) {
            setLoading(false);
            return;
        }

        const fetchWords = async () => {
            try {
                const wordsQuery = query(
                    collection(db, 'words'),
                    where('userUid', '==', user.uid),
                    orderBy('created')
                );
                const querySnapshot = await getDocs(wordsQuery);
                const fetchedResult = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    word: doc.data().word.word,
                    meaning: doc.data().word.meaning,
                }));
                setList(fetchedResult.reverse());
            } catch (err) {
                console.error('Error loading the word list', err);
            } finally {
                setLoading(false);
            }
        };

        fetchWords();

        console.log('useEffect end');
    }, [user]);

    if (!user) {
        return <Navigate to="/" />;
    }

    const addToDB = async (word) => {
        try {
            const userUid = user.uid;
            const docRef = await addDoc(collection(db, 'words'), { userUid, word, created: Date.now() });
            setList(prevList => [{ id: docRef.id, word: word.word, meaning: word.meaning }, ...prevList]);
            console.log('Document written with id:', docRef.id);
        } catch (err) {
            console.error('Error adding word to the DB', err);
        }
    };

    const removeFromDb = async (id) => {
        try {
            const wordDoc = doc(db, 'words', id);
            await deleteDoc(wordDoc);
            setList(prevList => prevList.filter((item) => item.id !== id));
            console.log('Deleted doc:', id);
        } catch (error) {
            console.error('Error deleting document:', error);
        }
    };

    const searchWord = async (e) => {
        e.preventDefault();
        setLoadingSearch(true);
        try {
            const res = await Axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
            );
            const word = {
                word: res.data[0].word,
                partOfSpeech: res.data[0].meanings[0].partOfSpeech,
                meaning: res.data[0].meanings[0].definitions[0].definition,
                example: res.data[0].meanings[0].definitions[0].example || 'Example not available',
            };
            setSearchResult(word);
        } catch (error) {
            toast.error('No words found, try rechecking the spelling.', {
                hideProgressBar: true,
                autoClose: 4000,
            });
        } finally {
            setLoadingSearch(false);
            setSearch('');
        }
    };

    const addToList = (word) => {
        if (list.some(item => item.word === word.word)) {
            toast.error('Word already present in the list', {
                hideProgressBar: true,
                autoClose: 4000,
            });
        } else {
            addToDB(word);
            setSearchResult(null);
        }
    };

    const removeFromList = (id) => {
        removeFromDb(id);
    };

    return (
        <Container component="main" maxWidth="xs">
            <ToastContainer />
            <div className={classes.paper}>
                <Typography
                    component="h4"
                    variant="h6"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                    }}
                >
                    <ListAltIcon color="primary" />
                    My List
                </Typography>
                <form className={classes.form} onSubmit={searchWord}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="word"
                                label="Search word"
                                autoComplete="off"
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                <Typography color="textSecondary">
                                    Search
                                </Typography>
                                <SearchIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </form>

                {loadingSearch && (
                    <CircularProgress
                        color="secondary"
                        className={classes.SearchLoadingAnimation}
                    />
                )}

                {searchResult && (
                    <Paper className={classes.searchResult} elevation={5}>
                        <Typography
                            variant="h6"
                            style={{
                                marginLeft: '5px',
                            }}
                        >
                            {searchResult.word}
                            <Chip
                                onClick={() => addToList(searchResult)}
                                label="Add Word"
                                color="secondary"
                                icon={<AddCircleIcon />}
                                style={{
                                    float: 'right',
                                    margin: '7px',
                                }}
                            />
                        </Typography>
                        <Typography
                            style={{
                                marginLeft: '8px',
                                fontSize: '12px',
                            }}
                        >
                            {searchResult.partOfSpeech}
                        </Typography>
                        <Typography
                            style={{
                                margin: '8px',
                                fontSize: '16px',
                            }}
                        >
                            {searchResult.meaning}
                        </Typography>
                        <Typography
                            style={{
                                margin: '8px',
                                fontSize: '16px',
                                marginTop: '3px',
                                color: '#666',
                            }}
                        >
                            {searchResult.example}
                        </Typography>
                    </Paper>
                )}

                {loading && (
                    <CircularProgress
                        color="secondary"
                        className={classes.loadingAnimation}
                    />
                )}

                {list.length !== 0 && (
                    <List className={classes.list}>
                        {list.map((item) => (
                            <React.Fragment key={item.id}>
                                <ListItem>
                                    <ListItemText
                                        primary={item.word}
                                        secondary={`${item.meaning}`}
                                    />
                                    <ListItemSecondaryAction>
                                        <DeleteForeverIcon
                                            edge="end"
                                            color="secondary"
                                            onClick={() =>
                                                removeFromList(item.id)
                                            }
                                        />
                                    </ListItemSecondaryAction>
                                </ListItem>
                                <Divider />
                            </React.Fragment>
                        ))}
                    </List>
                )}
            </div>
        </Container>
    );
};

export default WordList;
