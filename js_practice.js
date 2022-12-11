/*
CIS 124: Introduction to JavaScript
JS Practice Assignment
    1. DOM Manipulation (read/write to the DOM)
        [] a. read
        [] b. write
    2. TEXTBOXES
        [] a. read
        [] b. write
        [] c. create
    3. SELECT BOX
        [] a. read
        [] b. write
        [] c. create
    4. RADIO BUTTONS
        [] a. read
        [] b. write
        [] c. create
    5. CHECKBOXES
        [] a. read
        [] b. write
        [] c. create
    6. Create a Form and complete Forms validation (strings, characters or numbers or date validations)
    7. Create a Form using browser validations
Dominique Tepper, 10DEC2022 */

// DOM ELEMENTS
const dropdownEl = document.getElementById("dropdown");
const radioEl = document.getElementById("radio");
const textboxEl = document.getElementById("textbox");
const checkboxEl= document.getElementById("checkbox");
const buttonEl = document.getElementById("button");
const containerEl = document.getElementById("container");
const languagesBtn = document.getElementById("languages");

const english = [];
const norsk = [];

// LANGUAGE SELECT DROPDOWN
languagesBtn.addEventListener("mouseover", function(){

})




/* FOOTER. Tepper, 06NOV2022 *******************************************/
const today = new Date();
const footerEl = document.getElementById("footer-el");
function footer() {
    // local variables
    let studentName = "tepper-d, ";
    let whatisToday = today.toDateString() + ".";
    
    const footerStr = studentName + whatisToday;
    footerEl.textContent = footerStr;
}
footer();