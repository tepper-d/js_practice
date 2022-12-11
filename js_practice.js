"use strict";
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

const $ = selector => document.querySelector(selector); 

// DOM ELEMENTS
const dropdownEl = document.getElementById("dropdown");
const radioEl = document.getElementById("radio");
const textboxEl = document.getElementById("textbox");
const checkboxEl= document.getElementById("checkbox");
const buttonEl = document.getElementById("button");
const containerEl = document.getElementById("container");
const englishBtn = document.getElementById("english");
const norskBtn = document.getElementById("norsk");
const photoEl = document.getElementById("photo-el");
const showBtn = document.getElementById("show-btn");

// error message array
const errorMsg = [];
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

englishBtn.textContent = "english";
norskBtn.textContent = "norwegian";
buttonEl.innerHTML = `<button id="show-btn"></button>`;

// english form
englishBtn.addEventListener("click", function(){
    englishBtn.textContent = "{english}";
    norskBtn.textContent = "norwegian";
    console.log("en");

    dropdownEl.innerHTML = `
        <label for="season">Season</label>
        <select name="season" id="season">
            <option value="">Pick a season</option>
            <option value="1">winter</option>
            <option value="2">spring</option>
            <option value="3">summer</option>
            <option value="4">autumn</option>
        </select>
    `;

    radioEl.innerHTML = `
        <label for="size">Display</label>
        <input type="radio" name="output" id="photo" value="photo">Photo
        <input type="radio" name="output" id="source" value="source">Source
    `;

    textboxEl.innerHTML = `
        <label for="captcha">Captcha</label>
        <input type="text" name="captcha" id="captcha">
        <br><label></label>Type '<b>pizza</b>' to prove you're not a bot.
    `;

    checkboxEl.innerHTML = `
        <label></label>
        <input type="checkbox" name="human" id="human" value="yes">I super promise I am 100% human.
    `;

    buttonEl.innerHTML = `
        <label></label>    
        <button id="show-btn"><h3 id=show-btn-active>Show<h3></button>
    `;
});


// norwegian form
norskBtn.addEventListener("click", function(){
    englishBtn.textContent = "english";
    norskBtn.textContent = "{norwegian}";
    console.log("no");

    dropdownEl.innerHTML = `
        <label for="season">Årstid</label>
        <select name="season" id="season">
            <option value="">Velg sesong</option>
            <option value="1">vinter</option>
            <option value="2">vår</option>
            <option value="3">sommer</option>
            <option value="4">høst</option>
        </select>
    `;

    radioEl.innerHTML = `
        <label for="size">Vise</label>
        <input type="radio" name="output" id="photo" value="photo">Bilde
        <input type="radio" name="output" id="source" value="source">Kilde
    `;

    textboxEl.innerHTML = `
        <label for="captcha">Captcha</label>
        <input type="text" name="captcha" id="captcha">
        <br><label></label>Skriv '<b>pizza</b>' for å bevise at du ikke er en bot.
    `;

    checkboxEl.innerHTML = `
        <label></label>
        <input type="checkbox" name="human" id="human" value="yes">Jeg lover at jeg er 100% menneskelig.
    `;

    buttonEl.innerHTML = `
        <label></label>    
        <button id="show-btn"><h3 id=show-btn-active>Avsløre<h3></button>
    `;
    
});

// GET SEASON. validates and indexes dropdown selection of seasons. Tepper, 10DEC2022.
const getSeason = (arr) => {
    const season = parseInt(document.getElementById("season").value);
    //let season = 2;

    if (season === "") {
        errorMsg[errorMsg.length] = "Please pick a season.";
    }
    else {
        let i = season - 1;
        quarter = i;
        return arr[i];
    }
}



// GET PHOTO DISPLAY. validates display options and show photo or source URL. Tepper, 10DEC2022.
const getDisplay = () => {
    let output = document.forms["picsForm"]["output"];
    let i = quarter;
    let imgsDOM = ``;
    console.log(output);

    if (output[0].checked == false && output[1].checked == false) {
        errorMsg[errorMsg.length] = "Please select display option.";
        console.error("no display chosen");
    }
    else if (output[0].checked == true) {
        console.log("display success");
        imgsDOM += `<img id="season-img" src="${getSeason(seasons)}">`;
    }
    else if (output[1].checked == true) {
        console.log("no display chosen");
        imgsDOM += `<p><button id="src-btn" ><a target="_blank" href="${sources[i]}">View on Pexels</a></button><p>`;
    }
    photoEl.innerHTML = imgsDOM;
}

const validateEntries = () => {
    // grab DOM element values
    
    const sizeThumb = document.getElementById("thumbnail").value;
    const sizeFull = document.getElementById("full").value;
    const captcha = document.getElementById("captcha").value;
    const human = document.getElementById("human").value;




    if (sizeThumb === "" && sizeFull === "") {
        errorMsg[errorMsg.length] = "Please select photo size.";
    }
    if (captcha != "pizza")  {
        errorMsg[errorMsg.length] = "Please enter the captcha code.";
    }
    if (!human) {
        errorMsg[errorMsg.length] = "Please verify that you are human.";
    }

}

const showPhoto = () =>{
    getDisplay()
}

/* FOOTER. Tepper, 06NOV2022 *******************************************/
const footerEl = document.getElementById("footer-el");

const studentName = "tepper-d"
const today = new Date();
let whatIsToday = today.toDateString();

footerEl.textContent = `${studentName}, ${whatIsToday}`;