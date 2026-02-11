import { CheckCircleOutlined } from '@ant-design/icons'
import { 
  RiJavascriptFill,   
  RiReactjsFill, 
  RiNodejsFill, 
  RiTailwindCssFill, 
  RiDatabase2Fill,
  RiHtml5Fill, 
  RiCss3Fill, 
  RiNextjsFill, 
  RiGithubFill,
} from "react-icons/ri"
import { FaBootstrap, FaDocker } from "react-icons/fa";
import { 
  SiMysql, 
  SiTypescript, 
  SiSpringboot, 
  SiMongodb, 
  SiFirebase, 
  SiPostman, 
  SiIntellijidea,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

type Props = {}

export default function SkillPage({}: Props) {
  const skills = [
    // Programming Languages
    { name: 'JavaScript', icon: <RiJavascriptFill className="text-yellow-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
    { name: 'HTML5', icon: <RiHtml5Fill className="text-orange-600" /> },
    { name: 'CSS3', icon: <RiCss3Fill className="text-blue-500" /> },

    // Frontend
    { name: 'React', icon: <RiReactjsFill  className="text-sky-400" />  },
    { name: 'Next.js', icon: <RiNextjsFill className="text-black" /> },
    { name: 'Tailwind', icon: <RiTailwindCssFill className="text-cyan-400" /> },
    { name: 'Bootstrap', icon: <FaBootstrap  className="text-purple-600" /> },

    // Backend & Database
    { name: 'Node.js', icon: <RiNodejsFill className="text-green-600" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
    { name: 'RESTful API', icon: <TbApi className="text-blue-400" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-orange-400" /> },
    { name: 'Drizzle', icon: <RiDatabase2Fill className="text-lime-500" /> },

    // Tools & Platforms
    { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-600" /> },
    { name: 'GitHub', icon: <RiGithubFill className="text-black" /> },
  ]

  const workflows = [
    { title: 'Testing & Debugging', description: null },
    { title: 'Git, Github for Teamwork', description: null },
    { title: 'Responsive Web Design', description: null },
    { title: 'Agile Development & Scrum', description: null },
    { 
      title: 'English for Work!', 
      description: `• For Reading: I can comfortably read and interpret documentation, project specifications, and work totally in English.\n• For Speaking: I am capable of basic communication and am always striving to improve everyday. I am now practicing communication with a Philippines teacher every weekend.\n• I would really like the opportunity to work at your organization, where I would be able to practice my ability to speak English.` 
    },
  ]

  return (
    <div className='p-8 max-w-6xl mx-auto font-sans'>
      {/* Title */}
      <h1 className='text-4xl font-bold mb-12 text-gray-800 uppercase tracking-tight'>skills</h1>

      {/* Programming Languages & Tools Section */}
      <div className='mb-16'>
        <h2 className='text-xl font-bold text-gray-700 mb-8 border-b-2 border-gray-100 pb-2'>Programming Languages & Tools:</h2>
        <div className='flex flex-wrap gap-5'>
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className='w-16 h-16 flex items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-3xl' 
              title={skill.name}
            >
              {skill.icon}
            </div>
          ))}
        </div>
      </div>

      {/* Workflow Section */}
      <div className='mb-12'>
        <h2 className='text-xl font-bold text-gray-700 mb-8 border-b-2 border-gray-100 pb-2'>Workflow:</h2>
        <div className='space-y-6'>
          {workflows.map((workflow, index) => (
            <div key={index} className='flex gap-4 group'>
              <div className='flex-shrink-0 mt-1'>
                <CheckCircleOutlined className='text-green-500 text-xl group-hover:scale-110 transition-transform' />
              </div>
              <div className='flex-grow'>
                <h3 className='text-lg font-bold text-gray-800 mb-2'>{workflow.title}</h3>
                {workflow.description && (
                  <div className='text-gray-600 text-sm leading-relaxed whitespace-pre-line bg-gray-50 p-4 rounded-lg border-l-4 border-green-500'>
                    {workflow.description}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* My Maxim Section */}
          <div className='flex gap-4 pt-8 mt-8 border-t border-gray-200 group'>
            <div className='flex-shrink-0 mt-1'>
              <CheckCircleOutlined className='text-green-500 text-xl group-hover:scale-110 transition-transform' />
            </div>
            <div className='flex-grow'>
              <h3 className='text-lg font-bold text-gray-800 mb-1'>My maxim:</h3>
              <p className='text-gray-600 italic font-medium text-lg text-emerald-700'>
                "Learning new everyday not the copycat of yesterday!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}