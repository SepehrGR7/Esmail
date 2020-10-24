const selectAnswer = (e) => {
   const children = e.target.children;
   children[2].checked = true;
};

const deleteAnswer = () => {
   const asnwers = document.querySelectorAll('.answer-container');
   asnwers.forEach((answer) => {
      answer.children[2].checked = false;
   });
};

const asnwers = document.querySelectorAll('.answer-container');
asnwers.forEach((answer) => {
   answer.addEventListener('click', selectAnswer);
});

document.querySelector('.delete-btn').addEventListener('click', deleteAnswer);
