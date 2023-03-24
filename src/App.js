import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import MyNavBar from './components/MyNavBar/MyNavBar';
import LeftMenuBar from './components/LeftMenuBar/LeftMenuBar';
import Homepage from "./pages/homepage"
import PushEventMain from "./pages/push-event-main.js"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  const [activeTab, setactiveTab] = useState("Home");
  const legacyUrl = "/";

  return (
    <div>
      <header></header>
      <body>
        <Router>
          <MyNavBar activeTabProp={{activeTab: activeTab, setactiveTab: setactiveTab}} />
          <div class="main-body">
            <Routes>
              <Route path={legacyUrl} element={
                <LeftMenuBar activeTabProp={{activeTab: activeTab, setactiveTab: setactiveTab}} 
                legacyUrl={legacyUrl} />
              }>
                <Route index element={<Homepage />}/>
                <Route path="push-event" element={<PushEventMain />}/>
              </Route>
            </Routes>
          </div>
        </Router>
      </body>
    </div>
  );
}

export default App;
