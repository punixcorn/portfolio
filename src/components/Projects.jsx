import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { spotlightProjects } from "../shared/data";
import { FaGithub } from "react-icons/fa";
import { MdOpenInBrowser } from "react-icons/md";

export const Projects = () => {
	return (
		<div id="projects" className=" w-full h-auto">
			<div className="max-w-[1000px] justify-center mx-auto px-4 w-full h-full flex flex-col">
				<div className="flex pb-[42px] w-full  ">
					<span className="text-rosePine-pine text-5xl font-bold">
						Projects
					</span>
				</div>
				{/* Carousel section */}
				<Carousel className="mx-20">
					{spotlightProjects.map((key, i) => (
						<Carousel.Item className="group hover:scale-110">
							<img
								className="d-block w-100 rounded-lg group-hover:blur-sm"
								src={key.image}
								alt={key.desc}
							/>
							<div>
								{/** 
								<Carousel.Caption className="bg-black shadow-md opacity-80 rounded-3xl my-5">
									<h3>{key.title}</h3>
									<p>
										{key.desc}
										<p className="techStack">{key.techStack}</p>
									</p>
									<ExternalLinks githubLink={key.link} openLink={key.open} />
								</Carousel.Caption>
								*/}

								<Carousel.Caption className="bg-black shadow-md opacity-80 rounded-3xl my-5">
									<h1 className="text-[30px] text-center font-medium">
										{key.title}
									</h1>
									<hr className="w-12 mx-auto bg-fuchsia-500 h-[2px]"></hr>

									<p className="text-[18px] inter-font mt-2 leading-5 text-center dark:text-white font-inter">
										{key.desc}
									</p>

									<div className="flex justify-center items-center mx-2 gap-2 my-4 px-8">
										<a href={key.open}>
											<button className=" border-black hover:bg-slate-300  dark:border-none dark:bg-[#232323] bg-slate-200  px-3 py-1.5 border-[0.2px] rounded-md text-[12px]">
												View Project
											</button>
										</a>
										<a href={key.link} className="ml-auto">
											<FaGithub className="w-7 h-7 hover:text-blue-900" />
										</a>
									</div>
								</Carousel.Caption>
							</div>
						</Carousel.Item>
					))}
				</Carousel>
			</div>
		</div>
	);
};
const ExternalLinks = (props) => {
	return (
		<div className="flex flex-1 flex-grow justify-evenly m-auto">
			<a className="" href={props.githubLink}>
				<FaGithub className="hover:scale-125 text-white  to-black text-[2rem] animate-pulse" />
			</a>
			{props.openLink && (
				<a className="" href={props.openLink}>
					<MdOpenInBrowser className="hover:scale-125 text-white text-[2rem] animate-pulse" />
				</a>
			)}
		</div>
	);
};

export default Projects;
