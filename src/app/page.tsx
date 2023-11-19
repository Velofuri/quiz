'use client'

import { QuestionItem } from '@/components/QuestionItem'
import { Results } from '@/components/Results'
import { questions } from '@/data/questions'
import { useState } from 'react'

export default function Home() {
  const [answers, setAnswers] = useState<number[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showResult, SetShowResult] = useState(false)

  const loadNextQuestion = () => {
    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      SetShowResult(true)
    }
  }

  const handleAnswer = (answer: number) => {
    setAnswers([...answers, answer])
    loadNextQuestion()
  }

  const handleRestartButton = () => {
    setAnswers([])
    setCurrentQuestion(0)
    SetShowResult(false)
  }

  return (
    <div className='w-full h-screen flex justify-center items-center '>
      <div className='w-full max-w-xl max-h-screen overflow-auto m-4 rounded-md bg-slate-200/30 text-black shadow-lg shadow-gray-800'>
        <div className='text-center p-5 font-bold text-2xl border-b border-gray-300'>
          <h1>Quiz JavaScript</h1>
        </div>
        <div className='p-5'>
          {!showResult && (
            <QuestionItem
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswer}
            />
          )}
          {showResult && <Results questions={questions} answers={answers} />}
        </div>
        <div className='p-3 text-center border-t border-gray-300'>
          {!showResult &&
            `${currentQuestion + 1} de ${questions.length} pergunta${
              questions.length === 1 ? '' : 's'
            }`}
          {showResult && (
            <button
              onClick={handleRestartButton}
              className='px-3 py-2 rounded-md bg-blue-800 text-white'
            >
              Reiniciar Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
