import * as React from "react";
import { ConfigProvider } from "./configContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/NavBar";
import Wrapper from "./components/Wrapper";

// PAGES
import Homepage from "./pages/Homepage";
import Arcade from "./pages/Arcade";

// PAINTINGS
import Studio from "./pages/Studio";
import Gallery from "./pages/Gallery";

// ITEMS
import Inventory from "./pages/Inventory";
import Store from "./pages/Store";
import Cart from "./pages/Cart";

// WRITE A handleLike FUNCTION TO INCREMENT THE LIKE COUNT OF PAINTING OBJS +1 WHEN A BUTTON IS LIKED

function App() {
  return (
      <div className="div">
        <ConfigProvider>
          <Router>
            <Navbar/>
            <Wrapper>
                
                <Route exact path="/" component={Homepage} />
                <Route exact path="/arcade" component={Arcade}/>
                
                {/* Routes involving Paintings */}
                <Route exact path="/studio" component={Studio}/>
                <Route exact path="/gallery" component={Gallery}/>

                {/* Routes involving Items */}
                <Route exact path="/inventory" component={Inventory}/>
                <Route exact path="/store" component={Store}/>
                <Route exact path="/cart" component={Cart}/>
            </Wrapper>
          </Router>
        </ConfigProvider>
      </div>
  );
}

export default App;
