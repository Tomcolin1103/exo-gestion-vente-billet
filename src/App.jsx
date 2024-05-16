import { Provider } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import { store } from "./redux";

function App() {
	return (
		<Provider store={store}>
			<Navbar />
		</Provider>
	);
}

export default App;
