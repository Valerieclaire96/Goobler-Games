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
    <div ref={ref} style={{ height: "600px" }} className="py-4">
      <h4 className="my-2">{result?.text}</h4>
      <img src={result?.image} alt={result?.text} />
    </div>
  );
});
