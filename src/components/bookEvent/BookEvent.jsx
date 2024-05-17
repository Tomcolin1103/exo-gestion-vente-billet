import { useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";

export default function BookEvent() {
	const { id } = useParams();
	const events = useSelector((state) => state.events);
	const event = events.filter((e) => e.id === id)[0];

	return (
		<>
			<h1 className="text-5xl">Book a ticket for {event.name}</h1>
			<Link to={`/events/book/${event.id}/new`}>
				<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
					Buy ticket
				</button>
			</Link>
			<Outlet />
		</>
	);
}
