import React, { useState, useEffect, createRef } from "react";
import Title from "../component/Title";
import AnswerBlock from "../component/AnswerBlock";
import QuestionsBlock from "../component/QustionsBlock.js"

function CheeseQuiz() {
  const [quiz, setQuiz] = useState(null);
  const [chosenAnswer, setChosenAnswer] = useState([]);
  const [unansweredId, setUnansweredId] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const refs = unansweredId?.reduce((acc, id) => {
    acc[id] = createRef()
    return acc
}, {})

  const answerRef = createRef()

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/quizes");
      const json = await response.json();
      setQuiz(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const unansweredId = quiz?.cheeseQuiz.content?.map(({ id }) => id)
    setUnansweredId(unansweredId)
  }, [quiz])

 useEffect(() => {
  if (chosenAnswer.length > 0){
    if(showAnswer){
      answerRef.current.scrollIntoView({ behavior: "smooth"})
    }
    else if(unansweredId.length <= 0 && chosenAnswer.length >= 1){
      //scroll to answer block
      setShowAnswer(true)
      
      //make scroll to middle not top
    } else {
    //scroll to highest unanswered question ID
    const highestId = Math.min(...unansweredId)
    refs[highestId].current.scrollIntoView({ behavior: "smooth"})
  }}
 },[unansweredId, chosenAnswer, showAnswer, answerRef, refs]);
  return (
    <div className="App">
      <Title title={quiz?.cheeseQuiz.title} subtitle={quiz?.cheeseQuiz.subtitle} />
      {refs &&
        quiz?.cheeseQuiz.content?.map((contentItem) => (
          <QuestionsBlock
            setChosenAnswer={setChosenAnswer}
            chosenAnswer={chosenAnswer}
            setUnansweredId={setUnansweredId}
            unansweredId={unansweredId}
            key={contentItem.id}
            quizItem={contentItem}
            ref={refs[contentItem.id]}
          />
        ))}
          {showAnswer && (
                <AnswerBlock
                    answerOptions={quiz?.cheeseQuiz.answers}
                    chosenAnswers={chosenAnswer}
                    ref={answerRef}
                />
            )}
    </div>
  );
}

export default CheeseQuiz;
