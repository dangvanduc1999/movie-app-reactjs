import React from "react";
import MovieContextProvider from "./context/Context";
import AuthenProvider from "./context/authencontext";
import "style/grid.scss";
import "style/reset.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Home from "components/Page/Home/Home";
import Footer from "components/footer/Footer";
import NavBar from "components/navbar/Navbar";
import Intro from "components/intro/Intro";
import Favorite from "components/Page/favorite/Favorite";
import List from "components/Page/ListMovie/List";
import SigninForm from "components/Form/signIn/SigninForm";
import SignUpForm from "components/Form/signUp/SignUpForm";
import Search from "components/search/Search";
import Term from "components/Page/Term/Term";
import Policy from "components/Page/policy/Policy";
import Faq from "components/Page/FAQ/Faq";
import Scrolltotop from "components/scrollToTop/Scrolltotop";
import VideoMovie from "components/Page/VideoMovie/VideoMovie";
import HandleChangeScrollToTop from "components/handleTopComponent/HandleChangeScrollToTop";

function App() {
  return (
    <>
      <Router basename="/">
        <MovieContextProvider>
          <AuthenProvider>
            <Intro />
            <NavBar />
            <Scrolltotop />
            <HandleChangeScrollToTop>
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
            </HandleChangeScrollToTop>
          </AuthenProvider>
        </MovieContextProvider>
        <Footer />
      </Router>
    </>
  );
}

export default App;
