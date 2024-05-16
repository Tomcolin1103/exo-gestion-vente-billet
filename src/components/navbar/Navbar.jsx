import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
	return (
		<>
			<div id="navbar" className="bg-cyan-950 h-16">
				<nav>
					<ul className="flex justify-around h-16">
						<li className="w-1/5">
							<Link
								to={"/"}
								className="flex text-white hover:bg-cyan-900 h-full justify-center items-center"
							>
								Home
							</Link>
						</li>
						<li className="w-1/5">
							<Link
								to={"/events"}
								className="flex text-white hover:bg-cyan-900 h-full justify-center items-center"
							>
								Events
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<Outlet />
		</>
	);
}
