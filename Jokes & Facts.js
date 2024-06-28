// Get references to the elements where you want to display the facts, jokes, etc.
const catFactDisplay = document.getElementById("cat-fact");
const numberFactDisplay = document.getElementById("num-fact");
const hpFactDisplay = document.getElementById("hp-fact");
const uselessFactDisplay = document.getElementById("useless-fact");
const jokeFactDisplay = document.getElementById("joke-fact");
const punFactDisplay = document.getElementById("pun-fact");

// ... (rest of your code for fetching facts, jokes, etc.)
const catFacts = async () => {
    let response = await fetch("https://meowfacts.herokuapp.com/?count=3");
    let data = await response.json();
    const randomFactIndex = Math.floor(Math.random() * data.data.length); 
    const factText = data.data[randomFactIndex];
    catFactDisplay.innerText = factText;
};

// Fetch random dog facts
const numberFacts = async () => {
    let URL = "http://numbersapi.com/";
    const randomFactIndex = Math.floor(Math.random() * 100);
    let response = await fetch(`http://numbersapi.com/${randomFactIndex}`);
    let factText = await response.text();
    numberFactDisplay.innerText = factText;
};

// Fetch random Harry Potter facts
const hpFacts = async () => {
    let response = await fetch("https://potterapi-fedeperin.vercel.app/en/spells/random");
    let data = await response.json();
    const factText = "The spell " + data.spell + " is used to " + data.use;
    hpFactDisplay.innerText = factText;
};

// Fetch random useless facts
const uselessFacts = async () => {
    let response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
    let data = await response.json();
    const factText = data.text;
    uselessFactDisplay.innerText = factText;
};

// Fetch random joke facts
const jokeFacts = async () => {
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await response.json();
    const factText = data.setup + " " + data.punchline;
    jokeFactDisplay.innerText = factText;
};

// Fetch random pun facts
const punFacts = async () => {
    let response = await fetch("https://techy-api.vercel.app/api/json");
    let data = await response.json();
    const factText = data.message;
    punFactDisplay.innerText = factText;
};


// Event listeners for buttons
const catBtn = document.getElementById("cat-button");
const dogBtn = document.getElementById("num-button");
const hpBtn = document.getElementById("hp-button");
const uselessBtn = document.getElementById("useless-button");
const jokeBtn = document.getElementById("joke-button");
const punBtn = document.getElementById("pun-button");

catBtn.addEventListener("click", catFacts);
dogBtn.addEventListener("click", numberFacts);
hpBtn.addEventListener("click", hpFacts);
uselessBtn.addEventListener("click", uselessFacts);
jokeBtn.addEventListener("click", jokeFacts);
punBtn.addEventListener("click", punFacts);
