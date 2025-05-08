import React from "react";

const QuickService = () => {
  return (
    <div className="w-full h-max flex flex-col md:flex-row justify-center gap-5 py-[40px] px-5">
      <div className="w-full md:w-1/3 p-4 shadow-xl rounded-2xl hover:scale-[1.025] duration-300 ease-in flex justify-center items-center gap-2">
        <div>
            <img src="/emergency-call.png" alt="emergency call"/>
        </div>
        <div>
        <h3 className="text-xl">24 x 7 Emegency On Call</h3>
        <p>Available anytime for urgent medical needs, just one call away.</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4 shadow-xl rounded-2xl hover:scale-[1.025] duration-300 ease-in flex justify-center items-center gap-2">
        <div>
            <img src="/opd.png" alt="general OPD" />
        </div>
        <div>
        <h3 className="text-xl">General OPD</h3>
        <p>Daily checkups and consultations with a trusted family physician.</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4 shadow-2xl rounded-2xl hover:scale-[1.025] duration-300 ease-in flex justify-center items-center gap-2">
        <div>
            <img src="/ecg.png" alt="ECG" />
        </div>
        <div>
        <h3 className="text-xl">ECG and Minor Surgeries</h3>
        <p>Quick ECGs and basic treatments like suturing and wound care on-site.</p>
        </div>
      </div>
    </div>
  );
};

export default QuickService;
