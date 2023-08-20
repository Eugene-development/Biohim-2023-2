import Link from "next/link";
export default () => {
  return (
    <footer className="bg-indigo-950">
      <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
        <div className="gap-8 space-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:space-y-0">
          <address className="not-italic">
            <p className="mb-6 text-sm font-semibold text-gray-50 uppercase dark:text-white">
              Контакты
            </p>
            <p className="mb-3 text-gray-50 dark:text-gray-400">
              г. Москва,
              <br /> 3-й Угрешский проезд, дом 8
            </p>
            <ul className="space-y-3 text-gray-50 dark:text-gray-400">
              <li className="flex items-center">
                <svg
                  className="mr-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Телефон: +7 (930) 276-56-50
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                Почта:{" "}
                <a href="biohim.org@yandex.ru" className="ml-2 hover:underline">
                  biohim.org@yandex.ru
                </a>
              </li>
            </ul>
          </address>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col justify-between items-center lg:flex-row">
          <Link
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-50 lg:mb-0 dark:text-white"
          >
            <img
              className="h-8 mr-3 w-auto"
              src="https://storage.yandexcloud.net/brand-logo/biohim/logo/logo.svg"
              alt="логотип"
            />
            Биохим
          </Link>
          <span className="block mb-4 text-sm text-gray-50 dark:text-gray-400 lg:mb-0">
            © 2021-2023{" "}
            <Link href="/" className="hover:underline">
              Биохим™
            </Link>
            . Все права защищены.
          </span>
        </div>
      </div>
    </footer>
  );
};
