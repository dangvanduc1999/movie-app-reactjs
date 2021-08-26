import React from "react";
import MovieContextProvider from "./context/Context";
import AuthenProvider from "./context/authencontext";
import MovieInforProvider from "./context/MovieinforContext";
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
      <Router>
        <MovieContextProvider>
          <AuthenProvider>
            <Intro />
            <NavBar />
            <Scrolltotop />
            <Switch>
              <MovieInforProvider>
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
                  path="/yourserach"
                  component={() => {
                    return <Search />;
                  }}
                />
                <Route path="/term" component={() => <Term />} />
                <Route path="/Policy" component={() => <Policy />} />
                <Route path="/FAQ" component={() => <Faq />} />
                <Route path="/signin" component={() => <SigninForm />} />
                <Route path="/signup" component={() => <SignUpForm />} />
              </MovieInforProvider>
            </Switch>
          </AuthenProvider>
        </MovieContextProvider>
        <Footer />
      </Router>
      {/* </Suspense> */}
    </>
  );
}

export default App;
