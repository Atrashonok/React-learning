import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";
import Friends from "./components/Friends/Friends";
import UsersContainer from './components/Users/UsersContainer'

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => <ProfileContainer />}
        />
        <Route path="/friends" render={() => <Friends store={props.store} />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path='/users' render={ () => <UsersContainer /> } />
      </div>
    </div>
  );
};

export default App;
