import { Question } from '@/types/Question'

type Props = {
  questions: Question[]
  answers: number[]
}

export const Results = ({ questions, answers }: Props) => {
  let totalScore = 0
  questions.map((item, key) => {
    if (item.answer === answers[key]) {
      totalScore++
    }
  })

  return (
    <div>
      <div className='text-center text-lg mb-4'>Sua nota foi:</div>
      <div
        className={`w-36 m-auto text-center text-8xl font-bold
        ${totalScore < 5 && 'bg-slate-400'}
        ${totalScore >= 5 && 'bg-blue-400'} 
        ${totalScore >= 8 && 'bg-green-400'} rounded-full`}
      >
        {totalScore}
      </div>
      <div className='text-center mt-4'>
        {totalScore >= 8 &&
          'Seu trabalho duro e dedicação são evidentes. Continue com essa determinação, pois você está no caminho certo para alcançar resultados ainda mais incríveis no futuro.'}
        {totalScore < 8 &&
          totalScore >= 5 &&
          'Continue se esforçando para alcançar seus objetivos, pois cada progresso é um passo em direção ao sucesso. Mantenha o foco e a dedicação!"'}
        {totalScore < 5 &&
          'Este é um momento de aprendizado. Use esse feedback para identificar áreas de melhoria e transforme cada desafio em uma oportunidade para crescer.'}
      </div>
    </div>
  )
}
