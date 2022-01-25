import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Launchpad from "./pages/Launchpad/Launchpad";
import SavedProjects from "./pages/SavedProjects/SavedProjects";
import Sequencer from "./pages/Sequencer/Sequencer";
import SignIn from "./pages/SignIn/SignIn";
import Synth from "./pages/Synth/Synth";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/sequencer" element={<Sequencer/>}/>
        <Route path="/synth" element={<Synth/>}/>
        <Route path="/launchpad" element={<Launchpad/>}/>
        <Route path="/savedProjects" element={<SavedProjects/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
