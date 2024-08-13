import Home from "./components/Home/Home";
import Navbar from "./components/Home/NavBar";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { navBarData, homeData, aboutMeData, projects } from "./components/webContent";
import ProjectsPage from "./components/Projects/ProjectsPage";
import ContactCard from "./components/Contact/ContactCard";

function App() {
  return (
    <div className="App">
      <Navbar items={navBarData.items} />

      <Home
        title={homeData.title}
        subtitle={homeData.subtitle}
        description={homeData.description}
      />
      <AboutMe
        title={aboutMeData.title}
        subtitle={aboutMeData.subtitle}
        descriptions={aboutMeData.descriptions}
      ></AboutMe>
      <ProjectsPage projects={projects}>
        </ProjectsPage> 

      <ContactCard></ContactCard> 

    </div>
  );
}

export default App;
