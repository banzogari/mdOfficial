// 문제와 정답 데이터
const quizData = [
    {
        question: "오늘 날짜는 10월 18일이다. ‘며칠까지 서류 전달드리겠습니다’라고 했다면 서류를 언제까지 전달해야 하는가?",
        options: ["10월 18일", "10월 19일", "10월 20일"],
        answer: 1
    },
    {
        question: "‘마음에 들거나 불만을 느껴 반발하는 것’의 뜻에 맞는 단어는?",
        options: ["항의", "거부"],
        answer: 0
    },
    {
        question: "‘자신의 주장을 상대에게 받아들이도록 하다’의 뜻에 맞는 단어는?",
        options: ["설득", "납득"],
        answer: 0
    },
    // 필요한 만큼 추가
];

let currentQuestion = 0;

// 문제 및 선택지 로딩
function loadQuestion() {
    const questionElement = document.getElementById("question-text");
    const optionsElement = document.getElementById("options");
    const questionNumberElement = document.getElementById("question-number");
    const progressBar = document.getElementById("progress-bar");

    // 현재 문제 설정
    questionElement.innerHTML = quizData[currentQuestion].question;
    questionNumberElement.innerHTML = `${currentQuestion + 1} / ${quizData.length}`;
    progressBar.style.width = `${((currentQuestion + 1) / quizData.length) * 100}%`;

    // 옵션 버튼 생성
    optionsElement.innerHTML = "";
    quizData[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option-button";
        button.innerText = option;
        button.onclick = () => nextQuestion(index);
        optionsElement.appendChild(button);
    });
}

// 다음 문제로 넘어가기
function nextQuestion(selectedOption) {
    if (selectedOption === quizData[currentQuestion].answer) {
        alert("정답입니다!");
    } else {
        alert("오답입니다.");
    }
    
    // 다음 문제로 이동
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        alert("퀴즈가 끝났습니다!");
        currentQuestion = 0; // 초기화하여 다시 시작 가능
        loadQuestion();
    }
}

// 첫 번째 문제 로딩
loadQuestion();
