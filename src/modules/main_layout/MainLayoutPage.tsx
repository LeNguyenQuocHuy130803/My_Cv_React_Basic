
import AboutmePage from '../about_me/AboutmePage';
import ExperiencePage from '../experence/ExperiencePage';

export default function MainLayoutPage() {
    return (
        <div className="p-10 space-y-0">

            {/* About Me Section + thiết lập id để chuyển đến mục */}
            <section id="about-me" className="space-y-8 pb-12">
                <AboutmePage/>
            </section>

            {/* Experience Section + thiết lập id để chuyển đến mục */}
            <section id="experience" className="py-16 mt-12 mb-12 border-t-4 border-red-300 pt-12" style={{marginTop: "100px"}}>
                <ExperiencePage />
            </section>




        </div>
    );
}
