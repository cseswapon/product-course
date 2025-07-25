import React from 'react';

const CourceSell:React.FC = () => {
    return (
      <>
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between md:flex-col md:items-start">
            <div className="md:mb-3">
              <div className="inline-block text-2xl text-black font-semibold">
                ৳3850
              </div>
              <span className="inline-flex items-center ml-2">
                <del className="text-black font-normal md:text-xl">৳5000</del>
                <div className="c-Tukmu inline-block ml-2">
                  <p className="card-price text-green-600 font-medium">
                    ১১৫০ ৳ ছাড়
                  </p>
                </div>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-2"></div>

          <button className="bg-green-600 text-white py-2 px-4 rounded-md text-center md:w-full">
            কোর্সটি কিনুন
          </button>
        </div>
      </>
    );
};

export default CourceSell;