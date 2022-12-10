import React from "react";

const Projects = () => {
  return (
    <section className="flex flex-col gap-20 md:flex-row mx-auto w-7/12">
      <div className=" text-3xl font-semibold  text-teal-900 uppercase rounded-full bg-teal-accent-400">
        <h2> My Projects</h2>
      </div>
      <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src="https://singerbd.com/pub/media/catalog/product/cache/482df9e5219860e2561c4ec99993e0ed/s/p/spp5.5.jpg"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              Pressure Cooker
            </h2>
            {/* <p className="dark:text-gray-100">
            Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
          </p> */}
          </div>
          <button
            type="button"
            className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-700"
          >
            CrockeriesGallery
          </button>
        </div>
      </div>
      {/* card 2 */}
      <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src="https://i.pinimg.com/originals/64/10/2a/64102a9e29011695c3d6d5d4376a16e1.jpg"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              Dolon Chapa
            </h2>
            {/* <p className="dark:text-gray-100">
          Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
        </p> */}
          </div>
          <button
            type="button"
            className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-700"
          >
            Get Pretty Shop
          </button>
        </div>
      </div>
      {/* card-3 */}
      <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              Dolon Chapa
            </h2>
            {/* <p className="dark:text-gray-100">
          Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
        </p> */}
          </div>
          <button
            type="button"
            className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-700"
          >
            Learning Web Development
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
