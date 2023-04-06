import { useState } from 'react'
import { quiz } from './quizo.js'
import './quiz.css'
import {useNavigate} from 'react-router-dom'
import {list} from './quiz1List.js'

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [setShowResult, showResult]= useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    total:0
  })
  const [] = list
  const { questions } = quiz
  const { question,ques, choices, correctAnswer ,weight} = questions[activeQuestion]

  const navigate = useNavigate()

  const onClickNext = () => {
    console.log("slkfklflk")
    // again reset the selectedAnwerIndex, so it won't effect next question
    setSelectedAnswerIndex(null)
    setActiveQuestion((prev) => prev + 1)
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )


  }

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
      result.total = weight* 5
      list.push(result.total)

      
    } else {
      setSelectedAnswer(false)
    }
    console.log(result.total)
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

  return (
    <div className="quiz-container">
      <div>
        <span className="active-question-no">
          {addLeadingZero(activeQuestion + 1)}
        </span>
        <span className="total-question">
          /{addLeadingZero(questions.length)}
        </span>
      </div>
      <h2>{question}</h2>
      <h2>{ques}</h2>
      <ul>
        {choices.map((answer, index) => (
          <li
            onClick={() => onAnswerSelected(answer, index)
              
            }
            key={answer}
            className={
              selectedAnswerIndex === index ? 'selected-answer' : null
            }>
            {answer}
            

          </li>
        ))}
      </ul>
      <div className="flex-right">
        <button onClick={
            ()=>{
                if(activeQuestion === questions.length - 1  ){
                  console.log("alkfjlkjfljfljfiljlejilerfpaw")
                  navigate('/end')
                }
                else{
                  console.log("hgkaaaaaaaaaaaaaaaaaaaaa")
                    navigate('/intermediate');
                }
                //}

            }
            
        } disabled={selectedAnswerIndex === null}>
          {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
      
    <div className="quiz-container">
      {!showResult ? (
        <div>
          .... {/* quiz question logic */}
        </div>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <script>
            var ac = {result.correctAnswers}/{questions.length}*100
          </script>
          <p>
            var acc = 
            Accuracy:<span>({result.correctAnswers}/{questions.length})*100 </span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
        </div>
      )}
    </div>
  
    </div>
  )
}

export default Quiz