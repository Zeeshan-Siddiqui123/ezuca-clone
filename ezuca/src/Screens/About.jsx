import React from 'react';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div className="p-4 md:p-8">
      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center justify-around gap-8 flex-wrap">
        {/* Text Content */}
        <div className="flex flex-col items-start gap-4 max-w-lg">
          <h1 className="text-black text-2xl md:text-3xl font-bold">
            About Ezuca
          </h1>
          <p className="text-[#757686] text-base md:text-lg leading-relaxed">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
          </p>
          
          {/* Statistics Section */}
          <div className="flex flex-col md:flex-row gap-6 mt-4">
            <div className="text-[#19c880] text-center md:text-left">
              <span className="text-5xl md:text-6xl font-bold">50</span>
              <span className="text-2xl md:text-3xl">M+</span><br />
              <span className="text-[#757686] text-sm md:text-base">STUDENTS LEARNING</span>
            </div>
            <div className="text-[#19c880] text-center md:text-left">
              <span className="text-5xl md:text-6xl font-bold">30</span>
              <span className="text-2xl md:text-3xl">K+</span><br />
              <span className="text-[#757686] text-sm md:text-base">ACTIVE COURSES</span>
            </div>
            <div className="text-[#19c880] text-center md:text-left">
              <span className="text-5xl md:text-6xl font-bold">340</span>
              <span className="text-2xl md:text-3xl">M+</span><br />
              <span className="text-[#757686] text-sm md:text-base">INSTRUCTORS ONLINE</span>
            </div>
            <div className="text-[#19c880] text-center md:text-left">
              <span className="text-5xl md:text-6xl font-bold">30</span>
              <span className="text-2xl md:text-3xl">+</span><br />
              <span className="text-[#757686] text-sm md:text-base">COUNTRIES REACHED</span>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative mt-8 md:mt-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border rounded-full bg-[#19c880] w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
            <img src="https://themewagon.github.io/ezuca/images/video-icon.png" alt="Video Icon" className="w-6 md:w-8" />
          </div>
          <img src="https://themewagon.github.io/ezuca/images/video-screenshot.png" alt="Video Screenshot" className="w-full max-w-md rounded-lg" />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
