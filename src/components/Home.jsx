import React from 'react';
import Header from './home/Header';
import SlideHead from './home/SlideHead';
import ChooseUs from './home/ChooseUs';
import LiveAction from './home/LiveAction';
import Collection from './home/Collection';
import Creator from './home/Creator';
import Footer from './home/Footer';
import RoadMap from './home/RoadMap';
const Home = () => {
    return (<>
        <Header />
        <SlideHead/>
        <ChooseUs/>
        <LiveAction/>
        <RoadMap/>
        <Collection/>
        <Creator/>
        <Footer/>


    </>);
}

export default Home;