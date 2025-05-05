import React from "react";

const QuickService = () => {
  return (
    <div className="w-full h-max flex flex-col md:flex-row justify-center gap-5 py-[40px] px-5">
      <div className="w-full md:w-1/3 p-4 shadow-xl rounded-2xl hover:scale-[1.025] duration-300 ease-in flex justify-center items-center gap-2">
        <div>
            <img src="/emergency-call.png" alt="emergency call" />
        </div>
        <div>
        <h3 className="text-xl">24 Hour Emegency On Call</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, est.</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4 shadow-xl rounded-2xl hover:scale-[1.025] duration-300 ease-in flex justify-center items-center gap-2">
        <div>
            <img src="/emergency-call.png" alt="emergency call" />
        </div>
        <div>
        <h3 className="text-xl">24 Hour Emegency On Call</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, est.</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4 shadow-2xl rounded-2xl hover:scale-[1.025] duration-300 ease-in flex justify-center items-center gap-2">
        <div>
            <img src="/emergency-call.png" alt="emergency call" />
        </div>
        <div>
        <h3 className="text-xl">24 Hour Emegency On Call</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, est.</p>
        </div>
      </div>
    </div>
  );
};

export default QuickService;
