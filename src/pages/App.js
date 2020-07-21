import { hot } from "react-hot-loader/root";
import React from "react";
// import 'font-awesome/css/font-awesome.min.css';
import "font-awesome/less/font-awesome.less";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import loadable from "@/pages/Battle/loadable";
import Popular from "@/pages/Popular";
// import Combination from '@/pages/Battle/Combination';
import "@/styles/git.css";
// import { extends } from '../../.eslintrc';

const Bat = loadable(() => import("./Battle/Combination"));

function App() {
  return (
    <div className="App">
      {/* <Router>
          <ul style={{ display: 'flex', fontSize: '18px' }}>
            <Link
              to='/popular'
              style={{ color: 'red' }}
            >Popular
            </Link>
            <Link to='/battle' style={{marginLeft:'18px'}}>Battle</Link>
          </ul>
          <Switch>
            <Route path="/" component={Popular} exact />
            <Route path='/popular' component={Popular} />
            <Route path='/battle' component={Combination}  />
          </Switch>
        </Router> */}

      <div>
        <Router>
          <ul style={{ display: "flex", fontSize: "18px" }}>
            <Link to="/popular" style={{ color: "red" }}>
              Popular
            </Link>
            <Link to="/battle" style={{ marginLeft: "18px" }}>
              Battle
            </Link>
          </ul>
          <Switch>
            <Route path="/" component={Popular} exact />
            <Route exact path="/popular" component={Popular} />
            <Route path="/battle" component={Bat} />
            {/* <Route exact path="/battle" component={Combination} /> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default hot(App);
