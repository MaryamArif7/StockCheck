

const Nav = () => {
  return (
    <div className="mt-5 ml-32 flex justify-between mr-48">
      <h1 className=" text-3xl font-extrabold gradient-text ">StockCheck</h1>

      <div>
        <ul className="flex gap-10 ">
          <li  className="text-gray-500 mt-2 hover:text-purple-400 hover:font-bold "> <button >Dashboard</button></li>
          <li  className="text-gray-500 mt-2 hover:text-purple-400 hover:font-bold "> <button>Register</button></li>
          <li className="text-gray-500">
            <button className="text-white font-bold text-xl rounded-lg px-5 py-2 gradient-button">Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
