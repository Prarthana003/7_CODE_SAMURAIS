export const inter = {
    topic: 'Javascript',
    level: 'Intermediate',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question:
        "Which number should come next in the pattern?",
        ques:'37, 34, 31, 28',
          choices: ['32','25','23','24'],
        type: 'MCQs',
        correctAnswer: '25',
        weight:5
      },
      {
        question:
          'Which answer expresses the meaning of the specified word best? ',
          ques:'  reassuring',
          choices: ['compassionate', 'comforting', 'explanatory', 'happen',' meddlesome'],
        type: 'MCQs',
        correctAnswer: 'comforting',
        weight:2
      },
      {
        question:
          'What number best completes the analogy:',
          ques:'8:4 as 10:',
          choices: [
          '3',
          ' 7',
          '24',
          '5',
        ],
        type: 'MCQs',
        correctAnswer: '5',
        weight:10
      },
      {
        question: 'Which number logically follows this series?\n',
        ques:'7 9 5 11 4 15 12 7 13 8 11 ?',
        choices: ['8', '10', '11', '13'],
        type: 'MCQs',
        correctAnswer: '10',
        weight:5
      },
    ],
  }