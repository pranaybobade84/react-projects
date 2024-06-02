import {useState} from 'react';
import {Link} from 'react-router-dom';

const links = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/users',
    name: 'Users',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
];

function App () {
  const [isOpen, setIsOpen] = useState (false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 border-b-2 shadow-md">
      <div className="flex items-center flex-shrink-0 text-black mr-6 lg:mr-72">
        Routing
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen (!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? 'hidden' : 'block'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? 'block' : 'hidden'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block  lg:flex gap-5 lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}
      >
        {links.map (navLinks => {
          return (
            <div
              key={navLinks.name}
              className="text-sm lg:flex-grow font-semibold"
            >
              <Link
                to={navLinks.path}
                className="mt-4 lg:inline-block lg:mt-0  mr-2"
              >
                {navLinks.name}
              </Link>
            </div>
          );
        })}
        <div>
          <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
            Click Me
          </button>
        </div>
      </div>
    </nav>
  );
}
export default App;
