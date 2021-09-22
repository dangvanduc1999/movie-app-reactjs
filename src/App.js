import React, { Suspense } from "react";
import MovieContextProvider from "./context/Context";
import AuthenProvider from "./context/authencontext";
import "../src/asset/style/grid.css";
import "../src/asset/style/reset.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components

import {
  Home,
  Footer,
  NavBar,
  Intro,
  Favorite,
  List,
  SigninForm,
  SignUpForm,
  Search,
  Term,
  Policy,
  Faq,
  Scrolltotop,
  VideoMovie,
} from "./components/index";

function App() {
  return (
    <>
      <Router basename="/">
        <MovieContextProvider>
          <AuthenProvider>
            <Intro />
            <NavBar />
            <Scrolltotop />
            <Suspense fallback={<div>Loading....</div>}>
              <Switch>
                <Route exact path="/listmovie">
                  <List />
                </Route>
                <Route path="/listmovie/:id" children={<VideoMovie />} />
                <Route
                  path="/favorite"
                  component={(props) => {
                    return <Favorite {...props} />;
                  }}
                />
                <Route exact path="/">
                  <Home />
                </Route>
                <Route
                  exact
                  path="/Home"
                  component={() => {
                    return <Home />;
                  }}
                />
                <Route path="/Home/:id" children={<VideoMovie />} />
                <Route
                  exact
                  path="/yourserach"
                  component={() => {
                    return <Search />;
                  }}
                />
                <Route path="/yourserach/:id" children={<VideoMovie />} />
                <Route path="/term" component={() => <Term />} />
                <Route path="/Policy" component={() => <Policy />} />
                <Route path="/FAQ" component={() => <Faq />} />
                <Route path="/signin" component={() => <SigninForm />} />
                <Route path="/signup" component={() => <SignUpForm />} />
              </Switch>
            </Suspense>
          </AuthenProvider>
        </MovieContextProvider>
        <Footer />
      </Router>
    </>
  );
}

export default App;
