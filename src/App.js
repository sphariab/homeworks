import { Outlet } from "react-router-dom";
import Navigation from "./components/UI/Navigation";
import Widget from './components/UI/Widget';
import './common.scss'
import './reset.css'

const App = () => (
  <Widget>
    <Navigation />
    <Outlet />
  </Widget>
);

export default App;
