let nickname = localStorage.getItem("nickname");

if (!nickname) {
  nickname = prompt("환영합니다! 닉네임을 입력해주세요 🤠");
  localStorage.setItem("nickname", nickname);
}

console.log("현재 사용자: ${nickname}");
