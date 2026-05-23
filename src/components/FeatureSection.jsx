import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div id="products" className="relative mt-20 border-b border-neutral-800 min-h-fit px-4 py-10">
        <div className="text-center">
            <h2 className="text-2xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                Why Choose Nammalvar Eyarkaiyagam
            </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20 gap-4 sm:gap-6 justify-center">
            {features.map((feature, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 max-w-xs">
                    <div className="flex flex-col h-full">
                        <div className="flex gap-4">
                            <div className="flex h-10 w-10 bg-neutral-900 text-green-700 justify-center items-center rounded-full flex-shrink-0">
                                {feature.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h5 className="mb-4 sm:mb-6 text-lg sm:text-xl leading-tight">{feature.text}</h5>
                                <p className="text-sm sm:text-base text-neutral-500">{feature.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default FeatureSection