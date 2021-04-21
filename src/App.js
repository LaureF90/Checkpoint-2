import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Reciperesult from "./components/Reciperesult";
import Recipes from "./components/Recipes";
import Pappardelle from "./components/Pappardelle";
import Salmon from "./components/Salmon";
import Hotcakes from "./components/Hotcakes";

export default function App() {
  return (
  <Router>
    <div>
      <nav className="Nav">
            <ul className="List">
               <li>
                  <Link to="/">All recipes</Link>
                </li>

                <li>
                  <Link to="/pappardelle"><span>Papardelle recipe</span></Link>
                </li>
                <li>
                  <Link to="/salmon"><span>Salmon recipe</span></Link>
                </li>
                <li>
                  <Link to="/hotcakes"><span>Hotcakes recipe</span></Link>
                </li>
                <li>
                  <Link to="/about">Our Philosophy</Link>
                </li>
              </ul>
        </nav>
      <Switch>
        <Route exact path='/' component={Recipes} />
        <Route path='/about' component={About} />
        <Route path='/recipe-result' component={Reciperesult} />
        <Route path='/pappardelle' component={Pappardelle} />
        <Route path='/salmon' component={Salmon} />
        <Route path='/hotcakes' component={Hotcakes} />
      </Switch>       
      {/* <footer>
              <h2>© Cook for you 2021. All rights reserved.</h2>
      </footer> */}
    </div>
  </Router>
    );
  }


