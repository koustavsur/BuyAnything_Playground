import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export const Home = () => {
  return (
        <div>
            <Navbar/>
            <Announcement/>
            <Slider/>
            <Categories/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};
