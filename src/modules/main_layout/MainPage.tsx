import { useEffect } from 'react';
import { useLocation } from 'react-router';
import AboutmePage from '../about_me/AboutmePage';
import ExperiencePage from '../experence/ExperiencePage';
import EducationPage from '../education/EducationPage';
import SkillPage from '../skills/SkillPage';
import TheEndPage from '../The_End/TheEndPage';
import Interested from '../interested/Interested';
import { SECTION_IDS } from '../../constants/routes';

export default function MainPage() {
  const location = useLocation();

  // Auto-scroll to section khi pathname thay đổi
  useEffect(() => {
    // Lấy section key từ pathname (e.g., '/experience' → 'experience')
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const sectionKey = pathSegments[pathSegments.length - 1] || SECTION_IDS.ABOUT_ME;

    // Scroll đến section tương ứng
    setTimeout(() => {
      const element = document.getElementById(sectionKey);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Chờ DOM render xong
  }, [location.pathname]);
  return (
    <div className='p-4 md:p-10 space-y-0'>
      {/* About Me Section ( css cho margin section ở đây*/}
      <section id={SECTION_IDS.ABOUT_ME} className='space-y-8 pb-12 pt-10'>
        <AboutmePage />
      </section>

      {/* Experience Section */}
      <section id={SECTION_IDS.EXPERIENCE} className='py-8 md:py-16 mt-6 md:mt-12 mb-6 md:mb-12 border-t-4 border-red-300 pt-2'>
        <ExperiencePage />
      </section>

      {/* Projects Section */}
      <section id={SECTION_IDS.PROJECTS} className='py-8 md:py-16 mt-6 md:mt-12 mb-6 md:mb-12 border-t-4 border-blue-300 pt-6 md:pt-12'>
        <h1 className='text-3xl md:text-5xl font-bold mb-4 md:mb-8'>Projects</h1>
        <p className='text-gray-700 text-base md:text-lg'>
          Projects section - Coming soon!
        </p>
      </section>

      {/* Skills Section */}
      <section id={SECTION_IDS.SKILLS} className='py-8 md:py-16 mt-6 md:mt-12 mb-6 md:mb-12 border-t-4 border-purple-300 pt-4 md:pt-8'>
        <SkillPage />
      </section>

      {/* Education Section */}
      <section id={SECTION_IDS.EDUCATION} className='py-8 md:py-16 mt-6 md:mt-12 mb-6 md:mb-12 border-t-4 border-green-300 pt-6 md:pt-12'>
        <EducationPage />
      </section>

      {/* Interests Section */}
      <section id={SECTION_IDS.INTERESTS} className='py-8 md:py-16 mt-6 md:mt-12 mb-6 md:mb-12 border-t-4 border-yellow-300 pt-6 md:pt-12'>
        <h1 className='text-3xl md:text-5xl font-bold mb-4 md:mb-8'>Interests</h1>
        <p className='text-gray-700 text-base md:text-lg'>
  
          <Interested />
        </p>
      </section>

      {/* The End Section */}
      <section id={SECTION_IDS.THE_END} className='py-8 md:py-16 mt-6 md:mt-12 mb-6 md:mb-12 border-t-4 border-pink-300 pt-6 md:pt-12'>
        <TheEndPage />
      </section>
    </div>
  );
}
