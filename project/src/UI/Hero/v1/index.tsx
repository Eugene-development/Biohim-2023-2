export default () => {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden">
        <img
          src="https://mos-522755.oml.ru/d/himiya.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className=" max-w-4xl pl-12 py-32 sm:py-48 lg:py-56 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-left">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              <span>Хотите узнать больше о нашей продукции? </span>
              <a href="#" className="font-semibold text-lime-500">
                <span className=" inset-0 ml-2 " aria-hidden="true" />
                Подробнее{" "}
                <span aria-hidden="true" className="ml-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 text-left bg-gray-950/20">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">
              Компания &#171;БИОХИМ&#187;
            </h1>
            <p className="max-w-2xl mt-6 text-lg leading-8 text-gray-300">
              Техническая и медицинская перекись водорода в канистрах 10л, 30л и
              в кубовых ёмкостях по оптовым ценам от заводов производителей с
              доставкой или самовывозом.
            </p>
            <div className="mt-10 flex items-center justify-left gap-x-6">
              <a
                href="#"
                className="rounded-md bg-lime-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-400"
              >
                Запросить цену
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
