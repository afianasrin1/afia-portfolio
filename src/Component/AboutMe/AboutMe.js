import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
      <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-32">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              About me
            </p>
          </div>
          {/* <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            The quick, brown fox
            <br className="hidden md:block" />
            jumps over{" "}
            <span className="inline-block text-deep-purple-accent-400">
              a lazy dog
            </span>
          </h2> */}
          <p className="text-base text-gray-700 md:text-lg">
            I am Afia Nasrin Front-end Developer. I design and code beautiful
            simple thinks , and I love what I do.I understand the importance of
            innovative websites in today's time and that brings my passion to
            building cutting-edge and state-of-the-art websites for my clients.
            I'm a front-end developer in JavaScript/Node JS/MongoDB
            technologies. I've one year of experience in front-end development.
            I can use any JavaScript framework ReactJS, NextJS, ExpressJS, at
            its best. If you need any work related to any JavaScript technology,
            I would be your best choice. Feel free to contact me and discuss
            your requirements.
          </p>
        </div>
      </div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_RkLLHotvDkY0IPxw0lMrRfojbl9pEKDEnTUeIcYU_ZkprqDJoaUT92rrm08KSQlMg1Q&usqp=CAU"
          className="object-cover object-bottom w-full h-96 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutMe;
