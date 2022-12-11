"use strict";
/*
CIS 124: Introduction to JavaScript
JS Practice Assignment
    1. DOM Manipulation (read/write to the DOM)
    2. TEXTBOXES
    3. SELECT BOX
    4. RADIO BUTTONS
    5. CHECKBOXES
    6. Create a Form and complete Forms validation (strings, characters or numbers or date validations)
    7. Create a Form using browser validations
Dominique Tepper, 10DEC2022 */

//const $ = selector => document.querySelector(selector); 

// DOM ELEMENTS
const messageEl = document.getElementById("message-el")
const dropdownEl = document.getElementById("dropdown");
const radioEl = document.getElementById("radio");
const textboxEl = document.getElementById("textbox");
const checkboxEl= document.getElementById("checkbox");
const buttonEl = document.getElementById("button");
const englishBtn = document.getElementById("english");
const norskBtn = document.getElementById("norsk");
const photoEl = document.getElementById("photo-el");
const showBtn = document.getElementById("show-btn");
const messageContainer = document.getElementById("message-container");

// error message array
let errorMsgs = [];
const seasons = [
    "winter.jpg", 
    "spring.jpg", 
    "summer.jpg", 
    "fall.jpg"
];
const sources = [
    "https://www.pexels.com/photo/snow-covered-tree-1003124/",                  // winter
    "https://www.pexels.com/photo/hillside-covered-with-flowers-7126070/",      // spring
    "https://www.pexels.com/photo/blue-marine-13556776/",                       // summer
    "https://www.pexels.com/photo/pathway-along-the-pine-trees-2310641/"        // fall
];

const photos = [
    {name: "winter", photo: "winter.jpg", source: "https://www.pexels.com/photo/snow-covered-tree-1003124/"}, 
    {name: "spring", photo: "spring.jpg", source: "https://www.pexels.com/photo/hillside-covered-with-flowers-7126070/"}, 
    {name: "summer", photo: "summer.jpg", source: "https://www.pexels.com/photo/blue-marine-13556776/"}, 
    {name: "fall", photo: "fall.jpg", source: "https://www.pexels.com/photo/pathway-along-the-pine-trees-2310641/"}
];

let quarter = 0;
let imgDOM = ``;
let seasonOut = false;
let langEn = false;
let langNo = false;

englishBtn.textContent = "english";
norskBtn.textContent = "norwegian";
buttonEl.innerHTML = `<button id="show-btn"></button>`;

const displayErrorMsgs = (msgs) => {
    let messageContainer = document.querySelector(".message-container");
    clearErrors();

    // unoredered list
    let unorderedList = document.createElement("ul");   // create ul
    unorderedList.setAttribute("class", "errorList");   // set id

    errorMsgs.forEach(item => {
        let list = document.createElement("li");        // create li
        list.innerHTML = item;
        unorderedList.append(list);
    })

    messageContainer.appendChild(unorderedList);
}

// CLEAR ERRORS. changes the messageContainer.innerHTML value when language is changed. Tepper, 10DEC2022.
const clearErrors = () => {
    let messageContainer = document.querySelector(".message-container");
    messageContainer.innerHTML = ``;
}


// CREATE ENGLISH FORM BUTTON. Tepper, 10DEC2022.
englishBtn.addEventListener("click", function(){
    clearErrors();
    englishBtn.textContent = "{english}";
    norskBtn.textContent = "norwegian";
    errorMsgs = [];
    photoEl.innerHTML = ``;
    langEn = true;
    langNo = false;

    // EN - DROPDOWN ELEMENT. Tepper, 10DEC2022.
    dropdownEl.innerHTML = `
        <label for="season">Season</label>
        <select name="season" id="season">
            <option value="-1">Pick a season</option>
            <option value="1">winter</option>
            <option value="2">spring</option>
            <option value="3">summer</option>
            <option value="4">autumn</option>
        </select>
    `;

    // EN - RADIO BUTTONS. Tepper, 10DEC2022.
    radioEl.innerHTML = `
        <label for="size">Display</label>
        <input type="radio" name="output" id="photo" value="photo">Photo
        <input type="radio" name="output" id="source" value="source">Source
    `;

    // EN - TEXTBOX FOR CAPTCHA. Tepper, 10DEC2022.
    textboxEl.innerHTML = `
        <label for="captcha">Captcha</label>
        <input type="text" name="captcha" id="captcha">
        <br><label></label>Type '<b>pizza</b>' to prove you're not a bot.
    `;

    // EN - CHECK BOX - HUMAN VERIFY. Tepper, 10DEC2022.
    checkboxEl.innerHTML = `
        <label></label>
        <input type="checkbox" name="human" id="human" value="yes">I super promise I am 100% human.
    `;

    // EN - SHOW RESULT BUTTON. Tepper, 10DEC2022.
    buttonEl.innerHTML = `
        <label></label>    
        <button id="show-btn"><h3 id=show-btn-active>Show<h3></button>
    `;
});


