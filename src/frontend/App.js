import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {createGlobalStyle} from "styled-components";

import "semantic-ui-css/semantic.min.css"
import "@fortawesome/fontawesome-free/css/all.css";
import Home from "./home/Home";
import ErrorBoundary from "../components/organisms/error/ErrorBoundary";

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


const App = () => {
  return (
    <ErrorBoundary>
      <React.Fragment>
        <GlobalStyles/>
        <BrowserRouter>
          <Route exact path="/" component={Home}/>
        </BrowserRouter>
      </React.Fragment>
    </ErrorBoundary>
  );
};

export default App;
