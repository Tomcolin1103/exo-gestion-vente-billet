import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function EventDetail() {
	const { id } = useParams();
	const events = useSelector((state) => state.events);
	const event = events.filter((e) => e.id === id)[0];

	return (
		<>
			<h1>{event.name}</h1>
			<strong>{event.location} </strong>
			<em>
				<u>{event.date}</u>
			</em>
			<p>{event.description}</p>
		</>
	);
}
