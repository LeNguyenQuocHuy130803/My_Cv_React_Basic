import {
    FacebookOutlined,
    GithubOutlined,
    MailOutlined,
    PhoneOutlined,
    TwitterOutlined,
} from '@ant-design/icons';

import { FaMapMarkedAlt } from "react-icons/fa";
import ExperiencePage from '../experence/ExperiencePage';

export default function AvatarPage() {
    return (
        <div className="p-10 space-y-0">


            <section id="about-me" className="space-y-8 pb-12">
                <div className="space-y-3">
                    <h1 className="text-5xl font-bold">
                        Le Nguyen <span className="text-blue-500">Quoc Huy</span>
                    </h1>

                    <div className="space-y-1 text-xl text-slate-700" style={{ marginTop: "20px" }}>
                        <div className="flex items-center gap-2">
                            <PhoneOutlined /> <span>076 - 523 - 3951</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaMapMarkedAlt /> <span>Hoa Xuan, Da Nang</span>
                        </div>
                    </div>
                </div>


                <section className="bg-green-50 border border-green-200 rounded-lg  text-lg leading-relaxed" style={{ marginTop: '24px', padding: '12px', borderRadius: '10px' }}>
                    <p>
                        Hi there, welcome to look at my profile!
                        <br />
                        I am an Information Technology student, specializing in building website
                        systems with modern web technologies. Experienced in building website
                        projects focusing on user experience and performance optimization. Good
                        teamwork skills, quick learner and desire to develop a career as a
                        Fullstack Programmer.
                    </p>
                </section>

                {/* Skills */}
                <section className="space-y-2 text-lg" style={{ margin: "20px" }}>
                    <p>
                        <span className="font-bold">Front-End:</span>  I have experience working with <span className="font-semibold">HTML, CSS, JavaScript,
                            TypeScript, React, NextJS, Redux, Ant Design, Tailwind CSS, Bootstrap</span>
                    </p>
                    <p style={{ marginTop: '5px' }}>
                        <span className="font-bold">Back-End:</span>  I have experience working with <span className="font-semibold">NodeJS, ExpressJS,
                            NestJS, MongoDB, PostgreSQL  </span>
                    </p>
                </section>

                {/* Contact */}
                <section className="space-y-4">
                    <div className="space-y-2 text-lg">
                        <div className="flex items-center gap-2">
                            <MailOutlined style={{color:'red'}}/>
                            <a
                                href="mailto:huyle130803@gmail.com"
                                className="text-teal-600 hover:underline"
                            >
                                huyle130803@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center gap-2">
                            <GithubOutlined />
                            <a
                                href="https://github.com/leNguyenQuocHuy130803"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-600 hover:underline"
                            >
                                github.com/leNguyenQuocHuy130803
                            </a>
                        </div>
                    </div>

                    <div className="flex gap-4 text-2xl">
                        <a
                            href="https://github.com/leNguyenQuocHuy130803"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black"
                        >
                            <GithubOutlined  style={{color : 'black'}}/>
                        </a>

                        <a
                            href="https://www.facebook.com/huy.le.558151"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600"
                        >
                            <FacebookOutlined />
                        </a>
                    </div>


                    <p className="italic text-lg text-slate-600">
                        "Looking up at a starry night sky. How little are we in this universe?"
                    </p>
                </section>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-16 mt-16 border-t-2 border-gray-300 pt-16">
                <ExperiencePage />
            </section>



        </div>
    );
}
