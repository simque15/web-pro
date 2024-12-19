// 페이지 이동
const button0 = document.querySelector(".logos");
button0.addEventListener("click", () => {
  window.location.href = "index.html"; 
});

const button1 = document.querySelector(".p1");
button1.addEventListener("click", () => {
  window.location.href = "index2.html"; 
});

const button2 = document.querySelector(".p2");
button2.addEventListener("click", () => {
  window.location.href = "index3.html"; 
});

const button3 = document.querySelector(".p3");
button3.addEventListener("click", () => {
  window.location.href = "index4.html"; 
});

// 공통 함수: 각 카루셀에 대해 슬라이드 이동
function moveCarousel(carouselIndex, direction) {
  const track = document.getElementById(`imageTrack${carouselIndex + 1}`);
  const leftButton = document.getElementById(`leftButton${carouselIndex + 1}`);
  const rightButton = document.getElementById(`rightButton${carouselIndex + 1}`);
  
  const itemsVisible = 4; // 한 번에 보여지는 이미지 개수
  const itemWidth = 100 / itemsVisible; // 각 아이템의 너비 (%)
  const totalItems = track.children.length; // 전체 이미지 개수
  const maxIndex = totalItems - itemsVisible; // 이동 가능한 최대 인덱스
  let currentIndex = parseInt(track.getAttribute('data-current-index') || 0);

  // 경계값 처리
  currentIndex += direction;

  if (currentIndex <= 0) {
    currentIndex = 0;
    leftButton.disabled = true;
  } else {
    leftButton.disabled = false;
  }

  if (currentIndex >= maxIndex) {
    currentIndex = maxIndex;
    rightButton.disabled = true;
  } else {
    rightButton.disabled = false;
  }

  // 트랙 이동
  const offset = -currentIndex * itemWidth; // 이동할 거리 계산 (%)
  track.style.transform = `translateX(${offset}%)`;

  // 현재 인덱스를 업데이트
  track.setAttribute('data-current-index', currentIndex);
}
