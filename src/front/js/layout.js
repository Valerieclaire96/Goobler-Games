import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import CheeseQuiz from "./pages/Quizes/CheeseQuiz";
import DogQuiz from "./pages/Quizes/DogQuiz";
import DinnerQuiz from "./pages/Quizes/DinnerQuiz";
import ExcuseGenerator from "./pages/Generators/ExcuseGenerator";
import Madlib from "./pages/Generators/MadlibGenerator";
import Date from "./pages/Generators/DateGenerator";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";


  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<CheeseQuiz />} path="/quiz/cheese" />
            <Route element={<DogQuiz />} path="/quiz/dog" />
            <Route element={<DinnerQuiz />} path="/quiz/dinner" />
            <Route element={<ExcuseGenerator />} path="/generators/excuse" />
            <Route element={<Madlib />} path="/generators/madlib" />
            <Route element={<Date />} path="/generators/date"/>
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
