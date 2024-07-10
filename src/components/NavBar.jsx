import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Link } from "react-scroll";
import { CiLinkedin } from "react-icons/ci";

function NavBar() {
	return (
		<nav className="bg-rosePine-surface fixed top-0 h-[3rem] z-10 right-0 left-0">
			<div className="container mx-auto flex justify-between items-center py-2 px-auto">
				<ul className="flex flex-grow justify-center w-full space-x-8 m-auto text-rosePine-text">
					<li className="font-bold">
						<Link to="intro" smooth={true} duration={200}>
							Intro
						</Link>
					</li>
					<li className="font-bold" to="intro">
						<Link to="about" smooth={true} duration={200}>
							About
						</Link>
					</li>
					<li className="font-bold">
						<Link to="skills" smooth={true} duration={200}>
							Skills
						</Link>
					</li>
					<li className="font-bold">
						<Link to="projects" smooth={true} duration={200}>
							Projects
						</Link>
					</li>
				</ul>
				<div className="space-x-2 flex m-auto">
					<NavBarIcon
						link="https://github.com/punixcorn"
						icon={FaGithub}
						iconSize={20}
					/>
					<NavBarIcon link="mailto:ohyunwoods663@gmail.com" icon={CgMail} />
					<NavBarIcon link="https://linkedin.com/" icon={CiLinkedin} />
				</div>
			</div>
		</nav>
	);
}

const NavBarIcon = (props) => (
	<a
		href={props.link}
		target="_blank"
		rel="noopener noreferrer"
		className="navbar-icon text-rosePine-text"
	>
		<props.icon size={props.iconSize ?? 21} />
	</a>
);

export default NavBar;
