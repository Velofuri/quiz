import { Question } from '@/types/Question'
import { useState } from 'react'

type Props = {
  question: Question
  count: number
  onAnswer: (answer: number) => void
}

export const QuestionItem = ({ question, count, onAnswer }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const checkQuestion = (key: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(key)
      setTimeout(() => {
        onAnswer(key)
        setSelectedAnswer(null)
      }, 1200)
    }
  }

  return (
    <div>
      <div className='text-xl text-center font-bold mb-5'>
        {count}. {question.question}
      </div>
      <div>
        {question.options.map((item, key) => (
          <div
            key={key}
            onClick={() => checkQuestion(key)}
            className={`border px-3 rounded-md text-base mb-4 shadow-md shadow-black bg-blue-100 border-blue-200 cursor-pointer hover:border-blue-500
              ${selectedAnswer !== null && 'cursor-auto hover:opacity-100'}
              ${
                selectedAnswer !== null &&
                selectedAnswer === question.answer &&
                selectedAnswer === key &&
                'bg-green-100 border-green-300 hover:border-green-300'
              }
              ${
                selectedAnswer !== null &&
                selectedAnswer !== question.answer &&
                selectedAnswer === key &&
                'bg-red-300 border-red-500 hover:border-red-500'
              }
            `}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
