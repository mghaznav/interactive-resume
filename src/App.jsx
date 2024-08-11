import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";
import Blog from "./components/Blog";
import ScreenContextProvider from "./components/store/screen";

function App() {

  return (
    <ScreenContextProvider>
      <Navigation/>
      <Hero />
      <AboutMe />
      <WorkExperience />
      <Blog />
      <div className="h-[25vh]">
        <h1 className="text-4xl text-navy-blue">Footer</h1>
      </div>
    </ScreenContextProvider>
  );
}

export default App;