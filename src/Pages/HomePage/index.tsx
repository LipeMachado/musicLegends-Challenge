import React from 'react';
import Footer from '../../Components/Footer';
import Main from '../../Components/Main';
import NavBar from '../../Components/NavBar';

const HomePage: React.FC = () => {
    return (
        <>
            <NavBar />
            <Main />
            <Footer />
        </>
    );
}

export default HomePage;