// CREATE NORWEGIAN FORM BUTTON. Tepper, 10DEC2022.
norskBtn.addEventListener("click", function(){
    clearErrors();
    englishBtn.textContent = "english";
    norskBtn.textContent = "{norwegian}";
    errorMsgs = [];
    langEn = false;
    langNo = true;
    photoEl.innerHTML = ``;
    console.log("no");

    // NO - DROPDOWN ELEMENT. Tepper, 10DEC2022.
    dropdownEl.innerHTML = `
        <label for="season">Årstid</label>
        <select name="season" id="season">
            <option value="-1">Velg sesong</option>
            <option value="1">vinter</option>
            <option value="2">vår</option>
            <option value="3">sommer</option>
            <option value="4">høst</option>
        </select>
    `;

    // NO - RADIO BUTTONS. Tepper, 10DEC2022.
    radioEl.innerHTML = `
        <label for="size">Vise</label>
        <input type="radio" name="output" id="photo" value="photo">Bilde
        <input type="radio" name="output" id="source" value="source">Kilde
    `;

    // NO - TEXTBOX FOR CAPTCHA. Tepper, 10DEC2022.
    textboxEl.innerHTML = `
        <label for="captcha">Captcha</label>
        <input type="text" name="captcha" id="captcha">
        <br><label></label>Skriv '<b>pizza</b>' for å bevise at du ikke er en bot.
    `;

    // NO - CHECK BOX - HUMAN VERIFY. Tepper, 10DEC2022.
    checkboxEl.innerHTML = `
        <label></label>
        <input type="checkbox" name="human" id="human" value="yes">Jeg lover at jeg er 100% menneskelig.
    `;

    // NO - SHOW RESULT BUTTON. Tepper, 10DEC2022.
    buttonEl.innerHTML = `
        <label></label>    
        <button id="show-btn"><h3 id=show-btn-active>Avsløre<h3></button>
    `;
    
});



// GET SEASON. validates and indexes dropdown selection of seasons. Tepper, 10DEC2022.
const getSeason = (arr) => {
    const season = parseInt(document.getElementById("season").value);

    if (season === -1) {
        if (langEn === true) {
            errorMsgs.push("Please pick a season.");
        }
        if (langNo === true) {
            errorMsgs.push("Velg en sesong.");
        } 
    }
    else {
        let i = season - 1;
        quarter = i;
        return arr[i];
    }
}


// VALIDATES CAPTCHA AND CHECKBOX. Tepper, 10DEC2022.
const showPhoto = () => {
    clearErrors();

    const captcha = document.getElementById("captcha").value;       // textbox value
    let human = document.forms["picsForm"]["human"];                // for checkbox value
    let output = document.forms["picsForm"]["output"];              // for output data type
    let i = quarter;
    let img = ``;

    // VALIDATOR FOR OUTPUT DATA TYPE. Tepper, 10DEC2022.
    if (output[0].checked == false && output[1].checked == false) {
        // EN
        if (langEn === true) {
            errorMsgs[errorMsgs.length] = "Please select display option.";
            console.error("no display chosen");
        }
        // NO
        if (langNo === true) {
            errorMsgs[errorMsgs.length] = "Vennligst velg visningsalternativ.";
            console.error("ingen skjerm er valgt");
        }
    }
    // OUTPUT === PHOTO
    else if (output[0].checked == true) {
        console.log("photo");
        img += `<img id="season-img" src="${getSeason(seasons)}">`;
    }
    // OUTPUT === URL
    else if (output[1].checked == true) {
        if (langEn === true) {
            console.log("source");
            img += `<p><button id="src-btn" ><a target="_blank" href="${sources[i]}">View on Pexels</a></button><p>`;
        }
        if (langNo === true) {
            console.log("kilde");
            img += `<p><button id="src-btn" ><a target="_blank" href="${sources[i]}">Se på Pexels</a></button><p>`;
        }  
    }
    
    // IMGDOM VAR
    imgDOM = img;

    // TEXTBOX VALUE VALIDATOR. Checks if user entered 'pizza'. Tepper, 10DEC2022.
    if (captcha != "pizza") {
        if (langEn === true) {
            errorMsgs[errorMsgs.length] = "The captcha code you entered is incorrect.";
        }
        if (langNo === true) {
            errorMsgs[errorMsgs.length] = "Captcha-koden du skrev inn er feil.";
        }
    }

    // CHECKBOX VALIDATOR. Tepper, 10DEC2022.
    if (human.checked == false) {
        if (langEn === true) {
            errorMsgs[errorMsgs.length] = "You need to pinky promise that you are not a bot.";
        }
        if (langNo === true) {
            errorMsgs[errorMsgs.length] = "Du må love at du ikke er en bot";
        }    
    }

    if(errorMsgs.length === 0){
        photoEl.innerHTML = imgDOM;
    }
    else {
        displayErrorMsgs(errorMsgs);
    }
}


/* FOOTER. Tepper, 06NOV2022 *******************************************/
const footerEl = document.getElementById("footer-el");

const studentName = "tepper-d"
const today = new Date();
let whatIsToday = today.toDateString();

footerEl.textContent = `${studentName}, ${whatIsToday}`;