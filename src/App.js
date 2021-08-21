import React from "react";
import MovieContextProvider from "./context/Context";
import AuthenProvider from "./context/authencontext";
import MovieInforProvider from "./context/MovieinforContext";
import "../src/asset/style/grid.css";
import "../src/asset/style/reset.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Intro from "./components/intro/Intro";
import NavBar from "./components/navbar/Navbar";
import Home from "./components/Page/Home/Home";
import Favorite from "./components/Page/favorite/Favorite";
import List from "./components/Page/ListMovie/List";
import SigninForm from "./components/Form/sign in/SigninForm";
import SignUpForm from "./components/Form/sign up/SignUpForm";
import Search from "./components/search/Search";
import Term from "./components/Page/Term/Term";
import Footer from "./components/footer/Footer";
import Policy from "./components/Page/policy/Policy";
import Faq from "./components/Page/FAQ/Faq";
import Scrolltotop from "./components/scrollToTop/Scrolltotop";
import VideoMovie from "./components/Page/VideoMovie/VideoMovie";
import { Scrollbars } from "react-custom-scrollbars";

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
