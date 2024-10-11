const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');

//create the new Date Object using new Date() constructor
const date = new Date();
console.log(date); //log the current date to console

//date built-in methods
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

//creating a format for date
const formattedDate = `${day}-${month}-${year}`;
//console.log(formattedDate);
currentDateParagraph.textContent = formattedDate;

//function to change date format
//learning string split, array reverse, and array join
// const exampleSentence = "selur pmaCedoCeerf".split("").reverse().join("");
// console.log(exampleSentence);



dateOptionsSelectElement.addEventListener("change", () => {
  switch (dateOptionsSelectElement.value) {
    case 'yyyy-mm-dd': 
      currentDateParagraph.textContent = formattedDate;

  }
});



