import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

const cards = [
  {
    name: "Адрес",
    description: "г. Москва, 3-й Угрешский проезд, дом 8",
    icon: PhoneIcon,
  },
  {
    name: "Контакты",
    description: "Телефон: +7 (930) 276-56-50, </br> Почта: ",
    icon: LifebuoyIcon,
  },
  {
    name: "Реквизиты",
    description:
      "Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.",
    icon: NewspaperIcon,
  },
];

export default () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-50 py-20 sm:py-32">
      {/* <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 border-b border-gray-200 dark:border-gray-700">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Контактные данные
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Связаться с нами вы можете любым удобным для вас способом по электронной почте, по телефону или личным визитом.
            </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 ">
          <div className="flex gap-x-4 rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
            <LifebuoyIcon
              className="h-7 w-5 flex-none text-gray-900"
              aria-hidden="true"
            />
            <div className="text-base leading-7">
              <h3 className="font-semibold text-gray-900">Адрес:</h3>
              <p className="mt-1 text-gray-700">
                г. Москва, 3-й Угрешский проезд, дом 8
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
            <LifebuoyIcon
              className="h-7 w-5 flex-none text-gray-900"
              aria-hidden="true"
            />
            <div className="text-base leading-7">
              <h3 className="font-semibold text-gray-900">Телефон:</h3>
              <p className="mt-1 text-gray-700">+7 (930) 276-56-50</p>
              
            </div>
          </div>
          <div className="flex gap-x-4 rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
            <LifebuoyIcon
              className="h-7 w-5 flex-none text-gray-900"
              aria-hidden="true"
            />
            <div className="text-base leading-7">
              <h3 className="font-semibold text-gray-900">Почта:</h3>
              <p className="mt-1 text-gray-700">biohim.org@yandex.ru</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center">
            <h3 className="flex-shrink-0 pr-4 text-lg font-semibold text-gray-900">
              Реквизиты:
            </h3>
            <div className="flex-1" />
          </div>
          <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="ml-3 text-base text-gray-700">
                ИП Попугаев Илья Игоревич
              </p>
            </li>

            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="ml-3 text-base text-gray-700">ИНН 861903101837</p>
            </li>

            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="ml-3 text-base text-gray-700">
                ОГРНИП 323861700054415
              </p>
            </li>

            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="ml-3 text-base text-gray-700">ОКВЭД: 46.75</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
