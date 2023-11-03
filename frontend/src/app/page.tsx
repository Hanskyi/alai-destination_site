import React from 'react';
import Reviews from "@/components/Reviews/Reviews";
import Purpose from "@/components/Purposes/Purpose";
import Blogs from "@/components/Blogs/Blogs";
import Footer from "@/components/Footer/Footer";

const Home = () => {
    return (
      <div>
        <Purpose />
        <Blogs />
        <Reviews />
        <Footer />
      </div>
    );
};

export default Home;