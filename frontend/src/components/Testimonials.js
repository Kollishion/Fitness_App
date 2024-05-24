import React, { useState } from "react";

const REVIEWS = [
  // Your reviews data here...
];

const Testimonials = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleSlide = (direction) => {
    if (direction === "prev") {
      setCurrentIdx(
        (prevIdx) => (prevIdx - 1 + REVIEWS.length) % REVIEWS.length
      );
    } else {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % REVIEWS.length);
    }
  };

  return (
    <div className="bg-gradient-to-tr from-slate-200 to-slate-50 text-slate-800 flex flex-col justify-center items-center min-h-screen relative px-4">
      <main className="bg-white my-4 w-full max-w-2xl rounded-3xl text-center p-8 sm:p-16">
        <h1 className="text-xl font-bold">A word from our customers</h1>
        <p className="text-sm">
          We've been helping businesses do their best since 2018
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6">
          <button
            onClick={() => handleSlide("prev")}
            className="material-symbols-outlined w-10 h-10 rounded-full text-gray-600 text-2xl transition-all duration-500"
          >
            navigate_before
          </button>

          {REVIEWS.map((review, idx) => (
            <div
              key={review.id}
              className={`card ${idx === currentIdx ? "" : "opacity-0"}`}
            >
              <blockquote className="bg-black text-white rounded-md p-6 text-sm transition-all duration-500">
                "{review.review}"
              </blockquote>
              <div className="details text-sm translate-y-[150px] transition-all duration-500 flex flex-col items-center gap-2 mt-6">
                <img
                  src={review.avatar}
                  alt=""
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div>
                  <p className="text-sm font-bold">{review.name}</p>
                  <p className="text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={() => handleSlide("next")}
            className="material-symbols-outlined w-10 h-10 rounded-full text-gray-600 text-2xl transition-all duration-500"
          >
            navigate_next
          </button>
        </div>
      </main>
    </div>
  );
};

export default Testimonials;
