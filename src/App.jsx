import Layout from "./pages/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import City from "./pages/city/City";
import { WeatherContextProvider } from "./context/WeatherContext";
import ErrorComponent from "./components/Error";
import About from "./pages/about/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: `weather`, element: <City /> }],
  },
  { path: "About", element: <About /> },
  { path: "*", element: <ErrorComponent /> },
]);
export default function App() {
  return (
    <WeatherContextProvider>
      <RouterProvider router={router} />
    </WeatherContextProvider>
  );
}
