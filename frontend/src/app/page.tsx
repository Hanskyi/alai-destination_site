import React from 'react';
import Reviews from "@/components/Reviews/Reviews";
import Purpose from "@/components/Purposes/Purpose";
import Blogs from "@/components/Blogs/Blogs";
import HeroSection from "@/components/HeroSection/HeroSection";
import Footer from "@/components/Footer/Footer";


const Home = () => {
    return (
      <div>
        <HeroSection />
        <Purpose />
        <Blogs />
        <Reviews />
        <Footer />
      </div>
    );
};

export default Home;