
import { Moon } from 'lucide-react';
import {
  Link,
} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-white text-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Moon className="h-6 w-6 text-gray-600" />
      </div>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-gray-500">Home</Link>
        <Link to="about" className="hover:text-gray-500">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;

