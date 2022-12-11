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
const seasons = ["winter.jpg", "spring.jpg", "summer.jpg", "fall.jpg"];

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
        <label for="size">Size</label>
        <input type="radio" name="size" id="thumbnail" value="thumbnail">Thumbnail
        <input type="radio" name="size" id="full" value="full">Full Size
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
        <label for="size">Size</label>
        <input type="radio" name="size" id="thumbnail" value="20">Miniatyrbilde
        <input type="radio" name="size" id="full" value="100">Full Størrelse
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

const getSeason = (arr) => {
    const season = parseInt(document.getElementById("season").value);
    //let season = 2;

    if (season === "") {
        errorMsg[errorMsg.length] = "Please pick a season.";
    }
    else {
        let i = season - 1;
        return arr[i];
    }
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
    let imgsDOM = "";
    let arr="";
    imgsDOM += `<img id="season-img" src="${getSeason(seasons)}">`
    photoEl.innerHTML = imgsDOM;
}

/* FOOTER. Tepper, 06NOV2022 *******************************************/
const footerEl = document.getElementById("footer-el");

const studentName = "tepper-d"
const today = new Date();
let whatIsToday = today.toDateString();

footerEl.textContent = `${studentName}, ${whatIsToday}`;