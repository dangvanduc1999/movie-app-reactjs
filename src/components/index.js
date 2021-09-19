import React, { lazy } from "react";
// import Home from "./Page/Home/Home";
import Footer from "./footer/Footer";
import NavBar from "./navbar/Navbar";
import Intro from "./intro/Intro";
import Favorite from "./Page/favorite/Favorite";
// import List from "./Page/ListMovie/List";
import SigninForm from "./Form/signIn/SigninForm";
import SignUpForm from "./Form/signUp/SignUpForm";
import Search from "./search/Search";
import Term from "./Page/Term/Term";
import Policy from "./Page/policy/Policy";
import Faq from "./Page/FAQ/Faq";
import Scrolltotop from "./scrollToTop/Scrolltotop";
import VideoMovie from "./Page/VideoMovie/VideoMovie";
const List = lazy(() => import("./Page/ListMovie/List"));
const Home = lazy(() => import("./Page/Home/Home"));
export {
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
};
