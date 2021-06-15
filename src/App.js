import { useState, createContext } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Counters from "./pages/Counters";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

export const countContext = createContext({});

function App() {

  console.log("WAT IS CONTEXT VOOR EEN DING:", countContext)

  const [apples, setApples] = useState(0);
  const [bananas, setBananas] = useState(0);
  const [pears, setPears] = useState(0);


  return (

      <countContext.Provider
        value={{
        apples: apples,
        setApples: setApples,
        bananas: bananas,
        setBananas: setBananas,
        pears: pears,
        setPears: setPears,
        }}
      >
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/counters">Bestellen</Link>
              </li>
              <li>
                <Link to="/checkout">Betalen</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/counters">
              <Counters
                  apples={apples}
                  setApples={setApples}
                  bananas={bananas}
                  setBananas={setBananas}
                  pears={pears}
                  setPears={setPears}
              />
            </Route>
            <Route path="/checkout">
              <Checkout pears={pears} apples={apples} bananas={bananas} />
            </Route>
            <Route path="/">
              <Home totalFruit={pears + apples + bananas} />
            </Route>
          </Switch>
        </header>
      </div>
      </countContext.Provider>
  );
}

export default App;
