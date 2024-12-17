//새로고침침
const buttons = document.querySelectorAll(".logos");


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    location.reload(); 
  });
});


//페이지 이동
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
