import React from 'react';
import Reviews from "@/components/Reviews/Reviews";
import Purpose from "@/components/Purposes/Purpose";
import Blogs from "@/components/Blogs/Blogs";

const Home = () => {
    return (
      <div>
        <Purpose />
        <Blogs />
        <Reviews />
      </div>
    );
};

export default Home;