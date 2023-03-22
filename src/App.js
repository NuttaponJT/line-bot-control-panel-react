import { useState } from 'react';

import './App.css';
import MyNavBar from './components/MyNavBar/MyNavBar';
import LeftMenuBar from './components/LeftMenuBar/LeftMenuBar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  const [activeTab, setactiveTab] = useState("Home");

  return (
    <div>
      <header></header>
      <body>
        <MyNavBar activeTabProp={{activeTab: activeTab, setactiveTab: setactiveTab}} />
        <div class="main-body">
          <LeftMenuBar activeTabProp={{activeTab: activeTab, setactiveTab: setactiveTab}} />
        </div>
      </body>
    </div>
  );
}

export default App;
