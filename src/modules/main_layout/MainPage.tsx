import AboutmePage from '../about_me/AboutmePage';
import ExperiencePage from '../experence/ExperiencePage';
import EducationPage from '../education/EducationPage';
import SkillPage from '../skills/SkillPage';
import TheEndPage from '../The_End/TheEndPage';

export default function MainPage() {
  return (
    <div className='p-10 space-y-0'>
      {/* About Me Section */}
      <section id='about-me' className='space-y-8 pb-12'>
        <AboutmePage />
      </section>

      {/* Experience Section */}
      <section id='experience' className='py-16 mt-12 mb-12 border-t-4 border-red-300 pt-12'>
        <ExperiencePage />
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-16 mt-12 mb-12 border-t-4 border-blue-300 pt-12'>
        <h1 className='text-5xl font-bold mb-8'>Projects</h1>
        <p className='text-gray-700 text-lg'>
          Projects section - Coming soon!
        </p>
      </section>

      {/* Skills Section */}
      <section id='skills' className='py-16 mt-12 mb-12 border-t-4 border-purple-300 pt-12'>
        <SkillPage />
      </section>

      {/* Education Section */}
      <section id='education' className='py-16 mt-12 mb-12 border-t-4 border-green-300 pt-12'>
        <EducationPage />
      </section>

      {/* Interests Section */}
      <section id='interests' className='py-16 mt-12 mb-12 border-t-4 border-yellow-300 pt-12'>
        <h1 className='text-5xl font-bold mb-8'>Interests</h1>
        <p className='text-gray-700 text-lg'>
          Interests section - Coming soon!
        </p>
      </section>

      {/* The End Section */}
      <section id='the-end' className='py-16 mt-12 mb-12 border-t-4 border-pink-300 pt-12'>
        <TheEndPage />
      </section>
    </div>
  );
}
