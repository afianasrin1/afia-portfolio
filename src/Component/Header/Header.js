import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Front-end Developer
              </p>
            </div>
            {/* <h2 className="max-w-lg mb-6 font-sans text-xs font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              I design and code
              <br className="hidden md:block" />
              beautiful simple thinks , and
              <span className="inline-block text-deep-purple-accent-400">
                I love what I do
              </span>
            </h2> */}
            {/* <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p> */}
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link
              href="https://drive.google.com/file/d/1Al__x4xR0HDIAOgZPYCnp23gmXpJoDN1/view?usp=share_link"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-Black transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Resume Download
            </Link>
            {/* <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a> */}
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201111215809/How-to-Become-a-Front-End-Developer-in-2020.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
