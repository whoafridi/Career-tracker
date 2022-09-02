import React from 'react';
import AboutMe from '../../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer'
import News from '../News/News';
import Partner from '../Partner/Partner';
import Review from '../Review/Review';
import ServicePreview from '../ServicePreview/ServicePreview';
import Subscribe from '../Subscribe/Subscribe';
import SuccessStory from '../SuccessStory/SuccessStory';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <SuccessStory></SuccessStory>
            <ServicePreview></ServicePreview>
            <AboutMe/>
            <Review/>
            <Partner/>
            <News/>
            <Subscribe/>
            <Footer></Footer>
        </>
    );
};

export default Home;