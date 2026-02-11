import { LinkOutlined } from '@ant-design/icons'

interface EducationItem {
  school: string;
  schoolLink?: string;
  period: string;
  description: string;
  highlights: string[];
}

const educations: EducationItem[] = [
  {
    school: 'Vietnam-Korea Information and Communication Technology University',
    schoolLink: '#',
    period: ' April 2021 - April 2026',
    description: 'I graduated with an engineering degree in Information Technology, and I decided to work as a Web Developer.',
    highlights: [
      'When I was a student, I learned a lot about job opportunities in information technology, and I decided to choose Web Programming because I enjoy customizing and designing on my websites.',
      'I appreciate my school because it allows me to make new friends and learn with them. I\'ve also stood at the lectern and taught my classmates about programming.',
      'After 5 years in college, I successfully completed an excellent graduate thesis on programming: Using modern technologies to build a complete job search website.',
      'My graduation thesis received a 9/10, making it the third highest mark in the university. That particular moment made me really happy.\nYou can view that project of mine here: https://github.com/DoAnTotNghiepTeam'
    ]
  }
];

export default function EducationPage() {
  return (
    <div className='mt-12'>
      {/* Separator Line */}
      <div className='border-t-2 border-gray-300 my-8'></div>

      {/* Title */}
      <h1 className='text-5xl font-bold mb-8'>Education</h1>

      {/* Education Items */}
      <div className='space-y-8'>
        {educations.map((eduss, index) => (
          <div key={index} className='mb-8'>
            {/* School Header */}
            <div className='flex justify-between items-start mb-2'>
              <div>
                <h3 className='text-2xl font-bold text-teal-600 flex items-center gap-2'>
                  {eduss.school}
                  {eduss.schoolLink && <LinkOutlined className='text-lg' />}
                </h3>
              </div>
              <p className='text-right text-lg font-semibold text-teal-600'>{eduss.period}</p>
            </div>

            {/* Description */}
            <p className='text-gray-700 mb-4'>
              <span className='font-semibold text-black'>• {eduss.description}</span>
            </p>

            {/* Highlights */}
            <ul className='space-y-2'>
              {eduss.highlights.map((highlight, idx) => (
                <li key={idx} className='flex gap-3 text-gray-700'>
                  <span className='text-orange-400 text-lg flex-shrink-0'>■</span>
                  <div>
                    {highlight.split('\n').map((line, i) => (
                      <div key={i}>
                        {line.includes('https://') ? (
                          <>
                            You can view that project of mine here:{' '}
                            <a 
                              href={line.split(': ')[1]} 
                              target='_blank' 
                              rel='noopener noreferrer'
                              className='text-teal-600 hover:text-teal-700 font-semibold'
                            >
                              {line.split(': ')[1]}
                            </a>
                          </>
                        ) : (
                          line
                        )}
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
