import React from "react";

const About = () => {
  return (
    <div className="flex flex-wrap items-center mt-32">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <h3 className="text-3xl mb-2 font-semibold leading-normal text-gray-400">
          Face Recognition
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-200 ">
          Develop a browser-based application or a native mobile application to
          demonstrate application of Face Recognition technology.
        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-200 ">
          You could choose to demonstrate application of Face Recognition in any
          area of application of your choice,<br></br> for example: Preventing crime,
          Device security, Smarter advertising, Finding mission people or lost
          pets, Diagnose diseases, Tracking attendance, Facilitate secure
          transactions.
        </p>
      </div>
      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-lg rounded-lg bg-pink-600">
          <img
            alt="..."
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
            className="w-full align-middle rounded-t-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
