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
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";

function App() {
    return (
        <ThemeProvider>
            <Layout className="container">
                <MyHeader />
                <ScrollIndicator />
                <Layout className="information-content">
                    <div id="home" className="grouping">
                        <ProfileBanner />
                    </div>
                    <div className="grouping">
                        <Stats />
                    </div>
                    <div id="about" className="grouping">
                        <AboutMe />
                    </div>
                    <div id="tools" className="grouping">
                        <Tools />
                    </div>
                    <div id="experiences" className="grouping">
                        <Experiences />
                    </div>
                    <div id="projects" className="grouping">
                        <Projects />
                    </div>
                    <div id="contact" className="grouping">
                        <Contact />
                    </div>
                </Layout>
                <MyFooter />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
