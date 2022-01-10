import "./assets/scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/" element={<Homepage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
