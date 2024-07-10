import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../shared/data";
import { spotlightProjects } from "../shared/data";
/*
import Asos from "../../../public/projects/asos.png";
import bank from "../../../public/projects/bank.png";
import chevron from "../../../public/projects/chevron.png";
import codestash from "../../../public/projects/codestash.png";
import bulkpayment from "../../../public/projects/bulkpayment.png";
import uber from "../../../public/projects/uber.png";
import vans from "../../../public/projects/vans.png";
*/

const Carrossel = ({ image, title, desc, open, link, techStack }) => {
	return (
		<div className=" duration-500 transform block md:hidden hover:scale-105 hover:shadow-md hover:shadow-black bg-gray-100 dark:bg-[#0a0a0a] h-full border-dashed border-zinc-600 border-[0.2px] p-5 rounded-sm">
			<image src={image} alt={`${title} image`} />
			<div className="p-2">
				<h1 className="text-[20px] text-center font-medium">{title}</h1>
				<hr className="w-12 mx-auto bg-fuchsia-500 h-[2px]"></hr>

				<p className="text-[12px] inter-font mt-2 leading-5 text-center dark:text-gray-300 font-inter">
					{desc}
				</p>

				<div className="flex justify-center items-center mx-2 gap-4 my-4">
					<a href={open}>
						<button className=" border-black hover:bg-slate-300  dark:border-none dark:bg-[#232323] bg-slate-200  px-3 py-1.5 border-[0.2px] rounded-md text-[12px]">
							View Project
						</button>
					</a>
					<a href={link} className="ml-auto">
						<FaGithub className="w-7 h-7 hover:text-blue-900" />
					</a>
				</div>
			</div>
		</div>
	);
};

const Projectssm = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevProject = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? projects.length - 1 : prevIndex - 1
		);
	};

	const nextProject = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === projects.length - 1 ? 0 : prevIndex + 1
		);
	};

	const currentProject = projects[currentIndex];

	return (
		<div id="section3" className=" block h-[500px]  my-[3.5rem]">
			<div>
				<h1 className="text-3xl text-center pompiere-font">
					-{" "}
					<span className="mx-3 font-inter gradienttext dark:bg-gradient-to-r from-fuchsia-400 to-[#251729]">
						Projects.
					</span>
				</h1>
				<p className="leading-8 mt-7 text-center text-[13px] font-medium">
					Below are a selection of completed projects I&apos;ve meticulously
					crafted from the ground up. They have{" "}
					<span className="dark:text-fuchsia-300 text-fuchsia-500 ">
						attractive designs and
					</span>{" "}
					easy-to-use layouts. The code is well-organized, making it simple to
					maintain and reuse. These projects showcase my commitment to
					<span className="dark:text-fuchsia-300 text-fuchsia-500 ">
						{" "}
						responsive design.
					</span>
				</p>
				<div className="flex items-center justify-center mt-7">
					<button
						onClick={prevProject}
						className="p-2.5  bg-slate-200 rounded-full hover:bg-gray-400 dark:bg-[#232323] dark:hover:bg-gray-600"
					>
						<FaArrowLeft className="text-fuchsia-500" />
					</button>
					<div className="w-full mx-4">
						{console.log(currentProject)}
						<Carrossel
							image={currentProject.image}
							title={currentProject.title}
							desc={currentProject.desc}
							techStack={currentProject.techStack}
							open={currentProject.open}
							link={currentProject.link}
						/>
					</div>
					<button
						onClick={nextProject}
						className="p-2.5 bg-slate-200  rounded-full hover:bg-gray-400 dark:bg-[#232323] dark:hover:bg-gray-600"
					>
						<FaArrowRight className="text-fuchsia-500" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Projectssm;
