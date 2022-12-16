import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/layout/Layout";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
      element: <Layout />,
      children: [
          {
              path: "/",
              element: <Home />
          },
          {
              path: "/About",
              element: <About />
          },
          {
              path: "/ContactUs",
              element: <Contact />
          },
      ]
  },
  {
      path: "*",
      element: <PageNotFound />
  }
])


function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App