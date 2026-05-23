import {testimonials} from "../constants";
const Testimonials = () => {
  return (
    <div id="testimonials" className="mt-20 tracking-wide px-4">
        <h2 className="text-2xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">What people are saying</h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 max-w-xs">
                    <div className="bg-neutral-800 rounded-md p-6 text-sm sm:text-base border border-neutral-800 font-thin h-full flex flex-col">
                        <p className="flex-grow mb-4">{testimonial.text}</p>
                        <div className="flex mt-6 sm:mt-8 items-start gap-4">
                            <img className="w-12 h-12 rounded-full border border-neutral-300 flex-shrink-0" 
                            src={testimonial.image} 
                            alt={testimonial.user} 
                            />
                            <div className="min-w-0">
                                <h6 className="text-sm sm:text-base font-medium">{testimonial.user}</h6>
                                <span className="text-xs sm:text-sm font-normal italic text-neutral-600 block truncate">{testimonial.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}    
        </div> 
    </div>
  );
};

export default Testimonials