import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="px-24 h-screen flex justify-center items-center">
      <div>
        <h1 className="text-5xl font-bold tracking-wider text-primary">
          Healthcare
        </h1>
        <div className="flex w-full pt-20">
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-10 leading-10">
              Transforming Care Practices. Delivering Positive Health Outcomes.
            </h1>
            <p className="text-xl tracking-wide leading-8 mb-10 pr-20 text-slate-700">
              TatvaCare empowers healthcare professionals and individuals with
              chronic conditions by establishing a true health continuum.
            </p>
            <Link
              to={"/sign-up"}
              className="bg-primary rounded-lg px-5 py-2 font-semibold text-white"
            >
              GET STARTED
            </Link>
          </div>
          <div className="w-full flex justify-end">
            <img
              src="/assets/doctor.jpg"
              alt="image"
              className="h-80 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
