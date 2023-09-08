import React from "react";

export default function index() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-full lg:py-16 lg:px-20">
        <div className=" mb-8 lg:mb-16">
          <h2 className="mb-4 text-center text-3xl md:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Наши направления
          </h2>
          <p className="font-light text-center text-gray-500 text-sm sm:text-xl dark:text-gray-400">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 xl:grid-cols-3">
          <div>
            <img
              className="z-30 -mb-16 rounded-2xl h-96"
              src="https://mos-522755.oml.ru/thumb/2/iisuo84kHfT_O1QvSSNxvg/1920r1080/d/55291969_2.jpg"
              alt="продукция"
            />
            <div className="relative z-40 mx-8 p-8 bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <span className="bg-lime-100 text-lime-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
                Продукция
              </span>
              <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Медицинская перекись водорода
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
              </p>
            </div>
          </div>
          <div>
            <img
              className="z-30 -mb-16 rounded-2xl h-96"
              src="https://mos-522755.oml.ru/thumb/2/AOtZA8mzrzOBWtHs6A-7iA/1920r1080/d/55291970_2.jpg"
              alt="продукция"
            />
            <div className="relative z-40 mx-8 p-8 bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <span className="bg-lime-100 text-lime-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
                Продукция
              </span>
              <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Техническая перекись водорода
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
              </p>
            </div>
          </div>
          <div>
            <img
              className="z-30 -mb-16 rounded-2xl h-96"
              src="https://mos-522755.oml.ru/thumb/2/mtxGxsC-SeFbGG7y5ILjCQ/1920r1080/d/55291974_2.jpg"
              alt="продукция"
            />
            <div className="relative z-40 mx-8 p-8 bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <span className="bg-lime-100 text-lime-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
                Продукция
              </span>
              <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Асептическая перекись водорода
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
