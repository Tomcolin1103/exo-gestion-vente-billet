import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/events",
		element: <div>Events</div>,
	},
	{
		path: "/events/:id",
		element: <div>Events ID</div>,
	},
	{
		path: "/book/:id",
		element: <div>Book ID</div>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
