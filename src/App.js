import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/UI/Navigation";
import Widget from './components/UI/Widget';
import UsersList from "./components/Users/UsersList";
import UserDetail from "./components/Users/UserDetail";
import AlbumsList from "./components/Albums/AlbumsList";
import PhotosList from "./components/PhotosList";
import Form from "./components/Users/Form";
import NotFound from "./components/NotFound";
import './common.css';
import './reset.css';


const App = () => (
  <Widget>
    <Navigation />
    <Switch>
      <Route exact path="/users/:id/albums"><AlbumsList /></Route>
      <Route exact path="/albums/:id/photos"><PhotosList /></Route>
      <Route exact path='/users/:id/edit'><UsersList><Form /></UsersList></Route>
      <Route exact path='/users/add'><UsersList><Form /></UsersList></Route>
      <Route exact path="/users/:id"><UserDetail /></Route>
      <Route exact path="/users"><UsersList /></Route>
      <Route exact path="/albums"><AlbumsList /></Route>
      <Route exact path="/"><UsersList /></Route>
      <Route path='*'><NotFound /></Route>
    </Switch>
  </Widget>
);

export default App;
