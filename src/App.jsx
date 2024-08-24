// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from '@mui/material/styles';

// import theme from './materialUi/theme';
// import TopBar from './components/TopBar';
// import About from './pages/About';
// import WordList from './pages/WordList';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

// import UserProvider from './context/UserContext';

// const App = () => {
//     return (
//         <UserProvider>
//             <Router>
//                 <ThemeProvider theme={theme}>
//                     <TopBar />
//                     <Routes>
//                         <Route path="/" element={<About />} />
//                         <Route path="/wordlist" element={<WordList />} />
//                         <Route path="/signin" element={<SignIn />} />
//                         <Route path="/signup" element={<SignUp />} />
//                     </Routes>
//                 </ThemeProvider>
//             </Router>
//         </UserProvider>
//     );
// };

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import theme from './materialUi/theme';
import TopBar from './components/TopBar';
import About from './pages/About';
import WordList from './pages/WordList';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import UserProvider from './context/UserContext';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <ThemeProvider theme={theme}>
                    <TopBar />
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/wordlist" element={<WordList />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
                </ThemeProvider>
            </Router>
        </UserProvider>
    );
};

export default App;
