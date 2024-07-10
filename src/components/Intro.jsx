import React from "react";
import { ReactTyped } from "react-typed";

export function Intro() {
	return (
		<div id="intro" className="w-full h-screen bg-rosePine-base">
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-rosePine-text">
				<p className="text-4xl">Hey It's</p>
				<h1 className="font-bold text-4xl sm:text-7xl">
					<ReactTyped
						strings={["Hyun here"]}
						typeSpeed={20}
						backDelay={70}
						cursorChar="_"
					/>
				</h1>
				<h2 className="font-bold text-3xl sm:text-5xl text-rosePine-muted">
					<ReactTyped
						strings={[
							"Student pursing CyberSecurity and software engineering.",
						]}
						typeSpeed={35}
						backDelay={70}
						showCursor={false}
					/>
				</h2>
			</div>
		</div>
	);
}

export default Intro;
