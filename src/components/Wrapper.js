import React from 'react';
import FullScreenBackground from './FullScreenBackground';
import NavBar from './NavBar';
import Footer from './Footer';

const Wrapper = ({ children }) => {
    return (
        <div>
            <FullScreenBackground />
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

export default Wrapper;
