import React, { useState, useEffect, forwardRef } from 'react'

export default forwardRef(function AnswerBlock({ answerOptions, chosenAnswers }, ref) {
  const [result, setResult] = useState(null);
 console.log(result, "here");
  
  useEffect(() => {
    answerOptions.forEach(answer => {
        if (chosenAnswers.includes(answer.combination[0]) &&
            chosenAnswers.includes(answer.combination[1]) &&
            chosenAnswers.includes(answer.combination[2])
        ) {
            setResult(answer)
        } else if (!result) {
            setResult(answerOptions[0])
        }
    })
}, [result])

 
  return (
    <div ref={ref} className='answer-block'>
      <h2>{result?.text}</h2>
      <img src={result?.image} alt={result?.text} />
    </div>
  )
}
)