import * as React from "react";
import { ConfigProvider } from "./configContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import Homepage from "./pages/Homepage";
import Studio from "./pages/Studio"

function App() {
  return (
      <div className="div">
        <ConfigProvider>
        <Router>
        <Navbar/>
        <Wrapper>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/studio" component={Studio}/>
        </Wrapper>
        </Router>
        </ConfigProvider>
      </div>
  );
}

export default App;
