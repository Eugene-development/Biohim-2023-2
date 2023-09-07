const productions = [
  {
    name: "Affffff",
    description: "Awswdwddefef",
    characteristics: ["state", "character", "characteristic"],
    resume: "kmrewvmijervmi",
  },
  {
    name: "Affffffйй",
    description: "Awswdwddefef",
    characteristics: ["state", "character", "characteristic"],
    resume: "kmrewvmijervmi",
  },
  {
    name: "Affffffц",
    description: "Awswdwddefef",
    characteristics: ["state", "character", "characteristic"],
    resume: "kmrewvmijervmi",
  },
];

export default () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 border-b border-gray-200 dark:border-gray-700">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Предлагаемая продукция
          </h2>
          <p className="mb-8 font-light lg:text-xl">
            Все партии отпускаемой продукции проходят лабораторные исследования на соответствие заявленному качеству
          </p>
        </div>
        {productions.map((item) => (
          <div
            key={item.name}
            className="py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6"
          >
            <div className="items-center ">
              <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  {item.name}
                </h2>
                <p className="mb-8 font-light lg:text-xl">{item.description}</p>
                <ul
                  role="list"
                  className="pt-8 my-7 space-y-5 border-t border-gray-200 dark:border-gray-700"
                >
                  {item.characteristics.map((character, index) => (
                    <li key={`item_${index}`} className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-primary-800 dark:text-primary-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                        {character}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mb-8 font-light lg:text-xl">{item.resume}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
