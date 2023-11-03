import React from 'react';
import Reviews from "@/components/Reviews/Reviews";
import Purpose from "@/components/Purposes/Purpose";
import Blogs from "@/components/Blogs/Blogs";
import HeroSection from "@/components/HeroSection/HeroSection";

const Home = () => {
    return (
      <div>
        <HeroSection />
        <Purpose />
        <Blogs />
        <Reviews />
      </div>
    );
};

export default Home;