import React from 'react';
import { InterestedAreas } from '../shared/data';
import { Fade } from 'react-awesome-reveal';
import { RiExpandLeftRightLine } from 'react-icons/ri';
import { MdWeb } from 'react-icons/md';
import { FcEngineering } from 'react-icons/fc';
import { SiLinux } from 'react-icons/si';
import { CiMicrochip } from 'react-icons/ci';

function About() {
    return (
        <div name="about" className="h-screen w-full bg-[#121212] text-white">
            <div className="flex h-full w-full flex-col items-center justify-center">
                <div className="grid w-full max-w-[1000px] grid-cols-2 gap-8">
                    <div className="pb-8 pl-4 sm:text-right">
                        <p className="inline border-b-4 border-gray-600 text-4xl font-bold text-blue-500">About</p>
                    </div>
                </div>
                <div className="grid w-full max-w-[1000px] gap-8 px-4 sm:grid-cols-2">
                    <div className="text-4xl font-bold sm:text-right">
                        <p>Cyber Security Student and a Software developer</p>
                    </div>
                    <div className="text-2xl">
                        <Fade duration={2000} className="z-0 text-4xl font-bold">
                            I am passionate about building software that improves the lives of those around me. I specialize in contributing and creating open
                            source software.
                        </Fade>
                    </div>
                </div>
                <h5 className="text-bold mt-5"> Some Areas of Interest: </h5>
                <div>
                    {/* div for listing */}
                    <div className="m-auto grid h-auto max-w-full list-inside list-none grid-flow-col grid-cols-4 justify-items-center gap-0.5">
                        {/* listing would not work if i am using icons? might as well hardcode it??
						InterestedAreas.map((key) => {
							return <Cards icon={key.icon} title={key.title} />;
						})
						*/}
                        <Card icon={MdWeb} title={'Web development'} />
                        <Card icon={SiLinux} title={'Linux/Unix operating system'} />
                        <Card icon={CiMicrochip} title={'Embedded Systems'} extraStyle={'hover:animate-pulse'} />
                        <Card icon={FcEngineering} title={'Reverse Engineering'} extraStyle={'hover:animate-spin'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

const Card = (props) => {
    const iconStyle = `m-auto h-[100px] text-[4rem] mb-4 ${props.extraStyle ?? ''}`;
    return (
        <div className="m-2 h-auto max-h-[300px] min-h-[200px] w-auto min-w-[200px] max-w-[250px] rounded-lg text-white hover:scale-110">
            <div className="p-3 text-center">
                <props.icon className={iconStyle} />
                <p>{props.title}</p>
            </div>
        </div>
    );
};
export default About;
