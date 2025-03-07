import { Layout } from "antd";
import MyFooter from "./components/Footer/Footer";
import MyHeader from "./components/Header/Header";
import AboutMe from "./components/Sections/AboutMe/AboutMe";
import Contact from "./components/Sections/Contact/Contact";
import ProfileBanner from "./components/Sections/ProfileBanner/ProfileBanner";
import Projects from "./components/Sections/Projects/Projects";
import Stats from "./components/Sections/Stats/Stats";
import Experiences from "./components/Sections/Experiences/Experiences";
import Tools from "./components/Sections/Tools/Tools";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <Layout className="container">
                <MyHeader />
                <Layout className="information-content">
                    <div id="home" className="temp">
                        <ProfileBanner />
                    </div>
                    <div className="temp">
                        <Stats />
                    </div>
                    <div id="about" className="temp">
                        <AboutMe />
                    </div>
                    <div id="tools" className="temp">
                        <Tools />
                    </div>
                    <div id="experiences" className="temp">
                        <Experiences />
                    </div>
                    <div id="projects" className="temp">
                        <Projects />
                    </div>
                    <div id="contact" className="temp">
                        <Contact />
                    </div>
                </Layout>
                <MyFooter />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
