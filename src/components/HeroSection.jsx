import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import farmImage1 from "../assets/farmImage1.jpg";
import farmImage2 from "../assets/farmImage2.jpg";

const Herosection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">Nammalvar Eyarkaiyagam 
            <span className="bg-gradient-to-r from-green-600 to-green-700 text-transparent bg-clip-text">{" "} Greetings!</span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-x-4xl">
            Your trusted source for completely organic, traditional farm products in Coimbatore. We offer a wide range of cold-pressed oils, ancient rice varieties, natural spices, pulses, herbal health items, and more, all cultivated following the profound principles of natural farming advocate Thiru. Nammalvar.
        </p>
        <div className="flex justify-center my-10">
            <a href="#products" className="bg-gradient-to-r from-green-600 to-green-700 py-3 px-4 mx-3 rounded-md">Explore Our Products</a>
            <a href="#footer" className="py-3 px-4 mx-3 rounded border">Contact Us to Order</a>
        </div>
        <div className="flex mt-10 justify-center">
            <img src={farmImage1} alt="Fresh organic produce" className="rounded-lg w-1/2 border border-green-700 shadow-sm shadow-green-400 mx-2 my-4" />
            {/* <video autoPlay loop muted className="rounded-lg w-1/2 border-green-700 shadow-green-400 mx-2 my-4">
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <img src={farmImage2} alt="Fresh organic produce" className="rounded-lg w-1/2 border border-green-700 shadow-sm shadow-green-400 mx-2 my-4" />
            {/* <video autoPlay loop muted className="rounded-lg w-1/2 border-green-700 shadow-green-400 mx-2 my-4">
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
        </div>
        <div className="mt-10 p-6 bg-blue-600 text-white rounded-lg shadow-lg text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">Special Announcement!</h3>
            <p className="text-md">
                To order Nattu (traditional) varieties, call the numbers provided:
                +91 XXXXX XXXXX / +91 XXXXX XXXXX.
                Orders worth 2 thousand or more will receive a special discount!
            </p>
        </div>
    </div>
  );
};

export default Herosection