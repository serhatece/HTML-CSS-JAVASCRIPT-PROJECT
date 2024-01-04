const quizData = [
    {
        question: 'Who painted the Mona Lisa?',
        a: 'Leonardo da Vinci',
        b: 'Vincent van Gogh',
        c: 'Pablo Picasso',
        d: 'Claude Monet',
        correct: 'a',
    },
    {
        question: 'Which planet is known as the "Red Planet"?',
        a: 'Earth',
        b: 'Mars',
        c: 'Venus',
        d: 'Jupiter',
        correct: 'b',
    },
    {
        question: 'What is the capital city of France?',
        a: 'London',
        b: 'Paris',
        c: 'Berlin',
        d: 'Roma',
        correct: 'b',
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        a: 'William Shakespeare',
        b: 'Charles Dickens',
        c: 'Jane Austen',
        d: 'Mark Twain',
        correct: 'a',
    },
    {
        question: 'In which year did the Titanic sink?',
        a: '1912',
        b: '1923',
        c: '1901',
        d: '1934',
        correct: 'a',
    },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]

    deselectedAnswers()

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectedAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected() {
    let answer

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    //console.log(answer)

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
        <h2> Test Completed, ${score * 20} you got points👍 </h2>
        <button class="submit" onClick="location.reload()"> Try Again 🔁  </button>
  
      `
        }
    }
})