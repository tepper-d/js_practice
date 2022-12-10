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