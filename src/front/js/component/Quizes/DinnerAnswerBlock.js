import React, { useState, useEffect, forwardRef } from "react";

export default forwardRef(function DinnerAnswerBlock(
  { answerOptions, chosenAnswers },
  ref
) {
  const [result, setResult] = useState(null);
  console.log(result, "here");

  useEffect(() => {
    answerOptions.forEach((answer) => {
      if (
        chosenAnswers.includes(answer.combination[0]) &&
        chosenAnswers.includes(answer.combination[1]) &&
        chosenAnswers.includes(answer.combination[2]) &&
        chosenAnswers.includes(answer.combination[3]) &&
        chosenAnswers.includes(answer.combination[4])
      ) {
        setResult(answer);
      } else if (!result) {
        setResult(answerOptions[0]);
      }
    });
  }, [result]);

  return (
    <div ref={ref} className="answer-block container-fluid h-100">
      <h2 className="my-4">{result?.text}</h2>
      <img src={result?.image} className="image-fluid" alt={result?.text} />
      <a href={result?.link} className="btn btn-light my-3">
        Go To Recipe
      </a>
    </div>
  );
});
