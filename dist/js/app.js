// Select Answer
function selectAnswer(e) {
   const children = e.target.children;
   children[2].checked = true;
}

// Delete Answer
function deleteAnswer() {
   const asnwers = document.querySelectorAll('.answer-container');
   asnwers.forEach((answer) => {
      answer.children[2].checked = false;
   });
}

// Show Signup Error
function showError(e) {
   const inputs = document.querySelectorAll('.signup-input');
   const errorMsg = document.querySelector('.error');
   for (i = 0; i <= inputs.length; i++) {
      if (inputs[i].id === 'userName' && inputs[i].value === '') {
         const inputIcon = inputs[i].parentElement.previousElementSibling.children[0];
         inputs[i].classList.add('input-error');
         inputs[i].addEventListener('input', () => {
            inputs[i].classList.remove('input-error');
         });
         errorMsg.innerHTML = '<p>لطفاً نام کاربری خود را وارد نمایید</p>';
         errorMsg.style.display = 'block';
         setTimeout(function () {
            errorMsg.style.display = 'none';
         }, 3000);
         break;
      } else if (inputs[i].id === 'email' && inputs[i].value === '') {
         const inputIcon = inputs[i].parentElement.previousElementSibling.children[0];
         inputs[i].classList.add('input-error');
         inputs[i].addEventListener('input', () => {
            inputs[i].classList.remove('input-error');
         });
         errorMsg.innerHTML = '<p>لطفاً ایمیل معتبر وارد نمایید</p>';
         errorMsg.style.display = 'block';
         setTimeout(function () {
            errorMsg.style.display = 'none';
         }, 3000);
         break;
      } else if (inputs[i].id === 'password' && inputs[i].value === '') {
         const inputIcon = inputs[i].parentElement.previousElementSibling.children[0];
         inputs[i].classList.add('input-error');
         inputs[i].addEventListener('input', () => {
            inputs[i].classList.remove('input-error');
         });
         errorMsg.innerHTML = '<p>لطفاً رمز عبور خود را وارد نمایید</p>';
         errorMsg.style.display = 'block';
         setTimeout(function () {
            errorMsg.style.display = 'none';
         }, 3000);
         break;
      } else if (inputs[i].id === 'confirmPassword' && inputs[i].value === '') {
         const inputIcon = inputs[i].parentElement.previousElementSibling.children[0];
         inputs[i].classList.add('input-error');
         inputs[i].addEventListener('input', () => {
            inputs[i].classList.remove('input-error');
         });
         errorMsg.innerHTML = '<p>لطفاً تکرار رمز عبور خود را وارد نمایید</p>';
         errorMsg.style.display = 'block';
         setTimeout(function () {
            errorMsg.style.display = 'none';
            inputs[i].classList.remove('input-error');
            inputIcon.classList.toggle('input-icon-error');
         }, 3000);
         break;
      }
   }
   e.preventDefault();
}

// Event Listeners
const asnwers = document.querySelectorAll('.answer-container');
asnwers.forEach((answer) => {
   answer.addEventListener('click', selectAnswer);
});

// document.querySelector('.delete-btn').addEventListener('click', deleteAnswer);

document.querySelector('.signup-btn').addEventListener('click', showError);
