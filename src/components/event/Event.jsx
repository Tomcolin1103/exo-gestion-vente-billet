import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { deleteEvent } from "../../redux";

export default function Event() {
	const dispatch = useDispatch();
	const events = useSelector((state) => state.events);

	return (
		<>
			<div className="text-5xl pt-5">Events</div>
			<div className="p-5 text-center">
				<Link to={"/events/new"}>
					<button className="rounded-md bg-cyan-600 p-1">
						Add new event +
					</button>
				</Link>
			</div>
			<ul className="text-center flex flex-col">
				{events.map((event) => (
					<li
						key={event.id}
						className="bg-zinc-100 rounded-md shadow-lg p-8 border border-zinc-300 w-1/2 m-1 self-center"
					>
						<Link to={`/events/${event.id}`}>
							{event.name} - {event.date} ({event.location})
						</Link>
						<span>
							<button
								onClick={() => dispatch(deleteEvent(event.id))}
								style={{ padding: "5px", marginLeft: "20px" }}
								className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mr-5"
							>
								X
							</button>
							<Link to={`/events/book/${event.id}`}>
								<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
									Book a ticket
								</button>
							</Link>
						</span>
					</li>
				))}
			</ul>
			<Outlet />
		</>
	);
}
