import { NavBar } from "../types";

const Navbar = ({ items }: NavBar) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-gray-800 text-xl font-bold">
          GomaCortes
        </a>
        <div>
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-800 px-3 py-2"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
