import React, { useState, useEffect, forwardRef } from "react";

export default forwardRef(function DogAnswerBlock(
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
        chosenAnswers.includes(answer.combination[3])
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
      <img src={result?.image} className="mb-4" alt={result?.text} />
    </div>
  );
});
