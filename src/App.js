import Companies from "./components/Companies";
import JobPage from "./components/JobPage";
import KeyFeatures from "./components/KeyFeatures";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Support from "./components/Support";
import TestimonialsPage from "./components/TestimonialsPage";
import TopNavbar from "./components/TopNavbar";
import Extra from "./Extra";

function App() {
  return (
    <>
      <div className="appMain">
        <Navbar />
        <LandingPage />
      </div>
      <Companies />
      <KeyFeatures />
      <JobPage />
      <TestimonialsPage />
      <Support />
      {/* <Extra /> */}
    </>
  );
}

export default App;
