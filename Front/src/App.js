import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "admin",
    element: <AdminPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
