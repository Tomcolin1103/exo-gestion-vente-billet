import Navbar from "./components/navbar/Navbar";

async function getEvents() {
	const response = await fetch("http://localhost:3000/events/");
	const events = await response.json();
	console.log(events);
}

function App() {
	getEvents();
	return <Navbar />;
}

export default App;
