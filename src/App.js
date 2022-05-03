import "./scss/App.scss";

import Projects_MainView from "./Components/Projects_MainView/Projects_MainView";
// import ReactTooltip from 'react-tooltip'
import Home from './Components/Home/Home';
import Certificate from "./Components/Certificate/Certificate";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  
  return (
    <>
      <Router>
        {/* <Routes>
          <Route path="/" component={Projects_MainView}/>
          <Route path="/about" render={<About />}/>
        </Routes> */}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/certificate">
            <Certificate />
          </Route>
        </Switch>
      </Router>
    </>
    

  );
}

export default App;
function About() {
  return <>about</>;
}

