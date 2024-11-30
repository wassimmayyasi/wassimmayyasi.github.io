import MyHeader from "./components/Header/Header";
import AboutMe from "./components/Sections/AboutMe/AboutMe";
import Contact from "./components/Sections/Contact/Contact";
import ProfileBanner from "./components/Sections/ProfileBanner/ProfileBanner";
import Projects from "./components/Sections/Projects/Projects";
import Stats from "./components/Sections/Stats/Stats";
import Tools from "./components/Sections/Tools/Tools";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <div className="container">
                <MyHeader />
                <div className="information-content">
                    <div className="temp">
                        <ProfileBanner />
                    </div>
                    <div className="temp">
                        <Stats />
                    </div>
                    <div id="about" className="temp">
                        <AboutMe />
                    </div>
                    <div id="experience" className="temp">
                        <Tools />
                    </div>
                    <div id="projects" className="temp">
                        <Projects />
                    </div>
                    <div id="contact" className="temp">
                        <Contact />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
