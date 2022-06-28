import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/common/Header';
import NavBar from './components/common/Nav';
import Footer from './components/common/Foooter';
import ApptsContainer from './components/appointment/ApptsContainer';


class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <NavBar />
          <Switch>
            <Route path="/" exact={true} component={ApptsContainer} />
          </Switch>
        </Router>
        <Footer year={new Date().getFullYear()} />
      </div>
    );
  }
}

export default App;
