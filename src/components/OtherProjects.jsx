import React from "react";
import { projects } from "../shared/data";
import { MdFolderOpen } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { MdOpenInBrowser } from "react-icons/md";
function OtherProjects() {
	return (
		<div
			id="Otherprojects"
			className="w-full md:h-screen mx-auto pt-[100px] max-w-[1000px] min-h-[50vh]"
		>
			<div className="max-w-[1000px] justify-center mx-auto px-4 w-full h-full flex flex-col">
				<div className="flex pb-[42px] w-full">
					<span className="text-rosePine-pine text-5xl font-bold">
						Other Projects
					</span>
				</div>

				<div>
					<ul className="grid grid-cols-3 auto-cols-min gap-2 project-grid">
						{projects.map((key) => (
							<li
								className="projects-card relative cursor-default flex flex-col h-full
                                        py-8 px-7 bg-rosePine-overlay rounded-2xl hover:bg-rosePine-highlightMed hover:translate-y-[-7px]"
							>
								<div className="-mt-[20px] flex py-5 px-0 justify-between !border-b-0">
									<div className="text-rosePine-foam">
										<MdFolderOpen style={{ fontSize: 35 }}></MdFolderOpen>
									</div>
									<Icons githubLink={key.link} openLink={key.open ?? null} />
								</div>

								<div className="text-rosePine-text  text-3xl font-bold">
									{key.title}
								</div>
								<div className="text-rosePine-text  text-lg pb-10">
									{key.desc}
								</div>
								<div className="text-rosePine-text  text-base">
									{key.techStack}
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

function Icons(props) {
	return (
		<span>
			<a
				className="mt-[6px] text-white hover:text-rosePine-foam no-underline flex flex-1 m-1 p-auto"
				href={props.githubLink}
			>
				<p className="text-center m-auto">Github </p>
				<FaGithub className="text-[2rem] m-auto mx-1" />
			</a>
			{props.openLink && (
				<a
					className="ml-[10px] text-rosePine-foam flex flex-1 no-underline m-1 p-auto"
					href={props.openLink}
				>
					<p className="text-center m-auto">Open link</p>
					<MdOpenInBrowser className="text-[2rem] m-auto mx-1" />
				</a>
			)}
		</span>
	);
}
export default OtherProjects;
