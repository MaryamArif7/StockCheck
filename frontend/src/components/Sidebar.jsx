import logo from "../assets/image.png";
import { FiHome, FiBook, FiBox, FiSettings, FiUser, FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-100 text-black p-5 shadow-md flex flex-col justify-between">
     
      <div>
   
        <div className="flex items-center gap-4 mb-10">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-purple-700">StockCheck</h1>
        </div>

      
        <nav>
          <ul className="space-y-3">
            <li>
              <button className="flex items-center gap-3 w-full text-left p-2 hover:bg-purple-200 hover:px-4 py-3 rounded transition">
                <FiHome className="text-xl text-purple-600" /> Home
              </button>
            </li>
            <li>
              <button className="flex items-center gap-3 w-full text-left p-2 hover:bg-purple-200 hover:px-4 py-3 rounded transition">
                <FiBook className="text-xl text-purple-600" /> Recipes
              </button>
            </li>
            <li>
              <button className="flex items-center gap-3 w-full text-left p-2 hover:bg-purple-200 hover:px-4 py-3 rounded transition">
                <FiBox className="text-xl text-purple-600" /> Inventory
              </button>
            </li>
            <li>
              <button className="flex items-center gap-3 w-full text-left p-2 hover:bg-purple-200 hover:px-4 py-3 rounded transition">
                <FiSettings className="text-xl text-purple-600" /> Settings
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="text-center bg-gray-200 text-purple-800 p-4 rounded-lg">
        <h2 className="font-semibold text-lg mb-2"> Generated Recipes</h2>
        <button className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">
          Lets Go
        </button>
      </div>
      <div className="flex items-center gap-3 bg-gray-200 p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full">
          <FiUser className="text-2xl" />
        </div>
        <div>
          <p className="font-semibold text-gray-700">John Doe</p>
          <button className="flex items-center gap-2 text-sm text-red-500 hover:underline mt-1">
            <FiLogOut /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
