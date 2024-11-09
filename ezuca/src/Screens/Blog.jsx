import React from 'react';
import Header from '../Components/Header';
import { MdLocationPin } from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';
import Footer from '../Components/Footer';

const Blog = () => {
  return (
    <div className="p-4 md:p-8">
      {/* <Header /> */}

      {/* Title Section */}
      <div className="flex items-center justify-start ml-6 md:ml-24 mb-10">
        <h1 className="text-black text-3xl md:text-5xl font-bold">Latest News & Events</h1>
      </div>

      {/* Blog Content Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-6 lg:gap-10 flex-wrap mb-12">
        {/* Main Event Card */}
        <div className="flex flex-col items-start w-full lg:w-[500px] gap-4">
          <img src="https://themewagon.github.io/ezuca/images/event-1.jpg" alt="Event 1" className="w-full rounded-md" />
          <h1 className="text-2xl md:text-3xl text-gray-700">The Complete Financial Analyst Training & Investing Course</h1>
          <div className="flex justify-between w-full gap-4 text-gray-500">
            <div className="flex items-center gap-2">
              <MdLocationPin color="#19c880" />
              <h4>40 Baria Street 133/2, New York City, US</h4>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt color="#19c880" />
              <h4>10 Dec - 12 Dec</h4>
            </div>
          </div>
        </div>

        {/* Sidebar Event Cards */}
        <div className="flex flex-col gap-6 w-full lg:w-auto">
          {/* Small Event Card 1 */}
          <div className="flex gap-4 items-start">
            <img src="https://themewagon.github.io/ezuca/images/event-2.jpg" alt="Event 2" className="w-32 h-32 rounded-md" />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gray-500">
                <FaCalendarAlt color="#19c880" />
                <h4>22 Mar 2018</h4>
              </div>
              <h1 className="text-lg text-black">Personalize Online Learning Experience</h1>
              <span className="text-sm text-[#19c880]">Ms. Lara Croft / 02 Comments</span>
              <span className="text-gray-500 text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</span>
            </div>
          </div>
          {/* Small Event Card 2 */}
          <div className="flex gap-4 items-start">
            <img src="https://themewagon.github.io/ezuca/images/event-3.jpg" alt="Event 3" className="w-32 h-32 rounded-md" />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gray-500">
                <FaCalendarAlt color="#19c880" />
                <h4>22 Mar 2018</h4>
              </div>
              <h1 className="text-lg text-black">Which investment project should my company choose?</h1>
              <span className="text-sm text-[#19c880]">Ms. Lara Croft / 02 Comments</span>
              <span className="text-gray-500 text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="flex flex-wrap gap-2 justify-center mt-12">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <img src="https://themewagon.github.io/ezuca/images/a.jpg" alt="Image A" className="w-[80px] h-[80px] md:w-[171px] md:h-[171px] object-cover rounded-md" />
            <img src="https://themewagon.github.io/ezuca/images/b.jpg" alt="Image B" className="w-[80px] h-[80px] md:w-[171px] md:h-[171px] object-cover rounded-md" />
          </div>
          <img src="https://themewagon.github.io/ezuca/images/h.jpg" alt="Image H" className="w-full md:w-[346px] md:h-[173.61px] object-cover rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <img src="https://themewagon.github.io/ezuca/images/c.jpg" alt="Image C" className="w-full md:w-[352px] md:h-[352px] object-cover rounded-md" />
          <img src="https://themewagon.github.io/ezuca/images/m.jpg" alt="Image M" className="w-full md:w-[352px] md:h-[173.61px] object-cover rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <img src="https://themewagon.github.io/ezuca/images/d.jpg" alt="Image D" className="w-[80px] h-[80px] md:w-[171px] md:h-[171px] object-cover rounded-md" />
            <img src="https://themewagon.github.io/ezuca/images/e.jpg" alt="Image E" className="w-[80px] h-[80px] md:w-[171px] md:h-[171px] object-cover rounded-md" />
            <img src="https://themewagon.github.io/ezuca/images/g.jpg" alt="Image G" className="w-[80px] h-[80px] md:w-[291px] md:h-[171px] object-cover rounded-md" />
          </div>
          <div className="flex gap-2">
            <img src="https://themewagon.github.io/ezuca/images/i.jpg" alt="Image I" className="w-[80px] h-[80px] md:w-[171px] md:h-[171px] object-cover rounded-md" />
            <img src="https://themewagon.github.io/ezuca/images/l.jpg" alt="Image L" className="w-[80px] h-[80px] md:w-[171px] md:h-[171px] object-cover rounded-md" />
            <img src="https://themewagon.github.io/ezuca/images/k.jpg" alt="Image K" className="w-[80px] h-[80px] md:w-[171px] md:h-[171px] object-cover rounded-md" />
          </div>
        </div>
      </div>

      {/* Centered Image */}
      <div className="flex justify-center mt-8">
        <img src="https://themewagon.github.io/ezuca/images/n.jpg" alt="Image N" className="w-[300px] md:w-[400px] rounded-md" />
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
