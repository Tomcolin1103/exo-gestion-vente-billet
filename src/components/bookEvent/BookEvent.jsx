import { useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";

export default function BookEvent() {
	const { id } = useParams();
	const events = useSelector((state) => state.events);
	const event = events.filter((e) => e.id === id)[0];

	return (
		<>
			<h1>Book a ticket for {event.name}</h1>
			<Link to={`/events/book/${event.id}/new`}>
				<button>Buy ticket</button>
			</Link>
			<Outlet />
		</>
	);
}
