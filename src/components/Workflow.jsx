import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/TNfarmimg.jpg";
import { checklistItems } from "../constants";
const Workflow = () => {
  return (
    <div id="philosophy" className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">Our Commitment to
            <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">{" "} Purity & Tradition</span>
        </h2>
        <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full lg:w-1/2">
                <img src={codeImg} alt="farmimg" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex mb-12">
                        <div className="text-green-400 mx-6 bg-neutral-900 h-10 x-10 p-2 justify-center items-center rounded-ful">
                            <CheckCircle2 />
                        </div>
                        <div>
                            <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                            <p className="text-md text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Workflow