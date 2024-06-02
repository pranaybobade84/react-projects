import {Link} from 'react-router-dom';

const Error = () => {
  return (
    <section className="bg-white h-full w-full">
      <div className="py-8 px-4 mx-auto  lg:py-16 lg:px-6">
        <div className="mx-auto  text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 ">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
            Something missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 ">
            Sorry, we can not find that page. You find lots to explore on the home page.
          </p>
          <Link
            to="/"
            className="inline-flex text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
