import { useRoutes } from "react-router-dom";
import Homepage from "@/views/Homepage";
import PostDetailPage from "./views/PostDetailPage";

export default function CustomRouter() {
  const element = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "post/:id",
      element: <PostDetailPage />,
    },
    {
      path: "/*",
      element: (
        <div>
          Oops. Maybe your url is not correct. if you clicked on a post and landed here then the
          respoonse data of post title has some unwanted / which is making a conflict with url path.
        </div>
      ),
    },
  ]);
  return element;
}
