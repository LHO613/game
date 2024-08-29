// game.js

let score = 0;
let level = 1;
const levelUpInterval = 10;

const clickButton = document.getElementById('clickButton');
const scoreDiv = document.getElementById('score');
const levelDiv = document.getElementById('level');
const infoDiv = document.getElementById('info');

// 클릭 버튼 클릭 이벤트
clickButton.addEventListener('click', () => {
    score++;
    scoreDiv.textContent = `점수: ${score}`;

    if (score % levelUpInterval === 0) {
        level++;
        levelDiv.textContent = `레벨: ${level}`;
    }
});

// 브라우저가 닫힐 때 점수를 저장하는 함수
function saveScore() {
    const name = prompt('당신의 이름을 입력하세요:');
    if (name) {
        let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        highScores.push({ name, score });
        localStorage.setItem('highScores', JSON.stringify(highScores));
    }
}

// 브라우저가 닫힐 때 점수를 저장합니다
window.addEventListener('beforeunload', saveScore);