import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import ViteApp from "./vite";
import Counter from "./counter";
import IdleTimer from "./idletimer";
import PDF from "./pdf";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/pdf",
      element: (
        <Layout>
          <PDF />
        </Layout>
      ),
    },
    {
      path: "/idle",
      element: (
        <Layout>
          <IdleTimer />
        </Layout>
      ),
    },
    {
      path: "/counter",
      element: (
        <Layout>
          <Counter />
        </Layout>
      ),
    },
    {
      path: "/",
      element: (
        <Layout>
          <ViteApp />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
