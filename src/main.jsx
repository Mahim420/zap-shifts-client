import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-base-300" data-theme="mytheme">
      <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>,
);
