import React from "react";
import Container from "./container";

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready for blazing fast cross border payments?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Subscribe to know when we launch.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
           data-formkit-toggle="d170eeec72"
           href="https://expert-composer-6803.ck.page/d170eeec72"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 ">
            Subscribe for launch
          </a>
        </div>
      </div>
    </Container>
  );
}
