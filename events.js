let nickname = localStorage.getItem("nickname");

if (!nickname || nickname.trim() === "") {
  nickname = prompt("환영합니다! 닉네임을 입력해주세요 🤠");

  while (!nickname || nickname.trim() === "") {
    nickname = prompt("닉네임을 입력해주세요! (필수)");
  }

  localStorage.setItem("nickname", nickname.trim());
}

console.log(`현재 사용자: ${nickname}`);
