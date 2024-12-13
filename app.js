import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./src/pages/homepage";
import ClickPage from "./src/pages/clickpage";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
const parent=document.getElementById("parent");
const root=ReactDOM.createRoot(parent);
const App=()=>{
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element: <HomePage/>
        },
        {
            path:"/click",
            element: <ClickPage/>
        },
    ]);
    return (<RouterProvider router={appRouter}/>);
};
root.render(<App/>);

