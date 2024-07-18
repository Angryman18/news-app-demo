import { useRoutes } from "react-router-dom";
import Homepage from "@/views/Homepage";

export default function CustomRouter() {
  const element = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/*",
      element: <div>Error Page Not Found</div>,
    },
  ]);
  return element;
}
