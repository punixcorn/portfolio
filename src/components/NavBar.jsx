/*
import React, { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-scroll";
function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-rosePine-surface fixed top-0 h-[3rem] z-10 right-0 left-0 w-full">
			<div className="container mx-auto flex justify-between items-center py-2 px-4">
				<button
					className="sm:hidden text-rosePine-text"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ?
						<FaTimes size={24} />
					:	<FaBars size={24} />}
				</button>

				<ul
					className={`${
						isOpen ? "flex" : "hidden"
					} sm:flex flex-col sm:flex-row items-center sm:space-x-6 w-full sm:w-auto absolute sm:relative bg-rosePine-surface top-[3rem] left-0 right-0 sm:bg-transparent sm:top-0 p-4 sm:p-0`}
				>
					<li className="font-bold">
						<Link
							to="intro"
							smooth={true}
							duration={200}
							onClick={() => setIsOpen(false)}
						>
							Intro
						</Link>
					</li>
					<li className="font-bold">
						<Link
							to="about"
							smooth={true}
							duration={200}
							onClick={() => setIsOpen(false)}
						>
							About
						</Link>
					</li>
					<li className="font-bold">
						<Link
							to="skills"
							smooth={true}
							duration={200}
							onClick={() => setIsOpen(false)}
						>
							Skills
						</Link>
					</li>
					<li className="font-bold">
						<Link
							to="projects"
							smooth={true}
							duration={200}
							onClick={() => setIsOpen(false)}
						>
							Projects
						</Link>
					</li>
				</ul>

				<div className="hidden sm:flex space-x-4">
					<NavBarIcon
						link="https://github.com/punixcorn"
						icon={FaGithub}
						iconSize={20}
					/>
					<NavBarIcon
						link="mailto:ohyunwoods663@gmail.com"
						icon={CgMail}
					/>
					<NavBarIcon
						link="https://linkedin.com/"
						icon={CiLinkedin}
					/>
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
*/
import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Link } from "react-scroll";
import { CiLinkedin } from "react-icons/ci";
function NavBar() {
	return (
		<nav className="bg-rosePine-surface fixed top-0 h-[3rem] z-10 right-0 left-0 sm:max-w-[100%]">
			<div className="container mx-auto flex sm:justify-start justify-between items-center sm:items-start  py-2 px-auto">
				<ul className="flex flex-grow lg:justify-center md:justify-center justify-start w-full space-x-8 m-auto text-rosePine-text">
					<li className="font-bold sm:text-sm">
						<Link to="intro" smooth={true} duration={200}>
							Intro
						</Link>
					</li>
					<li className="font-bold sm:text-sm" to="intro">
						<Link to="about" smooth={true} duration={200}>
							About
						</Link>
					</li>
					<li className="font-bold sm:text-sm">
						<Link to="skills" smooth={true} duration={200}>
							Skills
						</Link>
					</li>
					<li className="font-bold sm:text-sm">
						<Link to="projects" smooth={true} duration={200}>
							Projects
						</Link>
					</li>
				</ul>
				<div className="space-x-2  hidden sm:flex">
					<NavBarIcon
						link="https://github.com/punixcorn"
						icon={FaGithub}
						iconSize={20}
					/>
					<NavBarIcon
						link="mailto:ohyunwoods663@gmail.com"
						icon={CgMail}
					/>
					<NavBarIcon
						link="https://linkedin.com/"
						icon={CiLinkedin}
					/>
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
