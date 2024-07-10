import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Credits from "./components/Credits";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import OtherProjects from "./components/OtherProjects";
function App() {
	return (
		<div className="bg-rosePine-base">
			<NavBar />
			<Intro />
			<About />
			<Skills />
			<Projects />
			<OtherProjects />
			<Credits />
		</div>
	);
}

export default App;
