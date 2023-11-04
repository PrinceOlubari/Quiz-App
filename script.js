const quizData = [
  {
    question: "Whose birthay are we celebrating today?",
    a: "Elliana",
    b: "Ellianna",
    c: "Eliana",
    d: "Elianna",
    correct: "d",
  },
  {
    question: "Which 2 characters of the Bible was she named after?",
    a: "Elisha and Eleazar",
    b: "Hannah and Elijah",
    c: "Elisa and Esther",
    d: "Eli and Anna",
    correct: "d",
  },
  {
    question: "When is the celebrant's birthday?",
    a: "Nov 10th 2022",
    b: "Nov 4th 2022",
    c: "Nov 3rd 2022",
    d: "Nov 2nd 2022",
    correct: "c",
  },
  {
    question: "Her first name means ....... in Hebrew.",
    a: "God is gracious or God has answered",
    b: "God loves me or I am God's own",
    c: "Jehovah is my God or God is my salvation",
    d: "God is my father",
    correct: "a",
  },
  {
    question: "The celebrant's middle name is .......?",
    a: "Twale",
    b: "Tuale",
    c: "Tualle",
    d: "Tualee",
    correct: "b",
  },
  {
    question: "What is the origin of her traditional name?",
    a: "St Ann's, Jamaica",
    b: "Machester, Jamaica",
    c: "Ogoni, Nigeria",
    d: "Lagos, Nigeria",
    correct: "c",
  },
  {
    question: "What was her first word?",
    a: "Mama",
    b: "Dada",
    c: "Papa",
    d: "Baba",
    correct: "b",
  },
  {
    question: "Which facial feature did she first identify?",
    a: "Ear",
    b: "Nose",
    c: "Teeth",
    d: "Head",
    correct: "b",
  },
  {
    question: "What time of the day was he born?",
    a: "Morning",
    b: "Afternoon",
    c: "Night",
    d: "Evening",
    correct: "b",
  },
  {
    question: "How many teeth does the celebrant have?",
    a: 2,
    b: "None",
    c: 4,
    d: 6,
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly.</h2>

        <button onclick=location.reload()>Reload</button>
        `;
    }
  }
});
