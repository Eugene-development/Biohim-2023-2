import Link from "next/link";

const stats = [
  { id: 1, name: "Creators on the platform", value: "8,000+" },
  { id: 2, name: "Flat platform fee", value: "3%" },
  { id: 3, name: "Uptime guarantee", value: "99.9%" },
];
export default () => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-full lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-16">
        <div className="z-50 px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-24 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-indigo-950 sm:mt-10 sm:text-6xl">
              Компания &#171;БИОХИМ&#187;
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/about"
                className="rounded-full bg-lime-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Читать подробнее
              </Link>
            </div>
          </div>

          <dl className="mt-16 -mr-32 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className=" flex flex-col bg-indigo-950 p-8">
                <dd className=" order-first text-4xl font-semibold tracking-tight text-lime-200">
                  {stat.value}
                </dd>

                <dt className="mt-4 text-base font-semibold leading-6 text-gray-100">
                  {stat.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
        <div className="z-40 relative lg:col-span-5 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            src="https://mos-522755.oml.ru/thumb/2/qCRqK04zbRqzb5JumjWnOA/1920r1080/d/55291941_2.jpg"
            alt=""
            className="mt-8 h-96 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-3xl xl:row-span-2 xl:row-end-2 xl:mt-16"
          />
          <img
            src="https://mos-522755.oml.ru/thumb/2/tN3tnp0BE1RhibfOSUDzJA/1920r1080/d/55291937_2.jpg"
            alt=""
            className="mt-8 h-96 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-3xl xl:row-span-2 xl:row-end-2 xl:mt-16"
          />
        </div>
      </div>
    </div>
  );
};
