import { Question } from '@/types/Question'

export const questions: Question[] = [
  {
    question: 'Qual é a diferença entre == e === em JavaScript?',
    options: [
      '== é usado para comparação de igualdade e === é usado para comparação de igualdade e tipo do dado.',
      '== é uma comparação suave e === é uma comparação forçada.',
      'Não há diferença entre == e ===.',
      '== é uma comparação forçada e === é uma comparação suave.',
    ],
    answer: 0,
  },
  {
    question: 'O que é uma função de callback em JavaScript?',
    options: [
      'Uma função que é passada como argumento para outra função.',
      'Uma função que é retornada por outra função.',
      'Uma função que é chamada dentro de outra função.',
      'Nenhuma das opções acima.',
    ],
    answer: 0,
  },
  {
    question: 'Qual é a diferença entre var, let e const em JavaScript?',
    options: [
      'var é usado para declarar variáveis, let é usado para declarar constantes e const é usado para declarar variáveis.',
      'var é usado para declarar variáveis, let é usado para declarar variáveis e const é usado para declarar constantes.',
      'var é usado para declarar constantes, let é usado para declarar variáveis e const é usado para declarar constantes.',
      'var é usado para declarar constantes, let é usado para declarar constantes e const é usado para declarar variáveis.',
    ],
    answer: 1,
  },
  {
    question: 'O que é um closure em JavaScript?',
    options: [
      'Uma função que é passada como argumento para outra função.',
      'Uma função que é retornada por outra função.',
      'Uma função que é chamada dentro de outra função.',
      'Um bloco de código que tem acesso ao escopo da função externa mesmo após a função externa ter terminado.',
    ],
    answer: 3,
  },
  {
    question: 'Qual é a diferença entre null e undefined em JavaScript?',
    options: [
      'null é um valor que representa um objeto vazio, enquanto undefined é um valor que representa uma variável que foi declarada, mas não foi atribuído a um valor.',
      'null é um valor que representa uma variável que foi declarada, mas não foi atribuído a um valor, enquanto undefined é um valor que representa um objeto vazio.',
      'undefined foi criado para substituir null',
      'Não há diferença entre null e undefined.',
    ],
    answer: 0,
  },
  {
    question: 'O que é hoisting em JavaScript?',
    options: [
      'É o comportamento de mover declarações de variáveis para o topo do escopo atual durante a fase de compilação.',
      'É um erro comum de digitação de código JavaScript.',
      'É a reorganização automática do código pelo interpretador JavaScript.',
      'É a prática de elevar uma função anônima para o topo do escopo.',
    ],
    answer: 0,
  },
  {
    question:
      'Qual é a diferença entre Array.prototype.map() e Array.prototype.forEach() em JavaScript?',
    options: [
      'map() executa uma função para cada elemento do array, enquanto forEach() cria um novo array com os resultados da chamada de uma função para cada elemento do array.',
      'map() cria um novo array com os resultados da chamada de uma função para cada elemento do array, enquanto forEach() executa uma função para cada elemento do array.',
      'map() tem a finalidade de mapear arrays que usam forEach()',
      'Não há diferença entre map() e forEach().',
    ],
    answer: 1,
  },
  {
    question:
      'Qual é a importância de utilizar "strict mode" (modo estrito) em JavaScript?',
    options: [
      'O "strict mode" melhora a performance do código.',
      'O "strict mode" previne certos erros comuns, como variáveis não declaradas.',
      'O "strict mode" permite o acesso direto a variáveis privadas.',
      'O "strict mode" desabilita completamente o uso de variáveis globais.',
    ],
    answer: 1,
  },
  {
    question: 'O que é um objeto em JavaScript?',
    options: [
      'É uma função.',
      'É uma variável.',
      'É uma string.',
      'É uma coleção de pares de chave-valor.',
    ],
    answer: 3,
  },
  {
    question: 'Qual é a função do operador typeof em JavaScript?',
    options: [
      'Realiza uma operação matemática com tipos diferentes.',
      'Verifica se duas variáveis têm o mesmo tipo',
      'Retorna o tipo de dado de uma variável.',
      'Converte um valor para um tipo específico.',
    ],
    answer: 2,
  },
]
