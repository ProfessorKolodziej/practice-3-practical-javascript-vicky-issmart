// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

console.log("Hello!");

const my_cat = "Sushi";
let cat_number = 10;
cat_number = cat_number + 1; 

console.log(my_cat);
console.log(cat_number);

//practical


const toggledParagraph = document.querySelector('.show');
console.log(toggledParagraph);

//write a function that toggles the show/hide classes
function toggleParagraph() {
    toggledParagraph.classList.toggle("show");
    toggledParagraph.classList.toggle("hide");
    console.log("My toggle function");    //to test whether the function is running
    console.log(toggledParagraph);
}

//call the function
toggleParagraph();

//call it again to show
toggleParagraph();

// Find the button and make something happen when we click it
const toggleButton = document.querySelector('#toggle-control');

toggleButton.addEventListener("click", toggleParagraph);

