import MyHeader from "./components/Header/Header";
import AboutMe from "./components/Sections/AboutMe/AboutMe";
import ProfileBanner from "./components/Sections/ProfileBanner/ProfileBanner";
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
                    <div id="skills" className="temp">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor suscipit
                        fermentum porttitor, odio ante lacinia magna, sit amet egestas dolor tortor at nisl. Aliquam
                        sodales nunc ut enim hendrerit, eget congue tellus pellentesque. Nam scelerisque leo non
                        tristique fermentum. Phasellus efficitur felis sodales, eleifend lectus ut, fermentum eros. Duis
                        egestas massa turpis, non sagittis enim condimentum in. Integer a ipsum id nulla semper
                        condimentum non sit amet leo. Morbi eu enim feugiat, ultricies est nec, sollicitudin ligula.
                        Cras varius bibendum est, eget pellentesque nulla hendrerit in. Duis auctor dui a odio dignissim
                        rhoncus. Vivamus purus tortor, maximus in efficitur sit amet, tristique non velit. Suspendisse
                        potenti. Sed sed odio euismod, rutrum lacus ut, vehicula neque. Sed vestibulum nulla nulla, a
                        semper massa vestibulum id.
                    </div>
                    <div id="projects" className="temp">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor suscipit
                        fermentum porttitor, odio ante lacinia magna, sit amet egestas dolor tortor at nisl. Aliquam
                        sodales nunc ut enim hendrerit, eget congue tellus pellentesque. Nam scelerisque leo non
                        tristique fermentum. Phasellus efficitur felis sodales, eleifend lectus ut, fermentum eros. Duis
                        egestas massa turpis, non sagittis enim condimentum in. Integer a ipsum id nulla semper
                        condimentum non sit amet leo. Morbi eu enim feugiat, ultricies est nec, sollicitudin ligula.
                        Cras varius bibendum est, eget pellentesque nulla hendrerit in. Duis auctor dui a odio dignissim
                        rhoncus. Vivamus purus tortor, maximus in efficitur sit amet, tristique non velit. Suspendisse
                        potenti. Sed sed odio euismod, rutrum lacus ut, vehicula neque. Sed vestibulum nulla nulla, a
                        semper massa vestibulum id.
                    </div>
                    <div id="contact" className="temp">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor suscipit
                        fermentum porttitor, odio ante lacinia magna, sit amet egestas dolor tortor at nisl. Aliquam
                        sodales nunc ut enim hendrerit, eget congue tellus pellentesque. Nam scelerisque leo non
                        tristique fermentum. Phasellus efficitur felis sodales, eleifend lectus ut, fermentum eros. Duis
                        egestas massa turpis, non sagittis enim condimentum in. Integer a ipsum id nulla semper
                        condimentum non sit amet leo. Morbi eu enim feugiat, ultricies est nec, sollicitudin ligula.
                        Cras varius bibendum est, eget pellentesque nulla hendrerit in. Duis auctor dui a odio dignissim
                        rhoncus. Vivamus purus tortor, maximus in efficitur sit amet, tristique non velit. Suspendisse
                        potenti. Sed sed odio euismod, rutrum lacus ut, vehicula neque. Sed vestibulum nulla nulla, a
                        semper massa vestibulum id.
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
