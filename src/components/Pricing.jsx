import { CheckCircle2 } from "lucide-react"
import { orderingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking--wider">Get Your Farm Fresh Goodness</h2>
      <div className="flex flex-wrap">
        {orderingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-3xl mb-8">{option.title}</p>
              {option.price && <p className="text-xl mb-6 text-neutral-400">{option.price}</p>}
              <ul className="space-y-3">
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-4 flex items-center">
                    <CheckCircle2 className="text-green-500" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={option.actionLink || "#"} className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-green-900 border border-green-900 rounded-lg transition duration-200">{option.actionText || "Learn More"}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing