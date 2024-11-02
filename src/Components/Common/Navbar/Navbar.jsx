import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="mt-4 mb-14 max-w-[1170px] mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
            </button>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? 'text-[#23BE0A] font-bold' : 'font-bold hover:text-[#23BE0A]'
                }>
                Home
              </NavLink>
              <NavLink to="/listedbooks" className={({ isActive }) =>
                  isActive ? 'text-[#23BE0A] font-bold' : 'font-bold hover:text-[#23BE0A]'
                }>
                Listed Books
              </NavLink>
              <NavLink to="/pagestoread" className={({ isActive }) =>
                  isActive ? 'text-[#23BE0A] font-bold' : 'font-bold hover:text-[#23BE0A]'
                }>
                Pages to Read
              </NavLink>
            </ul>
          </div>
          <a className="text-xl sm:text-4xl font-black">Book Vibe</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-6 items-center">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#23BE0A] font-bold border border-[#23BE0A] rounded-lg p-3'
                  : 'font-normal p-3 hover:text-[#23BE0A]'
              }
            >
              Home
            </NavLink>
            <NavLink to="/listedbooks" className={({ isActive }) =>
                isActive
                  ? 'text-[#23BE0A] font-bold border border-[#23BE0A] rounded-lg p-3'
                  : 'font-normal p-3 hover:text-[#23BE0A]'
              }>
              Listed Books
            </NavLink>
            <NavLink to="/pagestoread" className={({ isActive }) =>
                isActive
                  ? 'text-[#23BE0A] font-bold border border-[#23BE0A] rounded-lg p-3'
                  : 'font-normal p-3 hover:text-[#23BE0A]'
              }>
              Pages to Read
            </NavLink>
          </ul>
        </div>

        <div className="navbar-end flex gap-4">
          <button className="btn bg-[#23BE0A] text-white">Sign In</button>
          <button className="btn bg-[#59C6D2] text-white">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
