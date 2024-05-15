import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<>
			<div id="navbar">
				<nav>
					<ul>
						<li>
							<Link to={"/"}>Home</Link>
						</li>
						<li>
							<Link to={"/events"}>Events</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}
