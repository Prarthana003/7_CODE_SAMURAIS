export const inter = {
    topic: 'Javascript',
    level: 'Intermediate',
    totalQuestions: 10,
    perQuestionScore: 5,
    questions: [
      {
        question:
        "Which number should come next in the pattern?",
        ques:'37, 34, 31, 28',
          choices: ['32','25','23','24'],
        type: 'MCQs',
        correctAnswer: '25',
        weight:'4',
      },
      {
        question:
          'Which answer expresses the meaning of the specified word best? ',
          ques:'  reassuring',
          choices: ['compassionate', 'comforting', 'explanatory', 'happen',' meddlesome'],
        type: 'MCQs',
        correctAnswer: 'comforting',
        weight:'3',
      },
      {
        question:
          'What number best completes the analogy:',
          ques:'8:4 as 10:',
          choices: [
          '3',
          '7',
          '24',
          '5',
        ],
        type: 'MCQs',
        correctAnswer: '5',
        weight:'2',
      },
      {
        question: 'Which number logically follows this series?\n',
        ques:'7 9 5 11 4 15 12 7 13 8 11 ?',
        choices: ['8', '10', '11', '13'],
        type: 'MCQs',
        correctAnswer: '10',
        weight:'5',
      },
       {
        question: 'Two people are walking into town.Another two people are going the other way.How many people are going into town altogether?\n',
        ques:'',
        choices: ['4', '3', '5', '2'],
        type: 'MCQs',
        correctAnswer: '2',
        weight:'2',
      },
      {
        question: 'Carl and Oscar are siblings.Each of them has two sisters.How many children are there in the family?\n',
        ques:'',
        choices: ['3', '4', '6', '8'],
        type: 'MCQs',
        correctAnswer: '4',
        weight:'2',
      },
      {
        question: 'Find the answer that best completes the analogy:\n',
        ques:'Book is to Reading as Fork is to:\n',
        choices: ['drawing', 'writing', 'stirring', 'eating'],
        type: 'MCQs',
        correctAnswer: 'eating',
        weight:'1',
      },
      {
        question: 'How many birthdays does the average man have?\n',
        ques:'',
        choices: ['One ', 'Every year', 'Twice a year', 'Every month'],
        type: 'MCQs',
        correctAnswer: 'One',
        weight:'2',
      },
      {
        question: 'The price of an article was cut by 20% for sale.By what percent must the discounted item be increased to again sell the article at the original price?\n',
        ques:'',
        choices: ['15%', '20%', '25%', '30%'],
        type: 'MCQs',
        correctAnswer: '25%',
        weight:'5',
      },
      {
        question: 'Nia, twelve years old, is three times as old as her sister. How old will Nia be when she is twice as old as her sister?\n',
        ques:'',
        choices: ['15', '18', '16', '20'],
        type: 'MCQs',
        correctAnswer: '16',
        weight:'4',
      },
    ],
  }

  /*

  function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

module.exports = getRandomSubarray(inter,5)
*/