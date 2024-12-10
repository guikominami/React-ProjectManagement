import NewProject from "./components/NewProject";
import ProjectSideBar from "./components/ProjectSidebar";

import "./index.css";

function App() {
  return (
    <main className="main-sidebar">
      <ProjectSideBar />
      <NewProject />
    </main>
  );
}

export default App;
