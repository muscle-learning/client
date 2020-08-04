import React, {useEffect} from "react";
import {BrowserRouter, Route, useLocation} from "react-router-dom";
import {createGlobalStyle} from "styled-components";

import "semantic-ui-css/semantic.min.css"
import "@fortawesome/fontawesome-free/css/all.css";
import Home from "./home/Home";
import ErrorBoundary from "../components/organisms/error/ErrorBoundary";
import ReactGA from "react-ga";
import Diagnosis from "./app/Diagnosis";
import List from "./list/List";


ReactGA.initialize("UA-57296092-10");
const path = window.location.pathname + window.location.search;
ReactGA.set({page: path});
ReactGA.pageview(path);

const GlobalStyles = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      whiteSpace: 'pre-line'
      font-size: 16px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .ui .header {
        color: #897657;
    }
    ::-webkit-scrollbar {
       width: 10px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 50, .5);
      border-radius: 10px;
      box-shadow:0 0 0 1px rgba(255, 255, 255, .3);
    }
    .disable-scroll::-webkit-scrollbar{
      display:none;
    }
    select {
      width: 100%;
    }
    .slick-prev:before {
      color: black;
      margin-left:-3vw;
    }
    .slick-next:before{
      color: black;
      margin-left: 3vw;
    }
`;

const LocationListener = ({children}) => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.set({page: location.pathname});
    ReactGA.pageview(location.pathname);
  }, [location]);

  return children;
};

const App = () => {
  return (
    <ErrorBoundary>
      <React.Fragment>
        <GlobalStyles/>
        <BrowserRouter>
          <LocationListener>
            <Route exact path="/" component={Home}/>
            <Route exact path="/app" component={Diagnosis}/>
            <Route exact path="/list" component={List}/>
          </LocationListener>
        </BrowserRouter>
      </React.Fragment>
    </ErrorBoundary>
  );
};

export default App;
