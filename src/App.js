import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";
import Friends from "./components/Friends/Friends";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile
              postsData={props.state.profilePage.postsData}
              addPost={props.addPost}
              newPostText={props.state.profilePage.newPostText}
              updateNewPostText={props.updateNewPostText}
            />
          )}
        />
        <Route
          path="/friends"
          render={() => (
            <Friends friendsData={props.state.friendsPage.friendsData} />
          )}
        />
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              dialogsData={props.state.dialogsPage.dialogsData}
              messagesData={props.state.dialogsPage.messagesData}
            />
          )}
        />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
};

export default App;
