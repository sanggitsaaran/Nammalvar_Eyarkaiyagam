import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/TNfarmimg.jpg";
import { checklistItems } from "../constants";
const Workflow = () => {
  return (
    <div id="philosophy" className="mt-20 px-4 py-10">
        <h2 className="text-2xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">Our Commitment to
            <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">{" "}Purity & Tradition</span>
        </h2>
        <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-8 mt-10 lg:mt-16">
            <div className="w-full lg:w-1/2">
                <img src={codeImg} alt="farmimg" className="w-full h-auto rounded-lg" />
            </div>
            <div className="w-full lg:w-1/2 lg:pt-12">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex mb-8 sm:mb-12 gap-4">
                        <div className="text-green-400 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full flex-shrink-0">
                            <CheckCircle2 size={20} />
                        </div>
                        <div className="min-w-0">
                            <h5 className="mt-1 mb-2 text-lg sm:text-xl leading-tight">{item.title}</h5>
                            <p className="text-sm sm:text-base text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Workflow