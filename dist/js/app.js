const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];

fixNumbers = function (str) {
   for (var i = 0; i < 10; i++) {
      str = str.replace(persianNumbers[i], i);
   }
   return str;
};

const par = document.querySelectorAll('.poll-number p');
par.forEach((text) => {
   let newText = fixNumbers(text.innerText);
   text.innerText = newText;
});
