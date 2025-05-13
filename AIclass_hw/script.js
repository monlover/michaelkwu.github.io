document.querySelectorAll('.menu a, footer a').forEach(link => {
    link.addEventListener('click', (e) => {
      console.log(`${e.target.textContent} 버튼이 클릭되었습니다.`);
    });
  });
  