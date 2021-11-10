import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/navBar/navBar";
import "./App.css";
import Login from "./Components/Login/loginUser";
import About from "./Components/about/about";
import Goals from "./Components/goals/goals";
import Budget from "./Components/budget/budgetMain";
import Shop from "./Components/ecommerce/shop";
import Register from "./Components/Register/register";

function App() {
  return (
    <Router>
      <div>
      <NavBar />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route path='/login' component={Login} />
          <Route path="/budget" component={Budget} />
          <Route path="/goals" component={Goals} />
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
