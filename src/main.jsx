import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Event from "./components/event/Event";
import NewEventForm from "./components/newEventForm/NewEventForm";
import EventDetail from "./components/eventDetail/EventDetail";
import BookEvent from "./components/bookEvent/BookEvent";
import BuyTicketForm from "./components/buyTicketForm/BuyTicketForm";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/events",
				element: <Event />,
			},
			{
				path: "/events/new",
				element: <NewEventForm />,
			},
			{
				path: "/events/:id",
				element: <EventDetail />,
			},
			{
				path: "/events/book/:id",
				element: <BookEvent />,
				children: [
					{
						path: "/events/book/:id/new",
						element: <BuyTicketForm />,
					},
				],
			},
			{
				path: "/events/:id",
				element: <div>Events ID</div>,
			},
			{
				path: "/book/:id",
				element: <div>Book ID</div>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
