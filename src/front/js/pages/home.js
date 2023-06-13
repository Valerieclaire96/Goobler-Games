import React from "react";

import "../../styles/home.css";

export const Home = () => {
  return (
    <div className="mt-5 mx-auto">
      <div className="quizes">
        <h1 className="text-center my-3 text-dark">Pick a Quiz</h1>
        <div className="container d-flex flex-wrap">
        <div className="card mx-3 text-center" style={{ width: "18rem", height: "25rem" }}>
            <h5 className="card-title text-light px-5 my-3">What Cheese are You?</h5>
            <img
              className="card-img-top"
              height="250px"
              src="https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="Card image cap"
            />
            <div className="card-body">
              <a href="/quiz/cheese" className="btn btn-light">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card mx-3 text-center" style={{ width: "18rem", height: "25rem" }}>
            <h5 className="card-title text-light px-3 my-3">Are you a Kirby or Bongo?</h5>
            <img
              className="card-img-top"
              src="https://i.imgur.com/gAe7Uqc.jpg"
              alt="Card image cap"
              height="250px"
            />
            <div className="card-body">
              <a href="/quiz/dog" className="btn btn-light">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
