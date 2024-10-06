const btn = document.querySelector(".signle-btn-plus");
const minusBtn = document.querySelector(".minus-btn");
const allQuestions = document.querySelectorAll(".single-question-section");

allQuestions.forEach((q) => {
  const plusBtn = q.querySelector(".plus-btn");
  const minusBtn = q.querySelector(".minus-btn");
  const container = q.querySelector(".detail-question");
  // console.log(plusBtn);
  plusBtn.addEventListener("click", function () {
    allQuestions.forEach((otherQ) => {
      const otherContainer = otherQ.querySelector(".detail-question");
      otherContainer.classList.remove("show");
      otherQ.classList.remove("show");
    });
    // console.log(container);
    container.classList.toggle("show");
    q.classList.toggle("show");
  });

  minusBtn.addEventListener("click", function () {
    container.classList.remove("show");
    q.classList.remove("show"); // Close the current section
  });
});

// plusBtn.addEventListener("click", () => {
//   //   detailQuestion.classList.add("show");
//   //   console.log("clicked");
//   console.log(detailQuestion);
//   detailQuestion.classList.toggle("show");
//   //   minusBtn.classList.toggle("show");
//   //   plusBtn.classList.toggle("show");
// });

// const openbtn = () => {
//   let detailQuestion = this.closest(".detail-question");

//   console.log(detailQuestion);
//   detailQuestion.classlist.toggle("show");
// };
