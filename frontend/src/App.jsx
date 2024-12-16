import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard"
const router=createBrowserRouter([
{
  path:"/",
  element:<Home />,
},
{
  path:"/register",
  element:<Register />,
},
{
  path:"/login",
  element:<Login />,
},
{
  path:"/dashboard",
  element:<Dashboard />,
},
])
function App() {
  return (
    <>
     <main>
      <RouterProvider router={router}></RouterProvider>
     </main>
    </>
  );
}

export default App;
