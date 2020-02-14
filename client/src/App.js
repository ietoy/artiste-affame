import * as React from "react";
import { ConfigProvider } from "./configContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import Homepage from "./pages/Homepage";

// WRITE A handleLike FUNCTION TO INCREMENT THE LIKE COUNT OF PAINTING OBJS +1 WHEN A BUTTON IS LIKED

function App() {
  return (
      <div className="div">
        <ConfigProvider>
        <Router>
        <Navbar/>
        <Wrapper>
        <Route exact path="/" component={Homepage}/>
        </Wrapper>
        </Router>
        </ConfigProvider>
      </div>
  );
}

export default App;
