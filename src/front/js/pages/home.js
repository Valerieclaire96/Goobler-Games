import React from "react";
import Preview from "../component/preview";

import "../../styles/home.css";

export const Home = () => {
  return (
    <div className="mt-5 mx-auto text-center">
      <div>
        <h1 className=" my-3 text-dark">Pick a Quiz</h1>
        <div
          className="d-flex justify-content-center col-10 mt-5 quizes mx-auto "
        >
            <Preview 
              title={"What Cheese are You?"} 
              img={"https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"}
              link={"/quiz/cheese"}
              btn={"Take Quiz"}
              />
               <Preview 
              title={"Are you a Kirby or Bongo?"} 
              img={"https://i.imgur.com/gAe7Uqc.jpg"}
              link={"/quiz/dog"}
              btn={"Take Quiz"}
              />
                <Preview 
              title={"What's for Dinner?"} 
              img={"https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"}
              link={"/quiz/dinner"}
              btn={"Take Quiz"}
              />
        </div>
      </div>
      <div>
        <h1 className="text-center my-3 text-dark">Generators</h1>
        <div
          className="d-flex col-10 justify-content-center mt-5 quizes mx-auto "
        >
              <Preview 
              title={"Excuses for Calling out of Work"} 
              img={"https://hips.hearstapps.com/hmg-prod/images/work-1646241542.jpg?crop=0.6662334849469352xw:1xh;center,top&resize=1200:*"}
              link={"/generators/excuse"}
              btn={"Create Excuse"}
              />
           <Preview 
              title={"Generate a Story"} 
              img={"https://contenthub-static.grammarly.com/blog/wp-content/uploads/2020/10/Write-a-Story.jpg"}
              link={"/generators/story"}
              btn={"Generate Story"}
              />
         <Preview 
              title={"Generate a Date"} 
              img={"https://www.fruitbouquets.com/fruit-blog/wp-content/uploads/2016/12/date-night-calendar-1280x720.jpg"}
              link={"/generators/date"}
              btn={"Generate Date"}
              />
        </div>
      </div>
      {/* <div>
        <h1 className="text-center my-3 text-dark">Games</h1>
        <div
          className="d-flex col-10 justify-content-center mt-5 quizes mx-auto "
        >
              <Preview 
              title={"Soduoku"} 
              img={"https://www.daysoftheyear.com/wp-content/uploads/sudoku-2022-02-18-03-28-14-utc-scaled.jpg"}
              link={"/games/sudoku"}
              btn={"Play Now"}
              />
           <Preview 
              title={"Generate a Story"} 
              img={"https://contenthub-static.grammarly.com/blog/wp-content/uploads/2020/10/Write-a-Story.jpg"}
              link={"/generators/story"}
              btn={"Generate Story"}
              />
         <Preview 
              title={"Generate a Date"} 
              img={"https://www.fruitbouquets.com/fruit-blog/wp-content/uploads/2016/12/date-night-calendar-1280x720.jpg"}
              link={"/generators/date"}
              btn={"Generate Date"}
              />
        </div>
      </div> */}
    </div>
  );
};
